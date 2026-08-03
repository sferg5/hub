# Fabric Finder

A content-first guide that helps people understand lululemon's fabrics and find
the right one for their life — with a supporting 3D fabric preview.

Built on a Three.js cloth engine (originally the "holocloth" prototype). The page
leads with education and guidance; the 3D cloth is a supporting visual that shows
each fabric's look and drape.

## What's on the page

1. **Hero** — plain-language framing ("know your fabric before you buy it").
2. **Find my fabric** — a 4-question finder (activity, sweat level, feel, care
   effort) that scores the fabrics and recommends a match + products.
3. **The fabrics, explained** — a card per fabric; tap to load it.
4. **Detail** — the selected fabric in interactive 3D, plus:
   - what the name actually means (Nulu, Luon, Luxtreme, Everlux, Warpstreme)
   - how it feels / behaves
   - best activities (and where it falls short)
   - care instructions
   - specific products with prices, linking to lululemon

## Where the content lives (easy to edit)

- `src/content.ts` — all the human content: name meanings, feel, care steps,
  activity fit, **products + prices**, and the finder scoring weights. Update this
  one file to refresh products/prices or retune the finder.
- `src/fabrics.ts` — each fabric's 3D look (material) + drape (physics) + weave.
- `src/cloth.ts` — Verlet cloth sim with self-collision (thickness) so folds
  don't pass through each other.
- `src/scene.ts` — the engine; `applyParams()` + `applyFabric()` drive it.
- `src/App.tsx` — the page (hero, finder, library, detail).

> Product names/prices in `content.ts` are current as of Aug 2026 (US) and will
> change — they're isolated in one file for quick refreshes.

## Run it

```bash
npm install
npm run dev      # http://localhost:5199
```

```bash
npm run build    # type-checks + builds to dist/ (holocloth.html + holocloth.js)
```

## Put it on your existing site

The build emits files named `holocloth.*` so they drop into an existing site
without colliding with your index page. Upload `holocloth.html` and
`holocloth.js` (same folder) and link to `holocloth.html`.
