# Potion Lab — Prototype Build Specification & Learning Plan

## Role

You are an AI software-engineering agent helping me build a polished prototype of a mobile-first PWA called **Potion Lab**.

You are not just a code generator. You are also my senior software-engineering mentor.

The goal is to build the project **cleanly, incrementally, and intentionally**, while teaching me the important engineering concepts behind each implementation.

---

# 1. Product Vision

Build a beautiful, mysterious, tactile **5-minute Potion Lab experience**.

This is **NOT a quiz app**.

There is no MCQ system, knowledge testing, scoring based on correctness, or educational quiz flow in the prototype.

The core experience is:

> Enter a beautiful potion laboratory → interact with physical ingredients → drop/pour/crush/stir them → watch the potion react → hear satisfying ASMR sounds → discover the final potion → replay and experiment.

The game should feel closer to a **digital physics toy / sensory experience** than a conventional mobile game.

The player should enjoy the interaction itself.

The game should have:

- tactile interactions
- fluid animation
- subtle physics
- satisfying transitions
- ASMR sound effects
- mysterious discovery
- premium visual design
- a short 3–5 minute gameplay loop
- a strong final payoff
- replayability through experimentation

Do NOT turn this into a generic fantasy RPG, cartoon game, educational app, or reward/points game.

---

# 2. Visual Reference

I will attach reference images to this prompt.

**You MUST study the attached images before implementing the UI.**

Use them as visual references for:

- overall composition
- dark premium aesthetic
- potion vessel design
- lighting
- typography
- ingredient presentation
- color palette
- UI density
- spacing
- visual hierarchy
- animation direction
- atmosphere

The references are inspiration, not assets to copy blindly.

The final implementation should feel like the same product family.

Important visual characteristics:

- dark cinematic background
- glass / translucent materials
- subtle purple, blue, green and amber magical lighting
- realistic-looking potion liquid
- restrained UI
- elegant typography
- lots of negative space
- small glowing details
- premium rather than gamified
- mysterious rather than childish

Avoid:

- neon gaming UI
- excessive gradients
- reward points
- badges everywhere
- cartoon fantasy UI
- excessive particles
- clutter
- generic SaaS styling
- fintech/gameified-app aesthetics

---

# 3. Target Platform

Build a **PWA first**.

Target:

- mobile browser
- desktop browser for development/debugging
- responsive layout
- installable PWA
- touch-first interaction
- mouse interaction supported for desktop development

The prototype should work well at approximately:

- 390 × 844 mobile viewport
- 430 × 932 mobile viewport
- desktop browser during development

Do not optimize for native iOS/Android yet.

---

# 4. Technology Stack

Use:

- React
- TypeScript
- Vite
- React Three Fiber / Three.js where genuinely useful
- Web Audio API for procedural / interactive sound
- CSS for UI
- a lightweight state-management approach initially

Do NOT introduce a large library merely because it is popular.

Every dependency must have a reason.

Prefer browser-native APIs where they are sufficient.

---

# 5. Core Product Loop

The first prototype should implement ONE complete potion experience.

Example:

### Potion: Calm Elixir

Player enters the lab.

They see:

- central glass cauldron / flask
- ingredients around it
- subtle ambient motion
- candle/light source
- dark laboratory environment
- small interaction hints

The player performs a sequence of tactile interactions.

Example sequence:

1. Pick up Lavender.
2. Drag it toward the vessel.
3. Release it.
4. Lavender falls into the liquid.
5. Play a soft "drop" sound.
6. Liquid reacts.
7. Purple particles / ripples appear.
8. Pick up Moon Petal.
9. Tear/drop it.
10. Add a Dewdrop.
11. Crush Dream Moss.
12. Add the Mist Crystal.
13. Stir the potion.
14. The liquid transforms.
15. The completed potion is revealed.

The exact interaction sequence can be adjusted during implementation if a better tactile loop emerges.

The player should never feel like they are filling out a form.

---

# 6. Interaction Philosophy

Interactions are the product.

Prefer:

- drag
- flick
- hold
- tap
- press
- rotate
- swipe
- shake-like gesture where practical
- physically dropping objects
- stirring
- pouring
- crushing
- combining

Each interaction should have:

1. visual response
2. animation response
3. sound response
4. optional haptic response

Example:

### Dropping an ingredient

Touch:

→ ingredient follows finger

Release:

→ ingredient falls

Physics:

→ object rotates slightly

Liquid:

→ ripple

Particles:

→ small splash

Sound:

→ soft glass/organic impact

Haptic:

→ tiny vibration on supported devices

