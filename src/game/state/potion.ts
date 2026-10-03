import { calmElixirOrder, type IngredientId } from '../recipes/calmElixir'

export type PotionStage = 'awaiting-ingredient' | 'adding' | 'reacting' | 'ready'

export type PotionState = {
  stage: PotionStage
  addedIngredients: IngredientId[]
  lastIngredient?: IngredientId
}

export const initialPotionState: PotionState = {
  stage: 'awaiting-ingredient',
  addedIngredients: [],
}

export function nextIngredient(state: PotionState): IngredientId | undefined {
  return calmElixirOrder[state.addedIngredients.length]
}

export function canAddIngredient(state: PotionState, id: IngredientId): boolean {
  return state.stage === 'awaiting-ingredient' && nextIngredient(state) === id
}

export function addIngredient(state: PotionState, id: IngredientId): PotionState {
  if (!canAddIngredient(state, id)) return state
  return { stage: 'adding', addedIngredients: [...state.addedIngredients, id], lastIngredient: id }
}

export function finishReaction(state: PotionState): PotionState {
  if (state.stage !== 'reacting') return state
  return { ...state, stage: state.addedIngredients.length === calmElixirOrder.length ? 'ready' : 'awaiting-ingredient' }
}
