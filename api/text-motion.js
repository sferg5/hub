/**
 * Motion Hub — Text Motion Studio shared settings API  (/api/text-motion)
 * ------------------------------------------------------------------------
 * Lets people share saved text motion settings across machines.
 * Settings saved "to this browser" never come here; only ones someone shares.
 *
 *   GET  /api/text-motion?uid=<id>        -> { items: [ {id,name,label,by,ver,p,created,mine} ] }
 *   POST /api/text-motion  { action:"share",  uid, name, label?, by?, ver, p }   -> { ok, item, items }
 *   POST /api/text-motion  { action:"edit",   uid, id, name, label?, by? }       -> { ok, items }
 *   POST /api/text-motion  { action:"delete", uid, id }                          -> { ok, items }
 *
 * uid is a random id each browser makes for itself (no accounts). `by` is whatever
 * name the person chooses to type, and `label` is a short tag like "Draft". Only
 * the browser that shared a setting can edit or delete it. Writes are accepted from the
 * hub's own pages only.
 *
 * Storage is the same Vercel KV / Upstash Redis database the other APIs use, in
 * its own HASH so nothing here can touch the site's data blob:
 *
 *      textmotion:shared    <id>  ->  JSON { id, name, label, by, ver, p, owner, created, edited? }
 *
 * The settings are animation values only (colors, timings, angles). The page
 * clamps them to its safe ranges when they load, so a bad entry can't make the
 * nav look wrong; this file just checks shape and size.
 */

var KEY = process.env.TEXT_MOTION_KEY || "textmotion:shared";
var MAX_ITEMS = 300, MAX_BODY = 6000, MAX_P = 3000;
var UID_RE = /^t[a-z0-9]{6,24}$/;
var ID_RE = /^[a-z0-9]{6,32}$/;
var VERSIONS = ["original", "red", "gradient"];

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
function rid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
function parseJSON(s, d) { try { return s ? JSON.parse(s) : d; } catch (e) { return d; } }
function text(v, max) { return String(v == null ? "" : v).replace(/\s+/g, " ").trim().slice(0, max); }

// Settings are a flat object of short strings, finite numbers, booleans, an
// easing curve (an array of up to four numbers), or a list of 2–8 colour points
// ({ c: "#rrggbb", at: 0–100 }). Anything else is refused.
function isPoint(x) { return x && typeof x === "object" && !Array.isArray(x) && Object.keys(x).length === 2 && /^#[0-9a-fA-F]{6}$/.test(x.c) && typeof x.at === "number" && isFinite(x.at); }
function cleanParams(p) {
  if (!p || typeof p !== "object" || Array.isArray(p)) return null;
  var keys = Object.keys(p);
  if (keys.length > 40) return null;
  var out = {};
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i], v = p[k];
    if (!/^[a-zA-Z][a-zA-Z0-9]{0,23}$/.test(k)) return null;
    if (typeof v === "string") { if (v.length > 24) return null; }
    else if (typeof v === "number") { if (!isFinite(v)) return null; }
    else if (typeof v === "boolean") {}
    else if (v === null) {}
    else if (Array.isArray(v)) {
      var nums = v.length <= 4 && v.every(function (n) { return typeof n === "number" && isFinite(n); });
      var points = v.length >= 2 && v.length <= 8 && v.every(isPoint);
      if (!nums && !points) return null;
    }
    else return null;
    out[k] = v;
  }
  return JSON.stringify(out).length <= MAX_P ? out : null;
}

async function list(uid) {
  var raw = pairs(await kv(["HGETALL", KEY]));
  return Object.keys(raw).map(function (id) { return parseJSON(raw[id], null); }).filter(Boolean)
    .sort(function (a, b) { return (b.created || 0) - (a.created || 0); })
    .map(function (it) { return { id: it.id, name: it.name, label: it.label || "", by: it.by || "", ver: it.ver, p: it.p, created: it.created, mine: !!uid && it.owner === uid }; });
}

