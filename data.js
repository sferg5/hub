/* ============================================================================
   api/data.js  —  Vercel Serverless Function (Node runtime)

   Thin proxy between the dashboard and your Google Sheet. The browser calls
   /api/data (same origin, no CORS); this function forwards to the Apps Script
   web app, which reads/writes the sheet. The Apps Script URL stays server-side,
   so it's never exposed to visitors.

     GET  /api/data  -> returns the snapshot from the sheet
     POST /api/data  -> saves the snapshot to the sheet

   SETUP
   -----
   Deploy Code.gs as a web app (see the instructions in that file), copy its
   "/exec" URL, and either:
     • set it as an environment variable  SHEET_WEBAPP_URL  in Vercel, or
     • paste it into the fallback constant just below.
   Then redeploy. No datastore add-on needed — the sheet is the store.
   ========================================================================== */

const SHEET_WEBAPP_URL =
  process.env.SHEET_WEBAPP_URL ||
  "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE"; // ...ends in /exec

function isConfigured() {
  return SHEET_WEBAPP_URL && SHEET_WEBAPP_URL.indexOf("http") === 0;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (!isConfigured()) {
    res.status(500).json({
      error: "not-configured",
      message:
        "Set SHEET_WEBAPP_URL to your Apps Script web app URL (ends in /exec) " +
        "— either as an environment variable in Vercel or in the fallback " +
        "constant in api/data.js — then redeploy.",
    });
    return;
  }

  try {
    if (req.method === "GET") {
      const upstream = await fetch(SHEET_WEBAPP_URL, { method: "GET", redirect: "follow" });
      const text = await upstream.text();
      res.status(200).json(safeParse(text, { version: 1, updatedAt: 0, data: {} }));
      return;
    }

    if (req.method === "POST") {
      let payload = req.body;
      if (typeof payload === "string") payload = safeParse(payload, null);
      if (!payload || typeof payload !== "object" || typeof payload.data !== "object") {
        res.status(400).json({ error: "expected-snapshot", message: "Body must be { version, updatedAt, data }." });
        return;
      }
      if (!payload.updatedAt) payload.updatedAt = Date.now();

      const upstream = await fetch(SHEET_WEBAPP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        redirect: "follow",
      });
      const text = await upstream.text();
      res.status(200).json(safeParse(text, { ok: true, updatedAt: payload.updatedAt }));
      return;
    }

    res.setHeader("Allow", "GET, POST, OPTIONS");
    res.status(405).json({ error: "method-not-allowed" });
  } catch (err) {
    res.status(502).json({ error: "sheet-unavailable", message: String(err && err.message || err) });
  }
}

function safeParse(text, fallback) {
  try { return JSON.parse(text); } catch (e) { return fallback; }
}
