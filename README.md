# Potion Lab

A touch-first, atmospheric potion-brewing PWA. This repository currently contains **Milestone 1**: the interactive Calm Elixir flask and its first ingredient.

## Run locally

This project uses Node 24 and pnpm.

```bash
pnpm install
pnpm dev
```

Production checks:

```bash
pnpm build
pnpm test
```

## What is implemented

- Responsive, installable Vite + React + TypeScript PWA shell
- Cinematic workshop treatment using the supplied source artwork
- CSS-rendered glass vessel and live animated liquid (the liquid is not a baked image)
- Mouse and touch-compatible lavender drag/drop interaction
- Explicit potion state transitions: awaiting → adding → reacting → ready
- Procedural Web Audio drop and bloom sounds
- Optional haptic feedback through `navigator.vibrate`
- Reduced-motion support and an ASMR toggle

## Project shape

`src/app` owns the composition of the screen. `src/components` renders the visual pieces. `src/game/state` contains deterministic potion transitions, and `src/game/audio` encapsulates browser sound generation. This keeps presentation details out of gameplay logic and gives the later ingredient system a clean extension point.

## Next milestone

Milestone 2 will make the ingredient dock data-driven and introduce reusable interaction modes (`drop`, `pour`, and `crush`) for all five canonical ingredients.
