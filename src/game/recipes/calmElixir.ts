export type IngredientId = 'lavender' | 'moon-petal' | 'dewdrop' | 'dream-moss' | 'mist-crystal'
export type IngredientInteraction = 'drop' | 'pour' | 'crush'

export type Ingredient = {
  id: IngredientId
  name: string
  interaction: IngredientInteraction
  reaction: string
  color: string
  artPosition: string
}

export const calmElixirIngredients: readonly Ingredient[] = [
  { id: 'lavender', name: 'Lavender', interaction: 'drop', reaction: 'A violet hush spreads across the surface.', color: '#9a72d3', artPosition: '0 0' },
  { id: 'moon-petal', name: 'Moon Petal', interaction: 'drop', reaction: 'Pale petals drift into a pearlescent current.', color: '#e7b8d7', artPosition: '100% 0' },
  { id: 'dewdrop', name: 'Dewdrop', interaction: 'pour', reaction: 'Cool blue light ripples through the glass.', color: '#62b9ee', artPosition: '0 100%' },
  { id: 'dream-moss', name: 'Dream Moss', interaction: 'crush', reaction: 'Moss-green currents descend and settle.', color: '#78a75e', artPosition: '50% 100%' },
  { id: 'mist-crystal', name: 'Mist Crystal', interaction: 'drop', reaction: 'A final amethyst bloom steadies the elixir.', color: '#b28be0', artPosition: '100% 100%' },
] as const

export const ingredientById = Object.fromEntries(
  calmElixirIngredients.map((ingredient) => [ingredient.id, ingredient]),
) as Record<IngredientId, Ingredient>

export const calmElixirOrder = calmElixirIngredients.map((ingredient) => ingredient.id) as IngredientId[]
