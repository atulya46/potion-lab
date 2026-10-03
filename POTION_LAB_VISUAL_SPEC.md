# Potion Lab — Canonical Visual Specification

## 1. Visual identity

Potion Lab is a dark, cinematic, premium sensory experience.

The visual hierarchy is:

1. potion/vessel
2. live liquid and reaction
3. ingredients
4. atmospheric environment
5. minimal interface

The interface must never compete with the potion.

### Desired qualities

- mysterious
- calm
- tactile
- physically believable
- warm + cool lighting
- glass-heavy
- aged apothecary materials
- restrained magical colour

### Avoid

- neon gaming UI
- cartoon fantasy
- pixel art
- excessive bloom
- excessive particles
- large HUDs
- dashboards/sidebars
- generic SaaS styling
- visually noisy backgrounds

## 2. Canonical palette

The palette is intentionally restrained.

| Role | Target |
|---|---|
| Background | near-black blue/charcoal |
| Wood | deep warm brown |
| Warm light | candle/amber |
| Cool light | desaturated blue |
| Magic purple | muted lavender/amethyst |
| Magic blue | deep luminous blue |
| Magic green | moss/emerald |
| Glass | neutral with cool highlights |
| Primary text | warm off-white |
| Secondary text | muted grey-blue |

Approximate UI anchors:

- `#090A0F` — deep background
- `#17151A` — charcoal surface
- `#6F4B2D` — warm wood reference
- `#D59A55` — candle/amber reference
- `#777B9B` — cool highlight reference
- `#8B6CCF` — lavender magic reference
- `#4D8CCF` — blue magic reference
- `#638C57` — moss reference
- `#EEE9DF` — warm text

These are visual anchors, not rigid colour constraints for the procedural liquid.

## 3. Lighting

Primary lighting language:

- warm candle/key light from one side
- cool blue/purple rim or fill from the opposite side
- dark falloff into the background
- strong glass reflections without clipping
- subtle atmospheric haze
- small practical light sources in the environment

Lighting should reveal glass edges and liquid depth.

## 4. Camera and composition

### Hero composition

- vessel centered or slightly below centre
- enough negative space around the vessel for interaction
- tabletop visible as an anchoring plane
- environment provides depth but stays visually subordinate
- shallow depth of field in the background
- no important object should sit directly behind the vessel silhouette

### Mobile

Target:

- 390 × 844
- 430 × 932

Prioritize:

`vessel → liquid → ingredients → minimal controls`

The vessel must remain fully readable. Do not crop the rim or major reaction area merely to fill the screen.

### Desktop

Use additional width for:

- breathing room
- environmental atmosphere
- slightly larger vessel presentation

Do not add UI panels just to occupy space.

## 5. Materials

### Glass

- high transmission/refraction impression
- subtle blue/white edge highlights
- realistic reflections
- slightly imperfect optical feel
- no plastic appearance

### Wood

- dark, aged, slightly worn
- moderate roughness
- visible grain
- warm response to candlelight

### Metal

- dark aged brass/bronze
- restrained highlights
- no polished gold look

### Ingredients

Natural materials should retain believable texture:

- lavender: dry petals/stems
- moon petal: thin translucent/pearlescent membrane
- dewdrop: liquid/glass-like surface
- dream moss: fibrous, wet, irregular
- mist crystal: faceted translucent crystal with internal light

## 6. Ingredient presentation

The canonical five ingredients are:

1. Lavender
2. Moon Petal
3. Dewdrop
4. Dream Moss
5. Mist Crystal

Each must work both as:

- a clean draggable object
- an object inside the environment

The draggable representation should be visually identical to the canonical ingredient artwork.

## 7. Motion language

Motion is:

- slow
- organic
- fluid
- slightly imperfect
- physically motivated

Avoid:

- linear robotic movement
- constant-speed looping
- excessive bounce
- arbitrary floating
- UI-style easing on physical objects

### Ingredient reactions

**Lavender**
- fall/rotate
- surface impact
- concentric ripples
- petals/fragments diffuse into liquid
- purple colour response

**Moon Petal**
- flutter/float
- gentle sink
- luminous ripple
- soft diffusion

**Dewdrop**
- slight stretch while falling
- crisp surface impact
- stronger ripple
- tiny secondary droplets
- blue diffusion

**Dream Moss**
- heavier impact
- small fragments break loose
- green particles diffuse/sink

**Mist Crystal**
- strongest reaction
- impact shockwave
- purple/blue bloom
- rising mist/wisps
- particles settle
- final potion begins to stabilize

## 8. Liquid direction

The liquid is a first-class runtime visual system.

It must show:

- continuous low-amplitude motion
- surface displacement
- internal currents
- changing viscosity impression
- ingredient impact waves
- bubbles
- reflections
- subtle caustic/light movement
- colour mixing over time
- settling after reactions

Do not bake the liquid into the hero artwork.

## 9. Effects density

Effects should be sparse and legible.

The player should notice:

- the liquid moved
- the ingredient had weight
- the reaction propagated
- the potion changed

They should not see a wall of particles.

## 10. Typography/UI

UI is restrained.

- elegant serif or refined display face for potion/result names
- clean neutral sans-serif for controls
- small labels
- generous spacing
- low contrast for secondary controls
- no card-heavy dashboard structure

## 11. Canonical asset rule

Whenever a new asset is added, it must answer:

> Does this improve the physical, tactile, mysterious potion-making experience?

If not, it does not enter the initial asset pack.
