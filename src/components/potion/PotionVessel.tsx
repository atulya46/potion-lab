import { useRef } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import type { PotionStage } from '../../game/state/potion'
import type { IngredientId } from '../../game/recipes/calmElixir'

type PotionVesselProps = { stage: PotionStage; lastIngredient?: IngredientId; onDrop: (id: IngredientId) => void }

export function PotionVessel({ stage, lastIngredient, onDrop }: PotionVesselProps) {
  const vesselRef = useRef<HTMLDivElement>(null)
  const stir = useRef({ active: false, x: 0, y: 0, power: 0, releaseTimer: 0 })

  const setStirPower = (power: number) => {
    stir.current.power = power
    vesselRef.current?.style.setProperty('--stir-power', String(power))
  }

  const beginStir = (event: PointerEvent<HTMLDivElement>) => {
    stir.current.active = true
    stir.current.x = event.clientX
    stir.current.y = event.clientY
    event.currentTarget.setPointerCapture(event.pointerId)
    window.clearTimeout(stir.current.releaseTimer)
  }

  const moveStir = (event: PointerEvent<HTMLDivElement>) => {
    if (!stir.current.active) return
    const distance = Math.hypot(event.clientX - stir.current.x, event.clientY - stir.current.y)
    stir.current.x = event.clientX
    stir.current.y = event.clientY
    if (distance > 2) setStirPower(Math.min(1, stir.current.power + distance / 140))
  }

  const endStir = () => {
    stir.current.active = false
    window.clearTimeout(stir.current.releaseTimer)
    stir.current.releaseTimer = window.setTimeout(() => setStirPower(0), 650)
  }

  return (
    <div
      ref={vesselRef}
      className={`vessel-zone ${stage} ${lastIngredient ? `reaction-${lastIngredient}` : ''}`}
      aria-label="Potion vessel. Drop the next ingredient here."
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => { event.preventDefault(); onDrop(event.dataTransfer.getData('text/plain') as IngredientId) }}
      onPointerDown={beginStir}
      onPointerMove={moveStir}
      onPointerUp={endStir}
      onPointerCancel={endStir}
    >
      <div className="vessel-shadow" />
      <div className="vessel">
        <div className="glass-rim" />
        <div className="liquid">
          <div className="liquid-wave" />
          <div className="liquid-current current-one" /><div className="liquid-current current-two" /><div className="liquid-current current-three" />
          <i className="bubble bubble-one" /><i className="bubble bubble-two" /><i className="bubble bubble-three" />
          <div className="liquid-core" />
          <div className="stir-spiral" aria-hidden="true"><i /><i /><i /></div>
        </div>
        <div className="glass-reflection" />
        <div className="reaction-rings"><i /><i /><i /></div>
        <div className="reaction-particles" aria-hidden="true">
          {Array.from({ length: 14 }, (_, index) => <i key={index} style={{ '--particle-index': index } as CSSProperties} />)}
        </div>
      </div>
      <div className="vessel-base" />
      <div className="vessel-mist" />
      <p className="stir-hint">circle within the elixir to stir</p>
    </div>
  )
}
