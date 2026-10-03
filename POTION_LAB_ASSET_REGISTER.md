# Potion Lab — Canonical Asset Register

## Licensing policy

Potion Lab uses **CC0-only external assets** for the initial prototype.

No asset is included merely because it is hosted on an asset marketplace or a site that contains mixed licenses. Each selected external asset below has been individually checked for a CC0/public-domain-compatible license.

Identity-defining assets are custom-generated and are not sourced from third-party game-art packs.

## Selected open-source assets

| ID | Asset | Use | Source | Creator | License | Attribution |
|---|---|---|---|---|---|---|
| `tex.dark-wood` | Dark Wood | Optional material texture for tabletop/wooden props where a generated surface is not sufficient | https://polyhaven.com/a/dark_wood | Dario Barresi, Dimitrios Savva, Rico Cilliers | CC0 | No |
| `tex.stone-tiles` | Stone Tiles | Optional background/wall/floor material texture for secondary surfaces | https://polyhaven.com/a/stone_tiles | Christopher Melani | CC0 | No |
| `vfx.kenney-particles` | Particle Pack | Generic particle masks/textures for dust, sparks and small magical effects | https://kenney.nl/assets/particle-pack | Kenney community | CC0 | No |

### Why these three

- **Dark Wood** supports the warm, aged apothecary workbench without introducing a recognizable third-party object.
- **Stone Tiles** gives us a reusable secondary material if the environment needs additional wall/floor detail.
- **Kenney Particle Pack** is useful for generic VFX primitives; the distinctive Potion Lab effects will still be authored procedurally.

## Deliberately NOT selected

- Third-party potion bottles: rejected even where CC0 because they would compete with the custom Potion Lab vessel language.
- Pixel-art potion packs: rejected because they conflict with the cinematic/photorealistic visual direction.
- Non-CC0 audio from mixed-license libraries: rejected for the initial build.
- Random web images/textures: rejected.
- Freesound samples: not part of the initial locked asset pack; use procedural Web Audio first unless an individual CC0 sample is later verified and logged.

## Canonical generated assets

| ID | Asset | Status | Intended role |
|---|---|---|---|
| `env.lab-main` | Cinematic apothecary laboratory environment | Generated | Primary environment/background |
| `vessel.cauldron` | Large spherical glass cauldron | Generated | Primary hero vessel |
| `vessel.flask` | Tall bulbous glass flask | Generated | Secondary vessel |
| `vessel.vial` | Small corked glass vial | Generated | Secondary/small vessel |
| `ingredient.lavender` | Dew-kissed lavender bundle | Generated | Ingredient |
| `ingredient.moon-petal` | Pearlescent moon petals | Generated | Ingredient |
| `ingredient.dewdrop` | Glowing blue dewdrop | Generated | Ingredient |
| `ingredient.dream-moss` | Moss mound with dew | Generated | Ingredient |
| `ingredient.mist-crystal` | Faceted amethyst mist crystal | Generated | Ingredient |

## Runtime-generated assets

These are intentionally not static image assets:

- potion liquid
- surface displacement
- ripples
- bubbles
- splashes
- liquid reflections/caustics
- mist/smoke
- ingredient impact effects
- colour transitions
- magical particles where custom behaviour is required

## Generated asset files

- `a_cinematic_moody_fantasy_alchemy_workshop_apo.png`
- `a_cinematic_still_life_scene_on_a_dark_background.png`
- `a_clean_transparent_background_compositing_png_sty.png`

These files are the current visual references/canonical source artwork for implementation. They should not be treated as the liquid-rendering system itself.
