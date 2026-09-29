p="story-builder.html"; s=open(p).read()
def rep(a,b,n=1):
    global s
    assert s.count(a)==n, (a[:70], s.count(a)); s=s.replace(a,b)

# --- model
rep("  text: { x: 'left', y: 'bottom', align: 'auto', width: 'medium', size: 'xl', ink: 'dark' },",
    "  text: { x: 'left', y: 'bottom', align: 'auto', width: 'medium', size: 'xl', ink: 'dark', anim: 'rise' },")
rep("    if (!BEATS[x.beat]) x.beat = 'feel';",
    "    if (!BEATS[x.beat]) x.beat = 'feel';\n    if (!TYPE_ANIMS[x.text.anim]) x.text.anim = 'rise';")
rep("const FR = 4; // frames on stage: one per gallery tile at most",
"""const FR = 4; // frames on stage: one per gallery tile at most

/* How a section's copy arrives (and leaves). All scroll-driven, so every one scrubs backwards. */
const TYPE_ANIMS = {
  rise:    ['Rise',       'Words rise out of the line, one after another.'],
  cascade: ['Cascade',    'Each word fades and lifts into place in sequence.'],
  letters: ['Letters',    'Character by character, rising out of the line.'],
  type:    ['Typewriter', 'Characters appear in reading order. No movement.'],
  fade:    ['Fade',       'The whole copy block fades in with a short lift.'],
  blur:    ['Blur',       'The copy resolves out of a blur.'],
  scale:   ['Scale',      'The copy settles down from slightly larger.'],
  wipe:    ['Wipe',       'A wipe reveals the copy from its aligned edge.'],
};
const perLetter = s => s.text.anim === 'letters' || s.text.anim === 'type';""")

# --- text layer: optional per-letter spans, keep a handle on the section
rep("""  const words = [], parts = [];
  const P = el => { if (el) parts.push(el); return el; };
  let hl = null;
  if (s.headline) {
    hl = h(i === 0 ? 'h1' : 'h2', { class:'hl' + (s.quote.on ? ' q' : '') });
    (s.quote.on ? `“${s.headline}”` : s.headline).split(/\\s+/).filter(Boolean).forEach(w => {
      const inner = h('span', {}, w); words.push(inner); hl.append(h('span', { class:'w' }, inner), ' ');
    });
  }""",
"""  const words = [], letters = [], parts = [];
  const P = el => { if (el) parts.push(el); return el; };
  let hl = null;
  if (s.headline) {
    hl = h(i === 0 ? 'h1' : 'h2', { class:'hl' + (s.quote.on ? ' q' : '') });
    (s.quote.on ? `“${s.headline}”` : s.headline).split(/\\s+/).filter(Boolean).forEach(w => {
      const inner = perLetter(s) ? h('span', {}, ...[...w].map(ch => { const c = h('span', { class:'c' }, ch); letters.push(c); return c; })) : h('span', {}, w);
      words.push(inner); hl.append(h('span', { class:'w' }, inner), ' ');
    });
  }""")
rep("  return { el, copy, eb, words, parts, card };",
    "  return { s, el, copy, eb, words, letters, parts, card, ty:0, ty2:0, sc:1 };")
rep(".hl .w{display:inline-block;overflow:hidden;vertical-align:top;padding:0 .03em .12em;margin:0 -.03em -.12em}",
    ".hl .w{display:inline-block;overflow:hidden;vertical-align:top;padding:0 .03em .12em;margin:0 -.03em -.12em}\n.hl .c{display:inline-block}")

# --- hold: compose the copy transform instead of overwriting it
rep("""  const k = amt(), d = u - s.dwell / 2;
  L.copy.style.transform = `translateY(${-d * 26 * k}px)`;""",
"""  const k = amt(), d = u - s.dwell / 2;
  L.ty = -d * 26 * k; place(L);""")

