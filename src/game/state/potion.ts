export type PotionStage = 'awaiting-ingredient' | 'adding' | 'reacting' | 'ready'

export type PotionState = {
  stage: PotionStage
  lavenderAdded: boolean
}

export const initialPotionState: PotionState = {
  stage: 'awaiting-ingredient',
  lavenderAdded: false,
}

export function addLavender(state: PotionState): PotionState {
  if (state.lavenderAdded) return state
  return { ...state, stage: 'adding', lavenderAdded: true }
}

export function finishReaction(state: PotionState): PotionState {
  return state.lavenderAdded ? { ...state, stage: 'ready' } : state
}