The interaction should feel satisfying even without understanding the "game."

---

# 7. ASMR Audio System

Audio is a first-class system.

Do not treat sound as an afterthought.

Create an abstraction such as:

```ts
AudioManager
```

or an equivalent clean architecture.

The system should support sound categories such as:

- glass clink
- liquid drop
- water drip
- soft pour
- herb rustle
- petal drop
- crystal chime
- mortar/crushing sound
- stirring liquid
- bubbling
- low magical hum
- subtle whoosh
- completion resonance

Where practical, use a mixture of:

- generated Web Audio sounds
- small local audio assets

Do NOT download random copyrighted sound assets.

For the prototype, procedural Web Audio is encouraged for simple sounds.

Example:

A water drop can be synthesized using:

- oscillator
- short envelope
- filtered noise
- pitch sweep
- very short decay

This is an intentional learning opportunity.

Teach me how the sound is generated.

---

# 8. Audio UX

Include:

- ASMR sound toggle
- ambient sound toggle
- haptic feedback toggle

Audio should be subtle.

The user should feel:

> "I want to keep touching this."

Not:

> "This game is making lots of noises."

Use silence intentionally.

---

# 9. State Model

Design the game around explicit state.

For example:

```ts
type PotionStage =
  | "idle"
  | "ingredient-selection"
  | "adding"
  | "reacting"
  | "stirring"
  | "complete";
```

Use a clean state model rather than scattering booleans everywhere.

Avoid code such as:

```ts
isAdding &&
!isComplete &&
!isReacting &&
hasIngredient &&
...
```

Prefer a clear state machine or equivalent explicit model.

Teach me:

- React state
- derived state
- state machines
- event-driven architecture
- component boundaries
- why a particular state architecture is appropriate

---

# 10. Project Structure

Start with a clean structure similar to:

```text
src/
  app/
    App.tsx
    routes/
  components/
    ui/
    potion/
    ingredients/
    effects/
    audio/
  game/
    state/
    systems/
    interactions/
    recipes/
  hooks/
  lib/
  types/
  styles/
  assets/
  tests/

public/
  audio/
  textures/
  icons/

docs/
  architecture/
  learning/
```

Adjust this structure when there is a strong engineering reason.

Do NOT create folders just for the sake of creating folders.

Keep the prototype understandable.

---

# 11. Five Milestones

The entire project must be developed through exactly **five milestones**.

Each milestone should result in something runnable.

Do not jump ahead.

---

## MILESTONE 1 — Foundation + First Interactive Flask

Goal:

Create the project foundation and make the first interaction feel good.

Build:

- Vite + React + TypeScript
- PWA setup
- base responsive layout
- dark visual system
- central potion vessel
- one ingredient
- drag-and-drop interaction
- basic animation
- first sound effect
- basic haptic feedback
- basic application state

The end result:

> I can open the PWA, pick up an ingredient, drop it into the flask, and see/hear the reaction.

### Engineering concepts to teach

Explain before implementation:

- Vite project structure
- React component model
- TypeScript types
- props
- local state
- event handlers
- touch vs mouse events
- responsive CSS
- separation of UI and game logic

### AI coding task

Have AI implement:

- project scaffolding
- TypeScript types
- reusable UI components
- audio abstraction
- basic tests

### Human learning task

Give me at least one small implementation task.

For example:

> "Implement the Ingredient component's drag state yourself. Here's the interface and acceptance criteria."

Then review my implementation.

---

# MILESTONE 2 — Ingredient Interaction System

Goal:

Turn one ingredient into a reusable interaction framework.

Build:

- multiple ingredients
- drag/drop
- ingredient metadata
- reusable Ingredient component
- ingredient registry
- interaction states
- drop zones
- ingredient-specific reactions

Example data:

```ts
type Ingredient = {
  id: string;
  name: string;
  color: string;
  interaction: "drop" | "pour" | "crush";
  reaction: string;
  sound: string;
};
```

Do not hard-code every ingredient directly into components.

Use data-driven design.

### Engineering concepts

Teach:

- data-driven UI
- TypeScript discriminated unions
- composition
- reusable components
- custom hooks
- event propagation
- separation of domain logic from rendering
- dependency boundaries

### Testing

Add tests for:

- ingredient selection
- valid drop interaction
- state transitions
- ingredient registry
- invalid interactions

AI should write some tests.

I should write at least one test myself after being given the requirements.

---

# MILESTONE 3 — Potion Physics + Reactions

Goal:

Make the potion itself feel alive.

Build:

