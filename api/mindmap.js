/**
 * Motion Hub — Mind Map API
 * -------------------------
 * Backs mindmap.html (the Office Installation mind map). Lives beside
 * api/data.js and uses the SAME Redis / KV database and credentials, but its
 * own keys, so the shared /api/data blob (1.5 MB cap) never sees a single
 * image byte.
 *
 *   GET    /api/mindmap             -> { map: {...}, updatedAt: <ms> }
 *   POST   /api/mindmap  { map, updatedAt }         -> { ok, updatedAt }
 *
 *   GET    /api/mindmap?img=<id>    -> the image bytes (image/jpeg|png|webp)
 *   PUT    /api/mindmap?img=<id>  { dataUrl }       -> { ok, id, bytes }
 *   DELETE /api/mindmap?img=<id>    -> { ok }
 *
 * Each image is its own Redis key (motion-hub:mindmap:img:<id>) holding a
 * data: URL. The browser downscales before upload, so a card image is
 * typically 100-400 KB. Image ids are unique per upload, so GET responses
 * are served with a long immutable cache header.
 */

var MAP_KEY   = process.env.MOTION_HUB_MINDMAP_KEY || "motion-hub:mindmap";
var IMG_PRE   = MAP_KEY + ":img:";
var MAX_MAP   = 1500000;   // 1.5 MB for the map JSON (cards, labels, links)
var MAX_IMG   = 950000;    // ~0.95 MB per image (free Upstash REST caps a request at 1 MB)
var ID_RE     = /^[a-z0-9_-]{4,40}$/i;

function creds() {
  return {
    url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "",
    token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ""
  };
}

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

function readBody(req, cap) {
  if (req.body !== undefined && req.body !== null) return Promise.resolve(req.body);
  return new Promise(function (resolve, reject) {
    var data = "";
    req.on("data", function (chunk) {
      data += chunk;
      if (data.length > cap + 200000) { reject(new Error("too-large")); try { req.destroy(); } catch (e) {} }
    });
    req.on("end", function () { resolve(data); });
    req.on("error", reject);
  });
}

async function parseJson(req, cap, res) {
  var body;
  try { body = await readBody(req, cap); }
  catch (e) { res.status(413).json({ error: "Payload too large." }); return null; }
  if (typeof body === "string") {
    try { body = body ? JSON.parse(body) : {}; }
    catch (e) { res.status(400).json({ error: "Invalid JSON body." }); return null; }
  }
  if (!body || typeof body !== "object") { res.status(400).json({ error: "Body must be a JSON object." }); return null; }
  return body;
}

function emptyMap() {
  return { v: 1, labels: [], cards: [], links: [] };
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") { res.status(204).end(); return; }

  var c = creds();
  if (!c.url || !c.token) {
    res.status(500).json({ error: "Storage not configured. Add KV_REST_API_URL and KV_REST_API_TOKEN to the Vercel project." });
    return;
  }

  var img = (req.query && req.query.img) || "";
  if (Array.isArray(img)) img = img[0];

  try {
    /* ---------------- images ---------------- */
    if (img) {
      if (!ID_RE.test(img)) { res.status(400).json({ error: "Bad image id." }); return; }
      var ikey = IMG_PRE + img;

      if (req.method === "GET") {
        var stored = await kv(["GET", ikey]);
        if (!stored) { res.setHeader("Cache-Control", "no-store"); res.status(404).json({ error: "No such image." }); return; }
        var m = /^data:(image\/[a-z0-9.+-]+);base64,(.*)$/i.exec(stored);
        if (!m) { res.status(500).json({ error: "Stored image is malformed." }); return; }
        var buf = Buffer.from(m[2], "base64");
        res.setHeader("Content-Type", m[1]);
        res.setHeader("Content-Length", String(buf.length));
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        res.status(200).end(buf);
        return;
      }

      if (req.method === "PUT" || req.method === "POST") {
        var ib = await parseJson(req, MAX_IMG, res); if (!ib) return;
        var dataUrl = String(ib.dataUrl || "");
        if (!/^data:image\/(jpeg|png|webp|gif);base64,[A-Za-z0-9+/=]+$/.test(dataUrl)) {
          res.status(400).json({ error: "dataUrl must be a base64 image/jpeg, png, webp or gif." }); return;
        }
        if (dataUrl.length > MAX_IMG) { res.status(413).json({ error: "Image too large (>0.95 MB after encoding). Downscale it and try again." }); return; }
        await kv(["SET", ikey, dataUrl]);
        res.setHeader("Cache-Control", "no-store");
        res.status(200).json({ ok: true, id: img, bytes: dataUrl.length });
        return;
      }

      if (req.method === "DELETE") {
        await kv(["DEL", ikey]);
        res.setHeader("Cache-Control", "no-store");
        res.status(200).json({ ok: true });
        return;
      }

      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    /* ---------------- the map ---------------- */
    res.setHeader("Cache-Control", "no-store");

    if (req.method === "GET") {
      var raw = await kv(["GET", MAP_KEY]);
      var snap = null;
      if (raw) { try { snap = JSON.parse(raw); } catch (e) { snap = null; } }
      if (!snap || typeof snap !== "object" || !snap.map || typeof snap.map !== "object") {
        snap = { map: emptyMap(), updatedAt: 0 };
      }
      res.status(200).json(snap);
      return;
    }

    if (req.method === "POST" || req.method === "PUT") {
      var body = await parseJson(req, MAX_MAP, res); if (!body) return;
      if (!body.map || typeof body.map !== "object") { res.status(400).json({ error: "Body must contain a 'map' object." }); return; }
      var map = body.map;
      if (!Array.isArray(map.cards) || !Array.isArray(map.links) || !Array.isArray(map.labels)) {
        res.status(400).json({ error: "map needs cards[], links[] and labels[]." }); return;
      }
      var snapshot = { map: map, updatedAt: body.updatedAt || Date.now() };
      var payload = JSON.stringify(snapshot);
      if (payload.length > MAX_MAP) {
        res.status(413).json({ error: "Map too large (>1.5 MB). Images should be uploaded via ?img=, not embedded." }); return;
      }
      await kv(["SET", MAP_KEY, payload]);
      res.status(200).json({ ok: true, updatedAt: snapshot.updatedAt });
      return;
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    res.setHeader("Cache-Control", "no-store");
    res.status(502).json({ error: "Storage error: " + (e && e.message ? e.message : String(e)) });
  }
};
