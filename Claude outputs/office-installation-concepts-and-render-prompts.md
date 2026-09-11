# Office Installation — Top Three, Expanded + Render Prompt Pack

Draft 2 · 2026-09-10 · Builds on `concept-evaluation.md`. Three directions developed to the level where each has a content architecture, a motion behaviour, a voice, and a known failure mode — followed by a render prompt pack tuned to match the existing ChatGPT moodboard so new images sit in the same world.

---

# Part 1 — The three directions, deepened

## Direction A — UX Constellation + Shipping Pulse

**The idea in one line.** The UX organisation's work drawn as a living system — journeys and platforms as nodes, projects as the light travelling between them — where the light itself carries the status of real work.

**Why this one earns the wall.** Most office showcases are a grid of screens playing unrelated reels. The constellation makes an argument: that these experiences are connected, that one team builds them, and that work is moving right now. The metaphor does structural work rather than decorating.

### Content architecture

Three tiers, and the discipline is that a viewer should be able to stop at any one of them and leave with something.

*Tier 1 — the system.* Six to nine nodes standing for the durable territories of the work: Member Experience, Product Discovery, Store Experience, Community, Tools & Systems, Accessibility & Inclusion. These change once a year, not once a sprint. The edges between them are relationships, not projects — "discovery feeds membership," "store tools inherit from the design system."

*Tier 2 — the work in flight.* Each project is a travelling pulse on an edge, and its position on that edge is its stage: near the origin node it is in research, mid-edge it is in design and prototyping, arriving at the destination node it has shipped. A project that has shipped leaves a small persistent mark at the node — the wall accumulates evidence over a quarter rather than resetting.

*Tier 3 — the piece itself.* Nodes expand into a screen-filling case: the prototype video, the problem statement, the team, the date. This is where the existing motion work you already own gets to play at full size.

### Motion behaviour

This is where the direction lives or dies, so it is specified rather than described.

The **base state** is not still. Every node breathes on a long, desynchronised cycle — 6 to 9 seconds, sine-driven, 2–4% scale and a matching luminance lift, each node offset by a random phase so the wall never pulses in unison. Unison reads as a screensaver; drift reads as alive.

The **edges** carry a slow luminance gradient travelling origin-to-destination at roughly one traversal every 12–18 seconds, at low opacity. This is the ambient circulatory system and should be almost subliminal — if a person notices the edges before they notice the nodes, it is too strong.

A **project pulse** is the featured event: a brighter, tighter packet of light with a short leading edge and a longer decaying tail, moving on a custom ease that is fast out of the origin, slows through the middle third (the long design middle, which is honest), then accelerates into the destination node. On arrival the destination node takes a single sharp luminance spike with a fast attack and a slow release, and settles back to breathing. That arrival is the money beat and should be the only moment on the wall with real snap — roughly 120ms attack, 900ms release. Everything else is slow.

**Stage changes** are the second beat: when a project crosses from research into design, the pulse changes character — colour temperature shift and a slight tightening — rather than teleporting. Continuity is the whole point of the metaphor.

**Attention direction.** With nine nodes and a dozen pulses, the wall will read as noise unless something is being featured. Every 20–30 seconds a single project becomes the protagonist: the rest of the wall drops 40% in luminance over about 1.2 seconds, the featured pulse brightens, and its card resolves on the nearest screen. The dim-down is the transition, not a cut. When it releases, it releases slowly.

### Voice

Short declaratives with a period. "Seamless from browsing to belonging." "Designing for everybody." No exclamation marks, no questions, no "we're excited to." The side copy runs as thin stacked verticals — People. Experiences. Possibilities. — that read as architecture rather than as slides.

### Hardware and scaling

Built as one full-screen browser app at 16:9 that runs on a single 65" TV from a Mac mini today. The same app scales to a multi-screen wall by treating the constellation as one continuous canvas and giving each display a viewport window into it — screens become apertures onto one system, which is far more striking than nine independent screens and costs almost nothing extra to build if the canvas is designed that way from the first line of code.

### Failure mode to design against

The data goes stale and the pulses stop moving, at which point the wall becomes a monument to a project that ended. Two defences: drive it from a real source (a shared sheet is acceptable, Jira or Figma is better) and, when data is older than a threshold, degrade gracefully into the shipped-work gallery rather than showing a frozen system.