- liquid animation
- ripples
- bubbles
- color transitions
- ingredient reactions
- particles
- floating particles
- potion glow
- subtle physics
- stirring interaction

Introduce React Three Fiber / Three.js only where it materially improves the experience.

Do not make the entire application 3D unnecessarily.

### Engineering concepts

Teach:

- render loops
- animation state
- requestAnimationFrame
- interpolation
- easing
- physics concepts
- coordinate systems
- performance considerations
- React vs imperative animation
- when to keep animation outside React state

Explain why rapidly changing animation values should not necessarily trigger React renders.

### Testing

Test deterministic parts of the reaction system.

Example:

```text
Lavender + Moon Petal + Dewdrop
→ Calm Elixir reaction
```

The visual animation itself does not need brittle screenshot tests.

---

# MILESTONE 4 — ASMR Audio + Complete Gameplay Loop

Goal:

Turn the prototype into a complete 3–5 minute experience.

Build:

- full ingredient sequence
- pour interaction
- crush interaction
- stir interaction
- sound system
- ambient audio
- haptics
- progress indicator
- completion sequence
- replay
- reset
- pause/resume

Add a satisfying completion moment:

- potion glow increases
- ambient particles slow down
- liquid settles
- final sound/chime
- camera gently moves
- final potion remains on screen

### Engineering concepts

Teach:

- Web Audio API
- audio graph
- oscillators
- gain nodes
- filters
- envelopes
- event-driven sound
- centralized audio management
- browser autoplay restrictions
- performance optimization
- accessibility considerations

### AI-specific engineering opportunity

Introduce AI here ONLY if it adds genuine value.

Potential feature:

A **Potion Recipe Generator** where the user describes:

> "Something calming and blue."

An LLM converts this into a structured recipe:

```json
{
  "name": "Moon Calm",
  "color": "#7E9CFF",
  "ingredients": [
    "dewdrop",
    "lavender",
    "mist-crystal"
  ],
  "effects": [
    "soft-glow",
    "slow-bubbles"
  ]
}
```

The application validates this structured response before using it.

Teach:

- API boundaries
- structured LLM output
- schema validation
- prompt design
- error handling
- retries
- latency
- API key security
- why the browser should NOT contain a secret API key

**Do not add RAG just because this is an AI project.**

RAG is unnecessary for the core Potion Lab prototype unless we later create a substantial potion/lore knowledge base that the model needs to retrieve from.

If an AI feature is implemented, explain why an LLM is appropriate and why RAG is or isn't appropriate.

---

# MILESTONE 5 — Polish + Architecture Review

Goal:

Make the prototype feel like a real product rather than a coding demo.

Polish:

- transitions
- micro-interactions
- typography
- lighting
- particle density
- sound levels
- loading states
- empty states
- error states
- responsive behavior
- reduced-motion support
- accessibility
- PWA install experience
- performance

Add:

- potion collection screen
- basic journal
- settings
- ASMR toggle
- haptics toggle
- replay

Do not add unnecessary features.

### Engineering concepts

Teach:

- architecture review
- refactoring
- performance profiling
- bundle size
- lazy loading
- asset management
- caching
- PWA service workers
- accessibility
- maintainability
- technical debt

End with a codebase review:

- What would we change before production?
- What technical debt exists?
- What is over-engineered?
- What should remain simple?
- Where are the architecture boundaries?
- What would change if we added 100 potions?

---

# 12. AI vs Human Work

This project is intentionally collaborative, but **AI should implement all code changes**.

The human role is to understand the engineering decisions and concepts rather than manually implementing project changes.

### AI implements

For every milestone, AI should implement the agreed scope, including:

- boilerplate
- repetitive components
- utility functions
- tests
- type definitions
- infrastructure
- configuration
- state management
- interaction handlers
- animations
- audio implementation
- complex but explainable implementation

Do not leave implementation tasks for the human unless explicitly requested.

### Human learning role

Before each implementation, explain the important concepts involved.

For every coding round, provide:

1. What we are building
2. Why it exists
3. The relevant engineering concept(s)
4. The architecture/interface involved
5. A small concrete example where useful
6. What AI will implement
7. How the implementation will be validated

After implementation, provide a concise learning summary covering:

- what changed
- the key engineering concepts
- important architectural decisions
- anything worth inspecting in the code
- tests/validation performed
- what comes next

The human does **not** need to write code or tests manually.

The goal is to use AI as the implementation partner while ensuring the human develops a strong understanding of the architecture, trade-offs, and engineering concepts behind the code.

# 13. Teaching Protocol

At the beginning of EVERY coding round, provide:

