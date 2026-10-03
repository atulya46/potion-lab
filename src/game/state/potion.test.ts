import { describe, expect, it } from 'vitest'
import { addLavender, finishReaction, initialPotionState } from './potion'

describe('potion state', () => {
  it('moves from an awaiting potion into an adding state', () => {
    expect(addLavender(initialPotionState)).toEqual({ stage: 'adding', lavenderAdded: true })
  })
  it('does not complete an empty potion', () => {
    expect(finishReaction(initialPotionState)).toEqual(initialPotionState)
  })
})