---

## Direction B — Prototype Arcade + Behind the Pixels

**The idea in one line.** Kiosks running the actual unreleased prototypes, each paired with the story of how it got there, so a visitor's first contact with the work is their thumb on it.

**Why this one earns the wall.** It is the only direction where the visitor participates in the work rather than watching it. It is also the cheapest to keep alive, because the content is the team's existing Figma and ProtoPie output — the wall updates itself when the work updates.

### Content architecture

Each station is a triptych read left to right, or top to bottom on a vertical kiosk.

*The play surface* is the prototype, full bleed, running live. No chrome, no "click here to start" — it should look like a device someone left running.

*The strip* is Behind the Pixels compressed to four beats: the question that started it, one artefact from research, one image of the messy middle (rejected directions, the sketch, the version count), and the outcome. Four beats is the maximum a standing person absorbs. This is where Before & After lives as a segment format.

*The credit* names the humans. A designer's face and name next to the prototype does more for the installation's credibility than any headline.

### The state machine

A kiosk has three states and the transitions between them are the design problem.

**Idle** is an attract loop — the prototype demoing itself, hands-free, in a slow scripted run-through with a soft caption. It must look like the real thing operating, not like a video, because the moment a passer-by realises it is playable is the moment they approach.

**Approach** is triggered by touch or proximity. The attract loop does not stop dead — it completes its current gesture, then the caption dissolves and the interface hands over. Target under 400ms from first touch to responsive. Anything slower and people conclude it is a video and walk away.

**Play** is the real prototype, with a persistent unobtrusive way back. Reset after 45–60 seconds of inactivity, with a 5-second grace fade so nobody gets yanked out mid-thought.

### The feedback loop, which is the underrated part

A single question at the end of each prototype — one tap, three options, no keyboard — turns the installation from a broadcast into an instrument. The team gets a running signal on work in progress, and the wall gets a reason to exist beyond decoration. It also gives you the strongest possible line for the stakeholder pitch: this installation generates data.

### Hardware

Two to four vertical touchscreens, 32–43", on freestanding plinths with under-lit bases, or wall-mounted with a shelf. Screens should be portrait if the prototypes are mobile — a mobile prototype letterboxed into a landscape TV instantly reads as an afterthought.

### Failure mode to design against

Prototypes rot. A prototype that 404s or hangs is worse than no kiosk. Mitigation: a health check that pulls a station into a graceful "next build lands soon" card rather than showing a broken frame, and an owner per station rather than one owner for the installation.

---

## Direction C — The Living Wall

**The idea in one line.** A large projected or LED surface that behaves like an organism — abstract when alone, resolving into the work when someone approaches, with a character that gives the whole thing a personality.

**Why this one earns the wall.** This is the photographed one. It is the piece that gets forwarded, that people bring guests to, that makes the UX org feel like it has a point of view rather than a slide template. It is also the one that most directly uses fifteen years of motion craft rather than asking a browser to draw boxes.

### The three registers

*Alone.* The wall in its resting state should be abstract but derived — flow fields, contour lines, and particle systems whose parameters come from the actual work: number of projects in flight, stages, team size. It is a data-driven ambient piece, so it is never the same twice and it never looks like a stock screensaver. Slow, low-contrast, and it should be possible to sit near it and work.

*Approached.* Presence resolves the abstraction into legibility — the flow field's particles converge into a project's shapes, contours resolve into a screen. The key craft decision is that resolution should feel like focus pulling rather than a crossfade: things that were always there becoming readable. Slow attack, roughly 1.5–2 seconds, and a much slower release so the wall does not snap back the instant someone steps away.

*The Creature.* The idea worth rescuing from the original list. Not a mascot with eyes — a presence: a form that moves with weight and intent, that notices people, that has moods tied to the state of the work. Busy release week and it is energised; quiet week and it is at rest. It gives the installation a personality people talk about and, critically, it makes the idle state something to look at rather than something to skip. Handled badly it is corporate-cute and dies of embarrassment within a month, so the register has to be abstract, physical, and restrained — closer to a murmuration or a piece of cloth with intent than to a cartoon.