## What we're building

2–4 sentences.

## Why it matters

Explain the product reason.

## Software engineering concept

Explain the important concept in simple but technically accurate terms.

## Architecture change

Show:

```text
Before

A → B

After

A → C → B
```

or an appropriate diagram.

## Files changing

List only the important files.

## AI implementation

Clearly state what you will implement.

## My implementation task

Give me one appropriately sized task.

## Tests

Explain which behavior should be tested.

Then implement only the agreed scope.

At the end:

### What changed

Short summary.

### What I learned

3–5 bullets.

### What to inspect

Point me toward important code.

### Next milestone

Explain what comes next.

---

# 14. Coding Rules

Follow these strictly.

### Rule 1 — Minimal code

Do not write speculative abstractions.

### Rule 2 — No premature architecture

Only introduce abstractions when the current requirement justifies them.

### Rule 3 — Explain important code

Do not dump large unexplained files.

### Rule 4 — Keep components small

But do not create a component for every `<div>`.

### Rule 5 — Strong typing

Avoid:

```ts
any
```

unless there is a documented reason.

### Rule 6 — Test behavior

Prefer behavior-focused tests over implementation-detail tests.

### Rule 7 — Keep game logic separate

The potion/reaction domain logic should not depend directly on React rendering.

### Rule 8 — Keep audio separate

UI components should request sounds rather than know how sounds are synthesized.

### Rule 9 — Keep visual effects replaceable

A reaction should conceptually be:

```text
GAME EVENT
    ↓
REACTION
    ↓
VISUAL EFFECT
    ↓
AUDIO EFFECT
    ↓
HAPTIC EFFECT
```

rather than one giant component doing everything.

### Rule 10 — No unnecessary AI

Do not introduce an LLM, embeddings, vector database, RAG, agents, or other AI technology unless there is a concrete product or learning reason.

---

# 15. Testing Strategy

Use an appropriate testing framework for the chosen stack.

Tests should cover:

### Domain logic

- recipe validity
- ingredient combinations
- reaction transitions
- potion completion

### Interaction logic

- ingredient selection
- drop events
- stirring
- reset

### UI

Only test important user-visible behavior.

Avoid brittle tests that depend on exact animation timing.

### Audio

Do not attempt to perfectly test subjective sound quality.

Test that:

- the correct audio event is emitted
- audio can be muted
- audio manager initializes correctly
- repeated events do not create runaway resources

---

# 16. Performance

The experience must feel smooth.

Pay attention to:

- unnecessary React renders
- animation loops
- particle count
- canvas rendering
- audio resources
- large assets
- mobile GPU limitations
- memory leaks
- event listener cleanup

Target:

> Smooth and tactile on a modern phone.

Do not optimize prematurely.

Measure first where practical.

---

# 17. Accessibility

Even though this is a visual/ASMR experience, support:

- reduced motion
- sound off
- haptics off
- sufficient contrast
- keyboard interaction for desktop
- accessible labels
- no interaction that requires sound to understand the game

The sensory experience should be enhanced by audio, not dependent on it.

---

# 18. PWA Requirements

The prototype should eventually support:

- web app manifest
- installability
- icons
- theme color
- offline shell
- service worker
- cached static assets

Do this incrementally rather than creating a complicated PWA architecture on day one.

---

# 19. Definition of Done

The prototype is complete when a user can:

1. Open Potion Lab.
2. Enter the lab.
3. See a beautiful potion vessel.
4. Pick up ingredients.
5. Drag/drop them.
6. Hear subtle ASMR responses.
7. See the potion react.
8. Perform multiple interaction types.
9. Stir the potion.
10. See the final potion emerge.
11. Experience a satisfying completion sequence.
12. Replay the experience.
13. Disable ASMR.
14. Disable haptics.
15. Use the experience on mobile.
16. Install it as a PWA.

---

# 20. What NOT to Build Yet

Do NOT build:

- user accounts
- backend database
- multiplayer
- social features
- leaderboards
- monetization
- payments
- analytics
- achievements
- complicated progression
- 100 recipes
- procedural infinite content
- vector database
- RAG
- agent framework
- elaborate AI system

The first objective is:

> **One exceptionally satisfying Potion Lab experience.**

---

# 21. Product Principle

When deciding between two implementations, prefer the one that makes the interaction feel:

**physical → tactile → surprising → beautiful → satisfying**

over the one that merely adds more features.

The game should feel like:

> "I don't know exactly why this is so satisfying, but I want to do it again."

---

# 22. First Action

Do NOT immediately generate the entire application.

