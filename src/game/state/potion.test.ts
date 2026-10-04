import { describe, expect, it } from 'vitest'
import { addIngredient, canAddIngredient, finishReaction, initialPotionState } from './potion'

describe('potion state', () => {
  it('moves from an awaiting potion into an adding state for the expected ingredient', () => {
    expect(addIngredient(initialPotionState, 'lavender')).toEqual({ stage: 'adding', addedIngredients: ['lavender'], lastIngredient: 'lavender' })
  })
  it('rejects an ingredient that is out of recipe order', () => {
    expect(canAddIngredient(initialPotionState, 'moon-petal')).toBe(false)
    expect(addIngredient(initialPotionState, 'moon-petal')).toEqual(initialPotionState)
  })
  it('does not complete an empty potion', () => {
    expect(finishReaction(initialPotionState)).toEqual(initialPotionState)
  })
  it('completes Calm Elixir after all five ordered reactions settle', () => {
    const addAndSettle = (state: typeof initialPotionState, id: Parameters<typeof addIngredient>[1]) => {
      const adding = addIngredient(state, id)
      return finishReaction({ ...adding, stage: 'reacting' })
    }
    const withLavender = addAndSettle(initialPotionState, 'lavender')
    const withPetal = addAndSettle(withLavender, 'moon-petal')
    const withDewdrop = addAndSettle(withPetal, 'dewdrop')
    const withMoss = addAndSettle(withDewdrop, 'dream-moss')
    expect(addAndSettle(withMoss, 'mist-crystal').stage).toBe('ready')
  })
})
