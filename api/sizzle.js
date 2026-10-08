/**
 * Motion Hub — Sizzler feedback + usage API  (/api/sizzle)
 * ------------------------------------------------------------------
 * Backs the sizzle reel builder (sizzle.html) and its admin page (sizzle-admin.html).
 *
 *   POST /api/sizzle   { type:"event",    uid, event, props?, name? }      ← the tool, same-origin
 *   POST /api/sizzle   { type:"feedback", uid, name?, text, env? }         ← the tool, same-origin
 *   POST /api/sizzle   { action:"status", id, status }                     ← admin (key)
 *   POST /api/sizzle   { action:"delete-feedback", id } | { action:"clear-events" }   ← admin (key)
 *   GET  /api/sizzle?admin=1&days=30                                        ← admin (key)
 *        → { feedback:[…], users:{uid:{…}}, daily:{date:{users,sessions,exports,…}}, events:[…], totals, ts }
 *
 * Auth for admin calls: header `x-hub-key` or `?k=` matching SIZZLER_ADMIN_KEY
 * (falls back to HUB_COMMS_KEY). If neither is set, admin calls are allowed
 * from the hub's own pages only, so the page works before a key exists.
 * The tool's own writes are accepted same-origin without a key.
 *
 * Storage: the Vercel KV / Upstash Redis store the other APIs use, in its own
 * keys so nothing here can ever clobber the site's data blob:
 *   sizzler:feedback   LIST  newest first, JSON per item, capped
 *   sizzler:users      HASH  uid → JSON { name, first, last, sessions, exports, vo, tracks, ua }
 *   sizzler:daily      HASH  "YYYY-MM-DD:<metric>" → count
 *   sizzler:dau:<date> SET   uids seen that day (expires after 120 days)
 *   sizzler:events     LIST  recent raw events, capped
 * Nothing personal is stored unless someone types their name into feedback.
 */

var PRE = process.env.SIZZLER_KEY_PREFIX || "sizzler";
var K = { feedback: PRE + ":feedback", users: PRE + ":users", daily: PRE + ":daily", events: PRE + ":events", dau: PRE + ":dau:" };
var MAX_FEEDBACK = 500, MAX_EVENTS = 1500, MAX_BODY = 20000, DAU_TTL = 120 * 86400;
var UID_RE = /^u[a-z0-9]{6,24}$/;
var EVENTS = ["open", "track", "export", "vo", "resume", "feedback", "error"];

function creds() {
  return {
    url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "",
    token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ""
  };
}
async function kv(command) {
  var c = creds();
  var r = await fetch(c.url, { method: "POST", headers: { "Authorization": "Bearer " + c.token, "Content-Type": "application/json" }, body: JSON.stringify(command) });
  var text = await r.text(); var j;
  try { j = JSON.parse(text); } catch (e) { throw new Error("Unexpected storage response: " + text.slice(0, 140)); }
  if (j && j.error) throw new Error(j.error);
  return j ? j.result : null;
}
function pairs(result) {
  var out = {};
  if (!result) return out;
  if (Array.isArray(result)) { for (var i = 0; i + 1 < result.length; i += 2) out[String(result[i])] = String(result[i + 1]); return out; }
  if (typeof result === "object") Object.keys(result).forEach(function (k) { out[k] = String(result[k]); });
  return out;
}
function readBody(req) {
  if (req.body !== undefined && req.body !== null) return Promise.resolve(req.body);
  return new Promise(function (resolve, reject) {
    var data = "";
    req.on("data", function (c) { data += c; if (data.length > MAX_BODY) { reject(new Error("too-large")); try { req.destroy(); } catch (e) {} } });
    req.on("end", function () { resolve(data); }); req.on("error", reject);
  });
}
function hostOf(u) { if (!u) return ""; try { return new URL(u).host.toLowerCase(); } catch (e) { return ""; } }
function sameOrigin(req) {
  var self = String(req.headers.host || "").toLowerCase();
  var from = hostOf(req.headers.origin) || hostOf(req.headers.referer);
  return !!from && from === self;
}
function adminKey() { return process.env.SIZZLER_ADMIN_KEY || process.env.HUB_COMMS_KEY || ""; }
function keyOk(req, query) {
  var want = adminKey(); if (!want) return false;
  var got = req.headers["x-hub-key"] || query.k || "";
  if (typeof got !== "string" || got.length !== want.length) return false;
  var diff = 0; for (var i = 0; i < want.length; i++) diff |= want.charCodeAt(i) ^ got.charCodeAt(i);
  return diff === 0;
}
function adminOk(req, query) { return adminKey() ? keyOk(req, query) : sameOrigin(req); }
function rid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
function str(v, max) { return typeof v === "string" ? v.slice(0, max || 500) : ""; }
function day(ms) { return new Date(ms).toISOString().slice(0, 10); }
function parseJSON(s, d) { try { return s ? JSON.parse(s) : d; } catch (e) { return d; } }
function shortUA(ua) {
  ua = String(ua || "");
  var b = /Edg\//.test(ua) ? "Edge" : /Chrome\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : /Firefox\//.test(ua) ? "Firefox" : "Browser";
  var os = /Mac OS X/.test(ua) ? "Mac" : /Windows/.test(ua) ? "Windows" : /iPhone|iPad/.test(ua) ? "iOS" : /Android/.test(ua) ? "Android" : "";
  return (b + " " + os).trim();
}