Start with **Milestone 1 planning**.

First:

1. Inspect the attached reference images.
2. Confirm the proposed architecture.
3. Show the initial project tree.
4. Explain the first important engineering concept.
5. Identify the first small task I should implement.
6. Then implement only the agreed Milestone 1 scope.

Do not skip milestones.

Do not silently implement future functionality.

Do not introduce AI/RAG merely for the sake of using AI.

The objective is to build the product **and simultaneously become better at understanding the software architecture behind it.**


# 23. Asset & Responsive Design Specification

## 23.1 Product Visual Direction

Potion Lab is a focused sensory potion-making experience.

The potion is always the visual hero.

The product should feel:

- dark
- cinematic
- premium
- mysterious
- tactile
- calm
- physically believable

Avoid:

- game-like HUDs
- excessive UI
- neon effects
- cartoon styling
- unnecessary decorative elements

The visual language must remain consistent across every potion, vessel and ingredient.

---

## 23.2 Responsive PWA Design

Potion Lab must work as a responsive PWA across:

- Android phones
- iPhones
- laptops
- desktop browsers

Primary mobile targets:

- 390 × 844
- 430 × 932

Desktop/laptop layouts must not simply stretch the mobile UI.

### Mobile

The composition should prioritize:

1. Potion vessel
2. Liquid/reaction area
3. Ingredient interaction area
4. Minimal instructions/UI

Ingredients may use a compact bottom tray.

### Desktop / Laptop

Use the additional horizontal space primarily for:

- breathing room
- larger potion presentation
- atmospheric environment

Do NOT introduce large sidebars, dashboards or additional UI merely because more space is available.

The experience should remain visually focused.

### Responsive principles

- Maintain a consistent visual hierarchy across breakpoints.
- Keep the potion centered and visually dominant.
- Constrain the maximum scene width.
- Preserve the intended vessel proportions.
- Avoid excessive cropping of the vessel or important effects.
- Touch and mouse interactions must use the same underlying interaction model.
- UI density should remain intentionally low.

---

## 23.3 Asset Strategy

Do NOT generate every visual asset from scratch.

Use a hybrid asset strategy.

### Custom / generated assets

Use custom artwork for assets that establish Potion Lab's identity:

- primary laboratory environment
- signature vessels
- core ingredient artwork
- important hero visuals
- distinctive magical elements

These should share the same lighting, perspective, material and art direction.

### Open-source assets

Open-source assets may be used for generic supporting elements such as:

- material textures
- wood/stone textures
- generic bottles and props
- particle textures
- ambient environmental elements
- audio samples

Only assets with licenses compatible with the project may be used.

Every externally sourced asset must record:

- asset name
- source URL
- creator
- license
- attribution requirement, if any
- local filename

Do not assume that an entire asset platform has one universal license. Verify the license of each selected asset.

Preferred sources may include:

- Poly Haven
- Kenney
- OpenGameArt
- Freesound

---

## 23.4 Procedural / Real-time Visuals

The following should NOT be static artwork:

- potion liquid
- liquid movement
- ripples
- bubbles
- splashes
- liquid reflections
- mist
- smoke reactions
- magical particles
- ingredient impact effects
- potion colour transitions

These should be generated or animated at runtime.

The liquid must behave as a genuine visual system rather than a static image with effects placed over it.

---

## 23.5 Rendering Architecture

Use:

- React + TypeScript + Vite for application/UI
- CSS for interface elements
- React Three Fiber / Three.js where it materially improves the visual experience
- WebGL/shaders for the liquid and other effects where appropriate
- Web Audio API for interactive/procedural ASMR

Keep rapidly changing animation values outside React state where appropriate.

Separate:

Environment
→ Vessel
→ Liquid
→ Ingredients
→ Visual Effects
→ UI
→ Audio
→ Haptics

---

## 23.6 Asset Preparation Before Coding

Before implementing the visual system, establish a small canonical asset pack.

Initial target:

- 2–3 vessels
- 5–8 ingredients
- 1 primary laboratory environment
- reusable particle/effect textures
- initial ASMR sound set
- liquid shader/noise textures where required

Do not create a large asset library prematurely.

The initial asset pack should be sufficient to validate the rendering and interaction system.

---

## 23.7 Asset Manifest

Maintain an asset manifest in the repository.

Example:

```ts
type AssetRecord = {
  id: string;
  name: string;
  type: "image" | "texture" | "audio" | "model";
  source: "generated" | "open-source" | "procedural";
  sourceUrl?: string;
  creator?: string;
  license?: string;
  attributionRequired?: boolean;
};