module.exports = async function handler(req, res) {
  var proto = String(req.headers["x-forwarded-proto"] || "https").split(",")[0];
  res.setHeader("Access-Control-Allow-Origin", proto + "://" + String(req.headers.host || ""));
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }

  var c = creds();
  if (!c.url || !c.token) { res.status(500).json({ error: "Storage not configured (KV_REST_API_URL / KV_REST_API_TOKEN)." }); return; }

  try {
    if (req.method === "GET") {
      var uid = (req.query && req.query.uid) || "";
      if (Array.isArray(uid)) uid = uid[0];
      if (!UID_RE.test(uid)) uid = "";
      res.status(200).json({ items: await list(uid) });
      return;
    }

    if (req.method === "POST") {
      if (!sameOrigin(req)) { res.status(403).json({ error: "Share from the Text Motion Studio page." }); return; }
      var body;
      try { body = await readBody(req); }
      catch (e) { res.status(413).json({ error: "Payload too large." }); return; }
      if (typeof body === "string") body = parseJSON(body, null);
      if (!body || typeof body !== "object") { res.status(400).json({ error: "Invalid JSON body." }); return; }

      var who = String(body.uid || "");
      if (!UID_RE.test(who)) { res.status(400).json({ error: "Bad uid." }); return; }

      if (body.action === "share") {
        var name = text(body.name, 40);
        if (!name) { res.status(400).json({ error: "Give the settings a name." }); return; }
        if (VERSIONS.indexOf(body.ver) < 0) { res.status(400).json({ error: "Unknown version." }); return; }
        var p = cleanParams(body.p);
        if (!p) { res.status(400).json({ error: "Settings are not in the expected shape." }); return; }
        var len = Number(await kv(["HLEN", KEY])) || 0;
        if (len >= MAX_ITEMS) { res.status(507).json({ error: "The shared list is full. Delete some old settings first." }); return; }
        var item = { id: rid(), name: name, label: text(body.label, 24), by: text(body.by, 40), ver: body.ver, p: p, owner: who, created: Date.now() };
        await kv(["HSET", KEY, item.id, JSON.stringify(item)]);
        res.status(200).json({ ok: true, item: { id: item.id, name: name, label: item.label, by: item.by, ver: item.ver, p: p, created: item.created, mine: true }, items: await list(who) });
        return;
      }

      if (body.action === "edit") {
        var eid = String(body.id || "");
        if (!ID_RE.test(eid)) { res.status(400).json({ error: "Bad id." }); return; }
        var was = parseJSON(await kv(["HGET", KEY, eid]), null);
        if (!was) { res.status(404).json({ error: "These settings were deleted." }); return; }
        if (was.owner !== who) { res.status(403).json({ error: "Only the browser that shared these settings can edit them." }); return; }
        var newName = text(body.name, 40);
        if (!newName) { res.status(400).json({ error: "Give the settings a name." }); return; }
        was.name = newName; was.label = text(body.label, 24); was.by = text(body.by, 40); was.edited = Date.now();
        await kv(["HSET", KEY, eid, JSON.stringify(was)]);
        res.status(200).json({ ok: true, items: await list(who) });
        return;
      }

      if (body.action === "delete") {
        var id = String(body.id || "");
        if (!ID_RE.test(id)) { res.status(400).json({ error: "Bad id." }); return; }
        var cur = parseJSON(await kv(["HGET", KEY, id]), null);
        if (!cur) { res.status(404).json({ error: "Already deleted." }); return; }
        if (cur.owner !== who) { res.status(403).json({ error: "Only the browser that shared these settings can delete them." }); return; }
        await kv(["HDEL", KEY, id]);
        res.status(200).json({ ok: true, items: await list(who) });
        return;
      }

      res.status(400).json({ error: "Unknown action." });
      return;
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    res.status(502).json({ error: "Storage error: " + (e && e.message ? e.message : String(e)) });
  }
};
