/**
 * Motion Hub — Comms Relay  (/api/comms)
 * ------------------------------------------------------------------
 * A two-lane message queue that lets Claude (the bridge crew) and a
 * Microsoft Copilot agent talk through the Hub without either one
 * needing access to the other.
 *
 *   inbox  — written by Copilot (Outlook/Teams side) → read by Claude
 *            calendar for today, asks addressed to Sean, mentions, replies
 *   outbox — written by Claude/Sean (via the Bridge or comms.html) → read by Copilot
 *            drafts to place in Outlook/Teams, replies, notes to the officer
 *
 * Auth: every request needs the relay key — header `x-hub-key: <key>` or
 * query `?k=<key>` (Claude's fetcher can only send a URL, so it uses `?k=`).
 * Requests from the Hub's own pages (same-origin) are also allowed so
 * comms.html works without a key. Set HUB_COMMS_KEY in the Vercel project.
 *
 *   GET  /api/comms?k=…&lane=inbox|outbox&status=new|handled|all&since=<ms>&limit=50
 *        → { inbox:[…], outbox:[…], counts:{…}, updatedAt }
 *   POST /api/comms            body: { lane:"inbox"|"outbox", items:[ {from, type, subject, body, to?, channel?, ref?, when?} ] }
 *        → { ok:true, added:[ids] }
 *   POST /api/comms            body: { lane:"inbox"|"outbox", ack:[ids], status:"handled"|"new" }
 *        → { ok:true, updated:n }
 *
 * Message shape (server fills id, at, status):
 *   { id, at:<ms>, from:"copilot"|"claude"|"sean", type:"calendar"|"ask"|"mention"|"reply"|"draft"|"note"|"digest",
 *     subject, body, to?, channel?:"teams"|"email", ref?, when?, status:"new"|"handled", handledAt? }
 *
 * Storage: same Upstash/Vercel KV REST store as /api/data, separate key.
 */