### Sensing, honestly

Camera and depth sensing in an office is a conversation, not a technical detail, and it is better to open it early than to design six weeks around a sensor that legal declines. Two fallbacks worth designing for from the start: a depth sensor that only ever emits a distance and a body count with no image leaving the device, or no sensor at all — floor pressure, a simple proximity beam, or an intentional touch-to-wake. The follow-me idea sits here too, and it should be treated as an enhancement rather than a requirement, because it collapses the moment two people stand in front of the wall.

### Failure mode to design against

Cost and content debt. This direction has the highest build cost, the most fragile hardware dependency (ambient light will decide projection vs. LED, and offices are bright), and it needs new bespoke content rather than repurposed work. The realistic path is to build it as a moment inside A or B — the idle state of the Constellation wall, or the surface behind the Arcade — rather than as a standalone room.

---

# Part 2 — Render prompt pack

Designed to run in ChatGPT / DALL·E, Midjourney, or Firefly and produce a set that sits alongside your existing three images. The style block is the control — paste it into every prompt unchanged so the whole set reads as one location.

## Style block (reuse verbatim)

```
STYLE: Architectural interior photography, editorial quality. Modern open-plan
corporate office, warm low ambient lighting, polished light-grey concrete floor
with soft reflections, warm greige walls, black track lighting on exposed
ceiling. Dark grey upholstered rectangular benches. Dark ceramic planters with
green foliage. People in black and charcoal athletic apparel seen from behind
or in profile, faces not prominent, one figure with slight motion blur walking
past. Wide eye-level shot, 24mm, deep focus, slight vignette. Screens are the
brightest elements in the frame and cast soft light onto the surrounding wall.
Restrained modern sans-serif typography, large uppercase headline, thin stacked
vertical side copy. Muted palette: warm grey, black, white, with cool blue-white
screen light. Photorealistic, no illustration, no 3D render look.
```

## Direction A — Constellation

**A1 · Hero wide**
```
[STYLE BLOCK]
SCENE: A long feature wall with a constellation of connected displays. Nine
screens of mixed sizes — two large landscape, three portrait, four small
square — arranged in an irregular organic layout, not a grid. Thin illuminated
white lines connect the screens to each other and to small circular
photographic nodes, forming a network across the wall. Small illuminated dots
of light travel along the connecting lines. Headline top left in large
uppercase: "UX CONSTELLATION". Subhead beneath: "Different journeys. A more
connected experience." Thin vertical stacked side text at far right: "ONE TEAM
/ A BRIGHTER TOMORROW". Two benches in front. One person standing, viewing.
```

**A2 · Shipping pulse close**
```
[STYLE BLOCK]
SCENE: Close three-quarter view of a section of the constellation wall. Focus
on one large display showing a mobile app prototype, with two thin illuminated
lines entering from off-frame. A bright concentrated packet of light is
arriving at a circular node beside the screen, node glowing brighter than the
rest of the wall. Small label text near the node reads "SHIPPING THIS WEEK".
Shallow depth of field, background wall falling into soft focus. Screen light
raking across the wall texture.
```

**A3 · Featured state, room dimmed**
```
[STYLE BLOCK]
SCENE: The constellation wall at night with most nodes dimmed to a low glow and
one project brought forward — a single large display at full brightness showing
a full-bleed image of a person running, with a caption overlay. The rest of the
network is visible but subdued. A single person seated on a bench watching.
Dramatic contrast, the lit screen is the only strong light source in the room.
```

**A4 · Multi-screen aperture variant**
```
[STYLE BLOCK]
SCENE: A wall of six identical large landscape displays in a single horizontal
row, edge to edge, treated as one continuous canvas — a single constellation
diagram of glowing nodes and connecting lines spans across all six screens
uninterrupted, with the bezels reading as window frames onto one larger image. Dark
background on screen, luminous thin lines. Headline printed on the wall to the
left of the screens.
```

## Direction B — Prototype Arcade

