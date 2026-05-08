# Global Art Direction Notes

You should append something like this to ALL prompts:

> dark fantasy environment concept art, cinematic matte painting, atmospheric lighting, subtle volumetric fog, ultra detailed but minimal composition, strong negative space for UI overlays, desaturated palette, torchlight glow, mysterious mood, realistic textures, immersive dungeon atmosphere, not cartoon, not anime, no text, no UI elements, widescreen composition, game menu background aesthetic

You want consistency across all generations.

---

# 1. Main Homepage Background

## “The Arrival Chamber”

Purpose:

- primary onboarding hub
- establishes mood
- supports foreground UI

Key design needs:

- center negative space
- visible depth
- subtle pathways
- darkness that supports readable UI

---

## Prompt

```text
A massive ancient underground guild chamber viewed from a slightly first-person perspective, dark stone walls disappearing into shadow, vaulted dungeon ceiling, burning wall torches casting warm orange light through heavy darkness, faint fog and floating embers in the air, mysterious passageways leading deeper into the dungeon, subtle gothic fantasy architecture, cinematic atmosphere, extremely dark and moody, environment mostly obscured by shadow with only hints of detail visible, immersive dungeon initiation hall, designed for a modern game menu background with strong negative space for UI overlays, dark fantasy environment concept art, cinematic matte painting, atmospheric volumetric lighting, realistic textures, desaturated palette, mysterious and legendary mood, not cartoon, not anime, no characters, no text, widescreen composition
```

---

# 2. Navigation Door / Passageway Cards

## Reusable “Dungeon Door” Asset

You probably want:

- one reusable image
- color grading variants via CSS
- subtle overlays per room

Keep them iconic and readable even when cropped into cards.

---

## Prompt

```text
A mysterious stone doorway deep within an ancient dungeon corridor, large wooden reinforced door partially illuminated by torchlight, warm glowing light leaking through cracks, heavy shadows surrounding the entrance, dark gothic fantasy architecture, cinematic atmosphere, centered symmetrical composition, immersive dungeon passage, minimal environmental clutter, designed for use as a UI navigation card, dramatic contrast between darkness and warm firelight, realistic textures, subtle fog, dark fantasy environment concept art, atmospheric matte painting, not cartoon, not anime, no characters, no text
```

---

# Alternative Door Variant

## “Archway Passage”

```text
An ancient dungeon archway leading into darkness, mysterious warm torchlight illuminating a stone corridor beyond, heavy shadows, subtle fog, immersive dark fantasy atmosphere, cinematic perspective, minimal composition optimized for UI card usage, realistic medieval stone textures, moody volumetric lighting, mysterious and inviting passage deeper underground, dark fantasy environment concept art, not cartoon, no characters, no text
```

---

# 3A. Character Forge Room

## “The Forge of Identity”

This room should feel:

- warm
- creative
- ceremonial
- less intimidating

Think:
blacksmith + magical recruitment altar.

---

## Prompt

```text
A dark fantasy guild forge chamber deep underground, ancient stone room illuminated by glowing forge fires and torchlight, a mysterious character creation altar at the center of the room, warm orange and gold lighting reflecting off stone walls, subtle magical runes carved into the floor, atmospheric smoke and embers drifting through the air, immersive medieval fantasy environment, cinematic matte painting with strong negative space for UI overlays, realistic textures, moody but welcoming atmosphere, dark guild initiation chamber, not cartoon, not anime, no characters, no text, widescreen composition
```

---

# 3B. Oracle Chamber

## “The Archive”

This should feel:

- mystical
- intelligent
- ancient
- slightly cosmic

Differentiate via cooler colors.

---

## Prompt

```text
An ancient underground oracle chamber filled with towering bookshelves, glowing arcane symbols, dim blue torchlight and candlelight illuminating a mysterious circular chamber, magical energy subtly swirling in the darkness, ancient tomes and scrolls barely visible through shadow and fog, immersive fantasy archive deep beneath a guild hall, cinematic atmospheric lighting, dark fantasy environment concept art, mystical and wise mood, strong negative space for UI overlays, realistic textures, subtle volumetric fog, not cartoon, not anime, no characters, no text, widescreen composition
```

---

# 3C. Guild Bulletin Board Room

## “The Tavern Notice Hall”

This room should feel:

- alive
- active
- social
- operational

Slightly brighter than the others.

---

## Prompt

```text
A medieval fantasy guild operations hall with a massive wooden bulletin board covered in parchment notices and pinned mission scrolls, warm torchlight illuminating dark stone walls, long wooden tables and benches fading into shadow, atmospheric tavern-like guild chamber deep underground, subtle smoke and floating embers in the air, cinematic dark fantasy environment concept art, immersive and active mood, realistic textures, designed as a game menu background with strong negative space for UI overlays, moody warm lighting, not cartoon, not anime, no characters, no text, widescreen composition
```

---

# 4. User Foreground Silhouette

## “The Adventurer”

This is VERY important.

You do NOT want:

- identifiable features
- detailed costume
- heroic pose

You want:

- projection surface
- anonymous player stand-in

The silhouette should anchor the scene emotionally without distracting from UI.

---

## Prompt

```text
A dark silhouetted cloaked figure viewed from behind, standing in the foreground and facing into darkness, mysterious fantasy traveler with hooded cloak obscuring all details, subtle rim lighting from distant torchlight, cinematic first-person adventure atmosphere, minimal detail and strong silhouette readability, realistic fabric folds, dark fantasy aesthetic, designed as a foreground overlay element for a game interface, isolated composition with transparent or dark background, atmospheric and immersive, not cartoon, not anime, no visible face
```

---

# Strong Recommendation

## Generate at Ultra Wide Aspect Ratios

You want:

- 16:9
- 21:9
- even wider cinematic crops

Because:

- modern monitors
- responsive web
- mobile crops
- hero section flexibility

---

# Additional Asset You Probably Want

## Transitional Hallway

You’ll likely need this sooner than expected for loading/page transitions.

---

## Prompt

```text
A dark underground stone corridor illuminated by distant torchlight, ancient dungeon hallway fading into shadow and fog, cinematic fantasy atmosphere, immersive transition environment, realistic medieval stone textures, subtle floating embers, dramatic perspective leading deeper underground, dark fantasy environment concept art, minimal composition with strong depth, not cartoon, not anime, no characters, no text
```

---

# Styling Recommendation

You should heavily post-process all outputs with:

- dark overlay gradients
- blur layers
- vignette
- grain
- subtle animated fog
- desaturation

Raw AI art will usually be:

- too bright
- too detailed
- too noisy

The final “product feel” will come from the UI treatment layer, not the generation alone.

---

# Implementation Notes

Generated project assets live in:

- `public/assets/art/arrival-chamber.png`
- `public/assets/art/dungeon-door.png`
- `public/assets/art/forge-room.png`
- `public/assets/art/oracle-archive.png`
- `public/assets/art/guild-board-room.png`
- `public/assets/art/default-dungeon-room.png`
- `public/assets/art/cloaked-figure.png`

The cloaked figure is a transparent PNG foreground overlay used on all pages. On desktop it anchors the lower center of the viewport; on mobile it is reduced and tucked into the lower-right corner so it reads as presence without taking over the interface.

`default-dungeon-room.png` is the schedule room background for now and should also serve as the fallback room art for future pages.