// one person's running totals: a single-field read-modify-write on the users hash
async function bumpUser(uid, patch, now) {
  var u = parseJSON(await kv(["HGET", K.users, uid]), null) || { first: now, sessions: 0, exports: 0, vo: 0, tracks: 0, feedback: 0 };
  u.last = now;
  if (patch.name) u.name = str(patch.name, 80);
  if (patch.ua) u.ua = shortUA(patch.ua);
  if (patch.version) u.version = str(patch.version, 40);
  if (patch.inc) u[patch.inc] = (u[patch.inc] || 0) + 1;
  await kv(["HSET", K.users, uid, JSON.stringify(u)]);
  return u;
}
async function count(metric, now, uid) {
  var d = day(now);
  await kv(["HINCRBY", K.daily, d + ":" + metric, 1]);
  if (uid) { await kv(["SADD", K.dau + d, uid]); await kv(["EXPIRE", K.dau + d, DAU_TTL]); }
}
async function pushEvent(ev) {
  await kv(["LPUSH", K.events, JSON.stringify(ev)]);
  await kv(["LTRIM", K.events, 0, MAX_EVENTS - 1]);
}

module.exports = async function handler(req, res) {
  var proto = String(req.headers["x-forwarded-proto"] || "https").split(",")[0];
  res.setHeader("Access-Control-Allow-Origin", proto + "://" + String(req.headers.host || ""));
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-hub-key");
  res.setHeader("Cache-Control", "no-store");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }

  var query = {};
  try { query = Object.fromEntries(new URL(req.url, "http://x").searchParams); } catch (e) {}
  var c = creds();
  if (!c.url || !c.token) { res.status(500).json({ error: "Storage not configured (KV_REST_API_URL / KV_REST_API_TOKEN)." }); return; }
  var now = Date.now();

  try {
    if (req.method === "GET") {
      if (!adminOk(req, query)) { res.status(401).json({ error: "Admin key required." }); return; }
      var days = Math.min(Math.max(parseInt(query.days, 10) || 30, 1), 120);
      var feedback = (await kv(["LRANGE", K.feedback, 0, MAX_FEEDBACK - 1]) || []).map(function (s) { return parseJSON(s, null); }).filter(Boolean);
      var users = {}; var uraw = pairs(await kv(["HGETALL", K.users]));
      Object.keys(uraw).forEach(function (uid) { var u = parseJSON(uraw[uid], null); if (u) users[uid] = u; });
      var dailyRaw = pairs(await kv(["HGETALL", K.daily]));
      var daily = {};
      for (var i = days - 1; i >= 0; i--) {
        var d = day(now - i * 86400000);
        daily[d] = { users: 0, sessions: 0, exports: 0, vo: 0, tracks: 0, feedback: 0, errors: 0 };
      }
      Object.keys(dailyRaw).forEach(function (f) {
        var cut = f.indexOf(":"); if (cut < 1) return;
        var d = f.slice(0, cut), m = f.slice(cut + 1);
        if (!daily[d]) return;
        var key = m === "open" ? "sessions" : m === "export" ? "exports" : m === "track" ? "tracks" : m === "vo" ? "vo" : m === "feedback" ? "feedback" : m === "error" ? "errors" : null;
        if (key) daily[d][key] = parseInt(dailyRaw[f], 10) || 0;
      });
      var dates = Object.keys(daily);
      for (var j = 0; j < dates.length; j++) daily[dates[j]].users = (await kv(["SCARD", K.dau + dates[j]])) || 0;
      var events = (await kv(["LRANGE", K.events, 0, 199]) || []).map(function (s) { return parseJSON(s, null); }).filter(Boolean);
      var weekAgo = now - 7 * 86400000, monthAgo = now - 30 * 86400000;
      var totals = {
        users: Object.keys(users).length,
        active7: Object.keys(users).filter(function (u) { return users[u].last > weekAgo; }).length,
        active30: Object.keys(users).filter(function (u) { return users[u].last > monthAgo; }).length,
        exports: Object.keys(users).reduce(function (n, u) { return n + (users[u].exports || 0); }, 0),
        vo: Object.keys(users).reduce(function (n, u) { return n + (users[u].vo || 0); }, 0),
        feedbackNew: feedback.filter(function (f) { return f.status === "new"; }).length,
        feedbackAll: feedback.length
      };
      res.status(200).json({ feedback: feedback, users: users, daily: daily, events: events, totals: totals, ts: now, keyed: !!adminKey() });
      return;
    }

    if (req.method === "POST") {
      var body;
      try { body = await readBody(req); } catch (e) { res.status(413).json({ error: "Payload too large." }); return; }
      if (typeof body === "string") { try { body = body ? JSON.parse(body) : {}; } catch (e) { res.status(400).json({ error: "Invalid JSON body." }); return; } }
      if (!body || typeof body !== "object") { res.status(400).json({ error: "Body must be an object." }); return; }

      // ---- admin actions ----
      if (body.action) {
        if (!adminOk(req, query)) { res.status(401).json({ error: "Admin key required." }); return; }
        if (body.action === "clear-events") { await kv(["DEL", K.events]); res.status(200).json({ ok: true }); return; }
        if (body.action === "status" || body.action === "delete-feedback") {
          var id = str(body.id, 40), status = ["new", "handled", "archived"].indexOf(body.status) !== -1 ? body.status : "handled";
          var list = (await kv(["LRANGE", K.feedback, 0, MAX_FEEDBACK - 1]) || []);
          var found = false;
          for (var x = 0; x < list.length; x++) {
            var it = parseJSON(list[x], null);
            if (!it || it.id !== id) continue;
            found = true;
            if (body.action === "delete-feedback") { await kv(["LSET", K.feedback, x, "__gone__"]); await kv(["LREM", K.feedback, 0, "__gone__"]); }
            else { it.status = status; it.handledAt = status === "new" ? null : now; await kv(["LSET", K.feedback, x, JSON.stringify(it)]); }
            break;
          }
          res.status(found ? 200 : 404).json(found ? { ok: true } : { error: "Not found." }); return;
        }
        res.status(400).json({ error: "Unknown action." }); return;
      }

      // ---- writes from the tool itself ----
      if (!(sameOrigin(req) || keyOk(req, query))) { res.status(401).json({ error: "Not allowed from here." }); return; }
      var uid = str(body.uid, 32);
      if (!UID_RE.test(uid)) { res.status(400).json({ error: "Bad uid." }); return; }

      if (body.type === "feedback") {
        var text = str(body.text, 4000).trim();
        if (!text) { res.status(400).json({ error: "Feedback text is empty." }); return; }
        var item = { id: rid(), at: now, uid: uid, name: str(body.name, 80).trim(), text: text, env: str(body.env, 2000), status: "new" };
        await kv(["LPUSH", K.feedback, JSON.stringify(item)]);
        await kv(["LTRIM", K.feedback, 0, MAX_FEEDBACK - 1]);
        await bumpUser(uid, { name: item.name, ua: req.headers["user-agent"], inc: "feedback" }, now);
        await count("feedback", now, uid);
        await pushEvent({ at: now, uid: uid, event: "feedback", props: { id: item.id } });
        res.status(200).json({ ok: true, id: item.id }); return;
      }

      if (body.type === "event") {
        var event = str(body.event, 20);
        if (EVENTS.indexOf(event) === -1) { res.status(400).json({ error: "Unknown event." }); return; }
        var props = (body.props && typeof body.props === "object") ? body.props : {};
        var clean = {}; Object.keys(props).slice(0, 12).forEach(function (k) { var v = props[k]; clean[str(k, 24)] = typeof v === "number" ? v : str(String(v == null ? "" : v), 120); });
        var inc = event === "open" ? "sessions" : event === "export" ? "exports" : event === "vo" ? "vo" : event === "track" ? "tracks" : null;
        await bumpUser(uid, { name: body.name, ua: req.headers["user-agent"], version: clean.version, inc: inc }, now);
        await count(event, now, uid);
        await pushEvent({ at: now, uid: uid, event: event, props: clean });
        res.status(200).json({ ok: true }); return;
      }
      res.status(400).json({ error: "Body needs type: event|feedback, or an admin action." }); return;
    }
    res.status(405).json({ error: "Method not allowed." });
  } catch (e) {
    res.status(500).json({ error: String(e && e.message || e) });
  }
};