**B1 · Hero wide**
```
[STYLE BLOCK]
SCENE: Four freestanding dark charcoal kiosks in a gentle arc, each holding a
large portrait touchscreen at standing height, with a thin illuminated strip at
the base casting light onto the concrete floor. Each screen shows a different
mobile app interface. Small illuminated label at the top of each kiosk reads
"APP EXPERIENCE", "SEARCH & DISCOVERY", "STORE TOOLS", "COMMUNITY". Headline on
the wall behind in large uppercase: "PROTOTYPE ARCADE". Subhead: "Play ideas.
Shape what's next." Three people interacting, one reaching toward a screen.
Thin vertical stacked side text: "TEST / LEARN / ITERATE / TOGETHER".
```

**B2 · The triptych station**
```
[STYLE BLOCK]
SCENE: Detailed view of a single prototype station. A large portrait
touchscreen showing a live mobile app interface, a hand reaching toward it. To
the right, mounted on the wall, a horizontal strip of four printed panels
showing a process sequence: a research photo, a wall of sticky notes, a page of
rough interface sketches, and a finished screen. Small typographic labels
beneath each panel. Below the strip, a small portrait photograph of a designer
with a name caption. Warm focused lighting on the strip, cool light from the
screen.
```

**B3 · Feedback moment**
```
[STYLE BLOCK]
SCENE: Close over-the-shoulder view of a person tapping a large portrait
touchscreen. The screen shows a simple full-bleed question card with three
large tappable options, minimal type, generous white space, no decoration. The
person's hand is mid-tap on the centre option. Soft screen glow on their face
and sleeve. Background office falls out of focus.
```

**B4 · Idle attract loop**
```
[STYLE BLOCK]
SCENE: The same four kiosks, empty of people, at the quiet end of the day. Each
screen is running an attract state — a mobile interface mid-animation with a
small caption line at the bottom. The under-base lighting is the dominant light
in the frame, pooling on the concrete. Empty benches. Wide, still, cinematic,
nobody in frame.
```

## Direction C — Living Wall

**C1 · Alone / ambient state**
```
[STYLE BLOCK]
SCENE: A very large wall, twelve metres wide, filled edge to edge with a
projected abstract generative motion field — fine luminous contour lines and
drifting particles in cool white and pale blue on near-black, resembling wind
currents or topographic flow. No text, no interface, no recognisable imagery.
The projection is the only light source. The room is empty except for two low
benches. Long wide shot, deep space, contemplative and quiet.
```

**C2 · Approach / resolution**
```
[STYLE BLOCK]
SCENE: The same large projected wall, now with one person standing close to it,
silhouetted against the projection. Directly in front of and around the person,
the abstract particle field has converged and resolved into legible content — a
clear mobile app interface and a line of caption text — while the rest of the
wall remains abstract and unresolved, the transition between the two states
gradual rather than a hard edge. The person's silhouette is rimmed in
projection light.
```

**C3 · The Creature**
```
[STYLE BLOCK]
SCENE: A large dark projected wall showing a single abstract luminous form —
like a murmuration of thousands of tiny points of light, or a sheet of fabric
caught in motion, with weight and intent. It is oriented toward a person
standing several metres away, as if aware of them. No face, no eyes, no
cartoon features — purely abstract, physical, elegant. The rest of the wall is
black. A single figure standing, small in frame, looking up.
```

**C4 · Combined: Living Wall behind the Arcade**
```
[STYLE BLOCK]
SCENE: A large room where a full-wall abstract projected motion field forms the
back surface, and in front of it stand three dark charcoal prototype kiosks
with portrait touchscreens and lit bases. The projection is dim and ambient,
the kiosk screens are bright and sharp. People interacting with the kiosks are
silhouetted against the projection. Layered depth, two distinct lighting
temperatures.
```

## Running notes

Generate A1, B1 and C1 first and pick the one whose room you like best, then feed that image back as a reference or style anchor for the rest — consistency of the room matters more than perfection of any single frame. Add "no lululemon logo" or swap in a neutral wordmark if these are going anywhere external. Useful negatives across the set: `no text artifacts, no garbled lettering, no floating UI cards, no gradient mesh backgrounds, no neon, no futuristic sci-fi styling, no glossy 3D render`. If lettering comes back garbled — which it will on the longer headlines — generate the scene without the wall type and set the headline yourself afterward; the type is yours anyway.