# --- in / out choreography
rep("""/* type choreography: the old copy lifts away word by word, the new copy rises in */
function textOut(L, t) {
  L.words.forEach((w, k) => { const q = easeIn(clamp((t - k * .015) / .28)); w.style.transform = `translateY(${-q * 110}%)`; });
  const rest = [L.eb, ...L.parts].filter(Boolean);
  rest.forEach((p, k) => { const q = easeIn(clamp((t - .02 - k * .03) / .3)); p.style.transform = `translateY(${-q * 28}px)`; p.style.opacity = 1 - q; });
  if (L.card) { const q = easeIn(clamp((t - .06) / .3)); L.card.firstChild.style.transform = `translateY(${-q * 28}px)`; L.card.firstChild.style.opacity = 1 - q; }
}
function textIn(L, t, motion) {
  const base = motion === 'dissolve' ? .55 : .38, rise = motion === 'rise' ? 64 : 34;
  if (L.eb) { const q = easeOut(clamp((t - base) / .35)); L.eb.style.transform = `translateY(${(1 - q) * rise * .6}px)`; L.eb.style.opacity = q; }
  L.words.forEach((w, k) => { const q = easeOut(clamp((t - base - .05 - k * .025) / .34)); w.style.transform = `translateY(${(1 - q) * 110}%)`; });
  L.parts.forEach((p, k) => { const q = easeOut(clamp((t - base - .14 - k * .05) / .36)); p.style.transform = `translateY(${(1 - q) * rise}px)`; p.style.opacity = q; });
  if (L.card) { const q = easeOut(clamp((t - base - .2) / .36)); L.card.firstChild.style.transform = `translateY(${(1 - q) * rise}px)`; L.card.firstChild.style.opacity = q; }
}""",
"""/* type choreography: the copy leaves and arrives per its section's animation */
const place = L => { L.copy.style.transform = `translateY(${L.ty + L.ty2}px)` + (L.sc !== 1 ? ` scale(${L.sc})` : ''); };
function resetType(L) {
  const st = el => { el.style.transform = ''; el.style.opacity = ''; };
  L.words.forEach(st); L.letters.forEach(st); L.parts.forEach(st); if (L.eb) st(L.eb);
  L.el.style.opacity = ''; L.el.style.filter = ''; L.copy.style.clipPath = ''; L.ty2 = 0; L.sc = 1;
}
const wipeSide = L => (L.copy.dataset.align === 'right' ? 'right' : 'left');
function textOut(L, t) {
  resetType(L);
  const anim = L.s.text.anim, rest = [L.eb, ...L.parts].filter(Boolean);
  const restOut = () => rest.forEach((p, k) => { const q = easeIn(clamp((t - .02 - k * .03) / .3)); p.style.transform = `translateY(${-q * 28}px)`; p.style.opacity = 1 - q; });
  if (anim === 'rise') { L.words.forEach((w, k) => { const q = easeIn(clamp((t - k * .015) / .28)); w.style.transform = `translateY(${-q * 110}%)`; }); restOut(); }
  else if (anim === 'cascade') { L.words.forEach((w, k) => { const q = easeIn(clamp((t - k * .02) / .3)); w.style.transform = `translateY(${-q * 40}%)`; w.style.opacity = 1 - q; }); restOut(); }
  else if (anim === 'letters') { L.letters.forEach((c, k) => { const q = easeIn(clamp((t - k * .006) / .26)); c.style.transform = `translateY(${-q * 110}%)`; }); restOut(); }
  else if (anim === 'type') { const n = L.letters.length, f = (1 - clamp(t / .4)) * n; L.letters.forEach((c, k) => c.style.opacity = k < f ? 1 : 0); restOut(); }
  else {
    const q = easeIn(clamp(t / .38));
    if (anim === 'wipe') L.copy.style.clipPath = wipeSide(L) === 'left' ? `inset(0 ${q * 100}% 0 0)` : `inset(0 0 0 ${q * 100}%)`;
    else { L.el.style.opacity = 1 - q; L.ty2 = -q * 24; if (anim === 'blur') L.el.style.filter = `blur(${q * 12}px)`; if (anim === 'scale') L.sc = 1 - q * .06; }
  }
  if (L.card) { const q = easeIn(clamp((t - .06) / .3)); L.card.firstChild.style.transform = `translateY(${-q * 28}px)`; L.card.firstChild.style.opacity = 1 - q; }
  place(L);
}
function textIn(L, t, motion) {
  resetType(L);
  const anim = L.s.text.anim, base = motion === 'dissolve' ? .55 : .38, rise = motion === 'rise' ? 64 : 34;
  const ebIn = () => { if (L.eb) { const q = easeOut(clamp((t - base) / .35)); L.eb.style.transform = `translateY(${(1 - q) * rise * .6}px)`; L.eb.style.opacity = q; } };
  const partsIn = d => L.parts.forEach((p, k) => { const q = easeOut(clamp((t - base - d - k * .05) / .36)); p.style.transform = `translateY(${(1 - q) * rise}px)`; p.style.opacity = q; });
  if (anim === 'rise') { ebIn(); L.words.forEach((w, k) => { const q = easeOut(clamp((t - base - .05 - k * .025) / .34)); w.style.transform = `translateY(${(1 - q) * 110}%)`; }); partsIn(.14); }
  else if (anim === 'cascade') { ebIn(); L.words.forEach((w, k) => { const q = easeOut(clamp((t - base - .05 - k * .045) / .4)); w.style.transform = `translateY(${(1 - q) * 40}%)`; w.style.opacity = q; }); partsIn(.2); }
  else if (anim === 'letters') { ebIn(); L.letters.forEach((c, k) => { const q = easeOut(clamp((t - base - .03 - k * .009) / .3)); c.style.transform = `translateY(${(1 - q) * 110}%)`; }); partsIn(.18); }
  else if (anim === 'type') { ebIn(); const n = L.letters.length, f = clamp((t - base - .02) / .45) * n; L.letters.forEach((c, k) => c.style.opacity = k < f ? 1 : 0); partsIn(.3); }
  else {
    const q = easeOut(clamp((t - base) / .48));
    if (anim === 'wipe') { const w = easeIO(clamp((t - base) / .5)); L.copy.style.clipPath = wipeSide(L) === 'left' ? `inset(0 ${(1 - w) * 100}% 0 0)` : `inset(0 0 0 ${(1 - w) * 100}%)`; }
    else { L.el.style.opacity = q; L.ty2 = (1 - q) * rise * .5; if (anim === 'blur') L.el.style.filter = `blur(${(1 - q) * 14}px)`; if (anim === 'scale') L.sc = 1.1 - q * .1; }
  }
  if (L.card) { const q = easeOut(clamp((t - base - .2) / .36)); L.card.firstChild.style.transform = `translateY(${(1 - q) * rise}px)`; L.card.firstChild.style.opacity = q; }
  place(L);
}""")

