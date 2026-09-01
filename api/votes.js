/**
 * Motion Hub — changelog votes API
 * --------------------------------
 * Backs the thumbs on the Fast and Free showcase (/showcase.html).
 *
 *   GET  /api/votes                -> { tally: { <change>: {up,down} }, total, count }
 *   GET  /api/votes?voter=<id>     -> ...also { mine: { <change>: 1 | -1 } }
 *   POST /api/votes  body: { change, voter, v }   v = 1 | -1 | 0 (0 withdraws)
 *                                  -> { ok: true, tally, mine, total, count }
 *
 * Storage is the same Vercel KV / Upstash Redis database api/data.js already
 * uses — same env vars, no new setup, no npm packages. It does NOT touch the
 * motion-hub:data blob: that is one JSON document the whole site rewrites
 * wholesale, and a vote landing in the middle of someone's save would take the
 * site's content with it. Votes live in their own Redis HASH instead, one
 * field per person per change:
 *
 *      showcase:votes    <change>:<voter>  ->  "1" | "-1"
 *
 * which means a vote is a single-field HSET. No read-modify-write, so two
 * people voting at the same moment cannot overwrite each other, and the tally
 * is derived on read rather than stored and kept in step.
 */

var KEY = process.env.SHOWCASE_VOTES_KEY || "showcase:votes";
var MAX_FIELDS = 50000;          // a ceiling on the hash, not an expectation
var CHANGE_RE = /^[0-9a-f]{7,40}$/;
var VOTER_RE = /^v[a-z0-9]{4,24}$/;

function creds() {
  return {
    url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "",
    token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ""
  };
}

// Run one Redis command over the REST endpoint, e.g. kv(["HGETALL", KEY]).
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

// HGETALL comes back as a flat [field, value, field, value, ...] array over
// REST, and as an object from some clients. Accept either.
function pairs(result) {
  var out = {};
  if (!result) return out;
  if (Array.isArray(result)) {
    for (var i = 0; i + 1 < result.length; i += 2) out[String(result[i])] = String(result[i + 1]);
    return out;
  }
  if (typeof result === "object") {
    Object.keys(result).forEach(function (k) { out[k] = String(result[k]); });
  }
  return out;
}

// The tally is computed from the raw fields on every read. It is cheap at this
// size and it can never drift from the votes the way a stored counter can.
function summarise(fields, voter) {
  var tally = {}, mine = {}, total = 0, count = 0;
  Object.keys(fields).forEach(function (field) {
    var cut = field.lastIndexOf(":");
    if (cut < 1) return;
    var change = field.slice(0, cut), who = field.slice(cut + 1);
    var v = parseInt(fields[field], 10);
    if (v !== 1 && v !== -1) return;
    var t = tally[change] || (tally[change] = { up: 0, down: 0 });
    if (v > 0) t.up++; else t.down++;
    total++;
    if (voter && who === voter) mine[change] = v;
  });
  count = Object.keys(tally).length;
  return { tally: tally, mine: mine, total: total, count: count };
}

function readBody(req) {
  if (req.body !== undefined && req.body !== null) return Promise.resolve(req.body);
  return new Promise(function (resolve, reject) {
    var data = "";
    req.on("data", function (chunk) {
      data += chunk;
      if (data.length > 8000) { reject(new Error("too-large")); try { req.destroy(); } catch (e) {} }
    });
    req.on("end", function () { resolve(data); });
    req.on("error", reject);
  });
}

module.exports = async function handler(req, res) {
  // Same permissive CORS as api/data.js: the showcase is served from this
  // origin, but it is also opened as a local file and from other hosts, and a
  // vote count is not a secret.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Cache-Control", "no-store");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }

  var c = creds();
  if (!c.url || !c.token) {
    res.status(500).json({ error: "Storage not configured. Add KV_REST_API_URL and KV_REST_API_TOKEN to the Vercel project." });
    return;
  }

  try {
    if (req.method === "GET") {
      var voter = (req.query && req.query.voter) || "";
      if (Array.isArray(voter)) voter = voter[0];
      if (voter && !VOTER_RE.test(voter)) voter = "";
      var snap = summarise(pairs(await kv(["HGETALL", KEY])), voter);
      res.status(200).json(snap);
      return;
    }

    if (req.method === "POST") {
      var body;
      try { body = await readBody(req); }
      catch (e) { res.status(413).json({ error: "Payload too large." }); return; }
      if (typeof body === "string") {
        try { body = body ? JSON.parse(body) : {}; }
        catch (e) { res.status(400).json({ error: "Invalid JSON body." }); return; }
      }
      if (!body || typeof body !== "object") { res.status(400).json({ error: "Body must be an object." }); return; }

      var change = String(body.change || "");
      var who = String(body.voter || "");
      var v = parseInt(body.v, 10);
      if (!CHANGE_RE.test(change)) { res.status(400).json({ error: "Bad change id." }); return; }
      if (!VOTER_RE.test(who)) { res.status(400).json({ error: "Bad voter id." }); return; }
      if (v !== 1 && v !== -1 && v !== 0) { res.status(400).json({ error: "v must be 1, -1 or 0." }); return; }

      var field = change + ":" + who;
      if (v === 0) {
        await kv(["HDEL", KEY, field]);
      } else {
        // Only a NEW field grows the hash, so the ceiling is checked against
        // creation rather than against every vote change.
        var exists = await kv(["HEXISTS", KEY, field]);
        if (!Number(exists)) {
          var len = Number(await kv(["HLEN", KEY])) || 0;
          if (len >= MAX_FIELDS) { res.status(507).json({ error: "Vote store is full." }); return; }
        }
        await kv(["HSET", KEY, field, String(v)]);
      }

      // Hand back the fresh tally so a vote is one round trip, not two.
      var after = summarise(pairs(await kv(["HGETALL", KEY])), who);
      after.ok = true;
      res.status(200).json(after);
      return;
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    res.status(502).json({ error: "Storage error: " + (e && e.message ? e.message : String(e)) });
  }
};
