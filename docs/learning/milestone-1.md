# Milestone 1: the engineering map

The app is deliberately split between **rendering** and **domain state**.

`App.tsx` holds the current `PotionState` and tells components what to render. `PotionVessel` does not decide whether an ingredient is valid; it reports a drop. The pure functions in `game/state/potion.ts` decide the state transition. That distinction is useful because pure state transitions are fast and dependable to test, while the CSS animation and browser APIs remain free to be expressive.

The audio layer is similarly isolated. `AudioManager` creates a short pitch-swept sine tone for an impact and two fading tones for a magical bloom. Web Audio needs a user gesture before it can begin; the drop action is that gesture, so audio stays unobtrusive and browser-safe.

## Suggested small implementation task

Add a `resetPotion` event after the current first ingredient has been added.

Acceptance criteria:

1. Add a pure `resetPotion()` transition in `src/game/state/potion.ts` that returns `initialPotionState`.
2. Render a small “Brew again” control only when the potion is `ready`.
3. Its click handler calls the pure transition; it must not manipulate DOM classes directly.
4. Add a test proving that `resetPotion(addLavender(initialPotionState))` returns `initialPotionState`.

This is a focused exercise in props, event handlers, React state setters, and testing a state transition without needing a browser.
