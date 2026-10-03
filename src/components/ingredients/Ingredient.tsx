import { useState } from 'react'
import type { Ingredient as IngredientData } from '../../game/recipes/calmElixir'

type IngredientProps = {
  ingredient: IngredientData
  added: boolean
  busy: boolean
  onAdd: (id: IngredientData['id']) => void
}

export function Ingredient({ ingredient, added, busy, onAdd }: IngredientProps) {
  const [dragging, setDragging] = useState(false)
  const label = added ? `${ingredient.name} added` : `Add ${ingredient.name} by ${ingredient.interaction}`

  const release = (clientX: number, clientY: number) => {
    setDragging(false)
    const vessel = document.querySelector('.vessel-zone')?.getBoundingClientRect()
    if (vessel && clientX >= vessel.left && clientX <= vessel.right && clientY >= vessel.top && clientY <= vessel.bottom) onAdd(ingredient.id)
  }

  return (
    <button
      className={`ingredient ${ingredient.id} ${dragging ? 'is-dragging' : ''} ${added ? 'is-used' : ''}`}
      type="button"
      aria-label={label}
      draggable={!added && !busy}
      disabled={added || busy}
      onClick={() => onAdd(ingredient.id)}
      onDragStart={(event) => { setDragging(true); event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', ingredient.id) }}
      onDragEnd={() => setDragging(false)}
      onPointerDown={(event) => { setDragging(true); event.currentTarget.setPointerCapture(event.pointerId) }}
      onPointerUp={(event) => { if (dragging) release(event.clientX, event.clientY) }}
    >
      <span className="ingredient-art" style={{ backgroundPosition: ingredient.artPosition }} aria-hidden="true" />
      <span className="ingredient-name">{ingredient.name}</span>
      <span className="ingredient-hint">{ingredient.interaction}</span>
    </button>
  )
}