# --- inspector: picker in the Motion group, right after "how this composition arrives"
rep("""      h('p', { class:'hint' }, MOTIONS[s.motion][1])),
    holdMode,""",
"""      h('p', { class:'hint' }, MOTIONS[s.motion][1])),
    i === 0 ? null : h('div', {},
      field('How the copy arrives', seg(Object.entries(TYPE_ANIMS).map(([k, v]) => [k, v[0]]), s.text.anim, up(v => s.text.anim = v), 'Copy animation')),
      h('p', { class:'hint' }, TYPE_ANIMS[s.text.anim][1])),
    holdMode,""")

# --- pool preset: vary the copy animations so the options are on show
for name, anim in [("Statement open","letters"),("Split open","cascade"),("Inset open","fade"),("Triptych open","wipe"),
                   ("Pace","cascade"),("Breath","blur"),("Weather","scale"),("Crew","wipe"),("Line","type"),
                   ("The vest","fade"),("Numbers","cascade"),("Voice","type"),("Detail pair","letters"),("The bag","fade"),
                   ("Shop close","scale"),("Quiet close","letters"),("Split close","cascade"),("Inset close","blur"),("Lineup close","wipe")]:
    a = f"name:'{name}',"
    i = s.index(a, s.index("pool: () =>")); j = s.index("text:{", i); s = s[:j] + "text:{anim:'" + anim + "'," + s[j+6:]
open(p,"w").write(s); print("ok")
