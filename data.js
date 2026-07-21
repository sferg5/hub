/* ============================================================================
   api/data.js  —  Vercel Serverless Function (Node runtime)

   The shared, cross-machine store for the Motion Specialist Dashboard.
     • GET  /api/data   -> returns the saved snapshot (or an empty one)
     • POST /api/data   -> saves the snapshot sent in the request body

   Data is kept in a Redis key via the Upstash REST API. On Vercel, add the
   "Upstash for Redis" / KV integration (Storage tab) and it sets these env
   vars automatically:
       KV_REST_API_URL   (or UPSTASH_REDIS_REST_URL)
       KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_TOKEN)

   No npm dependencies — uses the fetch built into Vercel's Node runtime.
   Single shared document; concurrent writes are last-write-wins.
   ========================================================================== */

const REDIS_URL =
  process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const REDIS_TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";

const KEY = "motion-dashboard:data";

// Run one Redis command through the Upstash REST endpoint.
async function redis(command) {
  if (!REDIS_URL || !REDIS_TOKEN) {
    throw new Error("missing-config");
  }
  const res = await fetch(REDIS_URL, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + REDIS_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  if (!res.ok) {
    throw new Error("redis HTTP " + res.status);
  }
  const json = await res.json();
  return json.result; // string, null, or "OK"
}

export default async function handler(req, res) {
  // Same-origin in production; permissive CORS keeps it flexible if the client
  // is ever hosted elsewhere.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (!REDIS_URL || !REDIS_TOKEN) {
    res.status(500).json({
      error: "not-configured",
      message:
        "Storage isn't set up yet. In the Vercel dashboard, open Storage, add " +
        "Upstash for Redis (or KV), and connect it to this project. That sets " +
        "KV_REST_API_URL and KV_REST_API_TOKEN. Then redeploy.",
    });
    return;
  }

  try {
    if (req.method === "GET") {
      const raw = await redis(["GET", KEY]);
      if (!raw) {
        res.status(200).json({ version: 1, updatedAt: 0, data: {} });
        return;
      }
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (e) {
        parsed = { version: 1, updatedAt: 0, data: {} };
      }
      res.status(200).json(parsed);
      return;
    }

    if (req.method === "POST") {
      // req.body is auto-parsed for application/json; fall back to raw text.
      let payload = req.body;
      if (typeof payload === "string") {
        try {
          payload = JSON.parse(payload);
        } catch (e) {
          res.status(400).json({ error: "bad-json" });
          return;
        }
      }
      if (!payload || typeof payload !== "object" || typeof payload.data !== "object") {
        res.status(400).json({ error: "expected-snapshot", message: "Body must be { version, updatedAt, data }." });
        return;
      }
      // Stamp server-side receipt time if the client didn't set one.
      if (!payload.updatedAt) payload.updatedAt = Date.now();
      await redis(["SET", KEY, JSON.stringify(payload)]);
      res.status(200).json({ ok: true, updatedAt: payload.updatedAt });
      return;
    }

    res.setHeader("Allow", "GET, POST, OPTIONS");
    res.status(405).json({ error: "method-not-allowed" });
  } catch (err) {
    res.status(502).json({ error: "storage-unavailable", message: String(err && err.message || err) });
  }
}
