import { useRef, useState } from 'react'

type LavenderProps = { disabled: boolean; onReleaseOverVessel: () => void }

export function Lavender({ disabled, onReleaseOverVessel }: LavenderProps) {
  const [dragging, setDragging] = useState(false)
  const origin = useRef({ x: 0, y: 0 })

  const release = (clientX: number, clientY: number) => {
    setDragging(false)
    const vessel = document.querySelector('.vessel-zone')?.getBoundingClientRect()
    if (vessel && clientX >= vessel.left && clientX <= vessel.right && clientY >= vessel.top && clientY <= vessel.bottom) onReleaseOverVessel()
  }

  return (
    <button
      className={`ingredient lavender ${dragging ? 'is-dragging' : ''} ${disabled ? 'is-used' : ''}`}
      type="button"
      aria-label={disabled ? 'Lavender added' : 'Drag lavender to the vessel'}
      draggable={!disabled}
      disabled={disabled}
      onDragStart={(event) => { setDragging(true); event.dataTransfer.effectAllowed = 'move' }}
      onDragEnd={() => setDragging(false)}
      onPointerDown={(event) => { origin.current = { x: event.clientX, y: event.clientY }; setDragging(true); event.currentTarget.setPointerCapture(event.pointerId) }}
      onPointerUp={(event) => { if (dragging) release(event.clientX, event.clientY) }}
    >
      <span className="ingredient-art" aria-hidden="true" />
      <span className="ingredient-name">Lavender</span>
      <span className="ingredient-hint">drag to add</span>
    </button>
  )
}
