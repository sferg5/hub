/* api/ping.js — diagnostic only.
   Visit /api/ping. If you see {"ok":true,...}, functions are deploying fine
   and the issue is specific to /api/data. If /api/ping ALSO 404s, then Vercel
   isn't building your api/ folder at all (see the checklist). Safe to delete
   once things work. */
module.exports = function handler(req, res) {
  res.status(200).json({ ok: true, ts: Date.now(), runtime: "vercel-node" });
};
