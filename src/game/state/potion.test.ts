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
})