var KEY = process.env.MOTION_HUB_COMMS_KEY_NAME || "motion-hub:comms";
var MAX_PER_LANE = 300;
var MAX_BODY = 20000;   // chars per message body
var MAX_BYTES = 900000; // total store guard

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
function readBody(req) {
  if (req.body !== undefined && req.body !== null) return Promise.resolve(req.body);
  return new Promise(function (resolve, reject) {
    var data = ""; req.on("data", function (c) { data += c; if (data.length > MAX_BYTES) { reject(new Error("too-large")); try { req.destroy(); } catch (e) {} } });
    req.on("end", function () { resolve(data); }); req.on("error", reject);
  });
}
function hostOf(u) { if (!u) return ""; try { return new URL(u).host.toLowerCase(); } catch (e) { return ""; } }
function sameOrigin(req) {
  var self = String(req.headers.host || "").toLowerCase();
  var from = hostOf(req.headers.origin) || hostOf(req.headers.referer);
  return !!from && from === self;
}
function keyOk(req, query) {
  var want = process.env.HUB_COMMS_KEY || "";
  if (!want) return false;
  var got = req.headers["x-hub-key"] || query.k || "";
  if (typeof got !== "string" || got.length !== want.length) return false;
  var diff = 0; for (var i = 0; i < want.length; i++) diff |= want.charCodeAt(i) ^ got.charCodeAt(i);
  return diff === 0;
}
function rid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
function str(v, max) { return typeof v === "string" ? v.slice(0, max || 500) : ""; }
var LANES = ["inbox", "outbox"];
var FROM = ["copilot", "claude", "sean"];
var TYPES = ["calendar", "ask", "mention", "reply", "draft", "note", "digest"];

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
  if (!process.env.HUB_COMMS_KEY) { res.status(503).json({ error: "Relay not enabled: set HUB_COMMS_KEY in the Vercel project." }); return; }
  if (!(keyOk(req, query) || sameOrigin(req))) { res.status(401).json({ error: "Relay key required." }); return; }

  try {
    var raw = await kv(["GET", KEY]); var store = null;
    if (raw) { try { store = JSON.parse(raw); } catch (e) { store = null; } }
    if (!store || typeof store !== "object") store = { inbox: [], outbox: [], updatedAt: 0 };
    LANES.forEach(function (l) { if (!Array.isArray(store[l])) store[l] = []; });

    if (req.method === "GET") {
      var lane = LANES.indexOf(query.lane) !== -1 ? [query.lane] : LANES;
      var status = query.status || "new";
      var since = Number(query.since) || 0;
      var limit = Math.min(Math.max(Number(query.limit) || 50, 1), 200);
      var out = { counts: {}, updatedAt: store.updatedAt || 0 };
      LANES.forEach(function (l) {
        var all = store[l];
        out.counts[l] = { new: all.filter(function (m) { return m.status === "new"; }).length, total: all.length };
        if (lane.indexOf(l) === -1) return;
        out[l] = all.filter(function (m) { return (status === "all" || m.status === status) && (!since || m.at > since); })
                   .sort(function (a, b) { return b.at - a.at; }).slice(0, limit);
      });
      res.status(200).json(out); return;
    }

    if (req.method === "POST") {
      var body;
      try { body = await readBody(req); } catch (e) { res.status(413).json({ error: "Payload too large." }); return; }
      if (typeof body === "string") { try { body = body ? JSON.parse(body) : {}; } catch (e) { res.status(400).json({ error: "Invalid JSON body." }); return; } }
      if (!body || typeof body !== "object" || LANES.indexOf(body.lane) === -1) { res.status(400).json({ error: "Body needs lane: inbox|outbox." }); return; }
      var L = body.lane, now = Date.now();

      if (Array.isArray(body.ack)) {
        var to = body.status === "new" ? "new" : "handled"; var n = 0;
        store[L].forEach(function (m) { if (body.ack.indexOf(m.id) !== -1 && m.status !== to) { m.status = to; m.handledAt = to === "handled" ? now : null; n++; } });
        store.updatedAt = now;
        await kv(["SET", KEY, JSON.stringify(store)]);
        res.status(200).json({ ok: true, updated: n }); return;
      }

      var items = Array.isArray(body.items) ? body.items : (body.item ? [body.item] : []);
      if (!items.length) { res.status(400).json({ error: "Body needs items[] or ack[]." }); return; }
      if (items.length > 50) { res.status(400).json({ error: "At most 50 items per call." }); return; }
      var added = [];
      items.forEach(function (it) {
        if (!it || typeof it !== "object") return;
        var msg = {
          id: rid(), at: now, status: "new",
          from: FROM.indexOf(it.from) !== -1 ? it.from : (L === "inbox" ? "copilot" : "claude"),
          type: TYPES.indexOf(it.type) !== -1 ? it.type : "note",
          subject: str(it.subject, 300), body: str(it.body, MAX_BODY),
          to: str(it.to, 300), channel: it.channel === "teams" || it.channel === "email" ? it.channel : "",
          ref: str(it.ref, 500), when: str(it.when, 80)
        };
        if (!msg.subject && !msg.body) return;
        store[L].push(msg); added.push(msg.id);
      });
      // keep lanes bounded: drop the oldest handled first, then oldest of all
      if (store[L].length > MAX_PER_LANE) {
        store[L].sort(function (a, b) { return a.at - b.at; });
        while (store[L].length > MAX_PER_LANE) { var i = store[L].findIndex(function (m) { return m.status === "handled"; }); store[L].splice(i === -1 ? 0 : i, 1); }
      }
      store.updatedAt = now;
      var payload = JSON.stringify(store);
      if (payload.length > MAX_BYTES) { res.status(413).json({ error: "Relay store full; mark items handled." }); return; }
      await kv(["SET", KEY, payload]);
      res.status(200).json({ ok: true, added: added }); return;
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    res.status(502).json({ error: "Storage error: " + (e && e.message ? e.message : String(e)) });
  }
};
