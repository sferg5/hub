/**
 * Motion Hub — data API  (replaces the Google Sheet / Apps Script backend)
 * -----------------------------------------------------------------------
 * Same contract the whole site already uses, so NO front-end changes are needed:
 *
 *   GET  /api/data        -> { "data": { ...all keys... }, "updatedAt": <ms> }
 *   POST /api/data  body:   { "data": { ... }, "updatedAt": <ms> }   -> { "ok": true }
 *
 * Storage: a small key/value store (Vercel KV or Upstash Redis — NOT Google).
 * It's spoken over a simple HTTPS REST call, so this file needs no npm packages.
 *
 * SET UP (one time):
 *   1. In your Vercel project: Storage -> create a KV / Upstash Redis database ->
 *      "Connect to Project". Vercel adds the env vars automatically.
 *      (Or make a free database at upstash.com and copy its REST URL + token.)
 *   2. Make sure these environment variables exist on the project:
 *         KV_REST_API_URL      (or UPSTASH_REDIS_REST_URL)
 *         KV_REST_API_TOKEN    (or UPSTASH_REDIS_REST_TOKEN)
 *   3. Put this file at  api/data.js  in your repo (replacing the old one) and
 *      push. That's it — you can delete the old Apps Script and Google Sheet.
 *
 * See API-SETUP.md for a step-by-step guide and how to carry over existing data.
 */

var KEY = process.env.MOTION_HUB_KEY || "motion-hub:data";
var MAX_BYTES = 1500000; // ~1.5 MB guard (free KV tiers cap request size)

function creds() {
  return {
    url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "",
    token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ""
  };
}

// Run one Redis command via the REST endpoint, e.g. kv(["GET", KEY]).
async function kv(command) {
  var c = creds();
  var r = await fetch(c.url, {
    method: "POST",
    headers: { "Authorization": "Bearer " + c.token, "Content-Type": "application/json" },
    body: JSON.stringify(command)
  });
  var text = await r.text();
  var j;
  try { j = JSON.parse(text); } catch (e) { throw new Error("Unexpected storage response: " + text.slice(0, 140)); }
  if (j && j.error) throw new Error(j.error);
  return j ? j.result : null;
}

// Read the raw request body if the platform didn't already parse it.
function readBody(req) {
  if (req.body !== undefined && req.body !== null) return Promise.resolve(req.body);
  return new Promise(function (resolve, reject) {
    var data = "";
    req.on("data", function (chunk) {
      data += chunk;
      if (data.length > MAX_BYTES + 200000) { reject(new Error("too-large")); try { req.destroy(); } catch (e) {} }
    });
    req.on("end", function () { resolve(data); });
    req.on("error", reject);
  });
}


// ---------------------------------------------------------------------------
// Write guard. Reads stay public (the site and the Hub Watch poller need them);
// writes are accepted only from the Hub's own pages.
//
// Browsers always send an Origin header on POST. We accept a POST only when that
// Origin (or, failing that, the Referer) is this same deployment — production,
// a Vercel preview, a custom domain, or localhost during development — or one of
// the hosts listed in the optional HUB_ALLOWED_ORIGINS env var (comma-separated,
// e.g. "hub.example.com,localhost:3000"). Everything else gets a 403.
// ---------------------------------------------------------------------------
function hostOf(urlish) {
  if (!urlish) return "";
  try { return new URL(urlish).host.toLowerCase(); } catch (e) { return ""; }
}
function writeAllowed(req) {
  var self = String(req.headers.host || "").toLowerCase();
  var extra = String(process.env.HUB_ALLOWED_ORIGINS || "")
    .split(",").map(function (h) { return h.trim().toLowerCase(); }).filter(Boolean);
  var from = hostOf(req.headers.origin) || hostOf(req.headers.referer);
  if (!from) return false;                         // scripts/bots: no Origin, no write
  if (from === self) return true;                  // same deployment
  if (extra.indexOf(from) !== -1) return true;     // explicitly allowed
  if (/^localhost(:\d+)?$/.test(from) && /^localhost(:\d+)?$/.test(self)) return true;
  return false;
}

module.exports = async function handler(req, res) {
  // CORS: only this deployment's own pages may call the API from a browser.
  // (Server-side readers such as the Hub Watch poller don't use CORS, so GET still works for them.)
  var proto = String(req.headers["x-forwarded-proto"] || "https").split(",")[0];
  res.setHeader("Access-Control-Allow-Origin", proto + "://" + String(req.headers.host || ""));
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }

  var c = creds();
  if (!c.url || !c.token) {
    res.status(500).json({ error: "Storage not configured. Add KV_REST_API_URL and KV_REST_API_TOKEN to the Vercel project (see API-SETUP.md)." });
    return;
  }

  try {
    if (req.method === "GET") {
      var raw = await kv(["GET", KEY]);
      var snap = null;
      if (raw) { try { snap = JSON.parse(raw); } catch (e) { snap = null; } }
      if (!snap || typeof snap !== "object" || typeof snap.data !== "object") {
        snap = { data: {}, updatedAt: 0 };
      }
      res.status(200).json(snap);
      return;
    }

    if (req.method === "POST") {
      if (!writeAllowed(req)) {
        res.status(403).json({ error: "Writes are only accepted from the Hub's own pages." });
        return;
      }
      var body;
      try { body = await readBody(req); }
      catch (e) { res.status(413).json({ error: "Payload too large." }); return; }
      if (typeof body === "string") {
        try { body = body ? JSON.parse(body) : {}; }
        catch (e) { res.status(400).json({ error: "Invalid JSON body." }); return; }
      }
      if (!body || typeof body !== "object" || typeof body.data !== "object") {
        res.status(400).json({ error: "Body must be an object with a 'data' object." });
        return;
      }
      var snapshot = { data: body.data, updatedAt: body.updatedAt || Date.now() };
      var payload = JSON.stringify(snapshot);
      if (payload.length > MAX_BYTES) {
        res.status(413).json({ error: "Data too large for storage (>1.5MB). Trim media links or split content." });
        return;
      }
      await kv(["SET", KEY, payload]);
      res.status(200).json({ ok: true, updatedAt: snapshot.updatedAt });
      return;
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    res.status(502).json({ error: "Storage error: " + (e && e.message ? e.message : String(e)) });
  }
};
