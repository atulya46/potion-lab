import type { PotionStage } from '../../game/state/potion'
import type { IngredientId } from '../../game/recipes/calmElixir'

type PotionVesselProps = { stage: PotionStage; lastIngredient?: IngredientId; onDrop: (id: IngredientId) => void }

export function PotionVessel({ stage, lastIngredient, onDrop }: PotionVesselProps) {
  return (
    <div
      className={`vessel-zone ${stage} ${lastIngredient ? `reaction-${lastIngredient}` : ''}`}
      aria-label="Potion vessel. Drop the next ingredient here."
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => { event.preventDefault(); onDrop(event.dataTransfer.getData('text/plain') as IngredientId) }}
    >
      <div className="vessel-shadow" />
      <div className="vessel">
        <div className="glass-rim" />
        <div className="liquid">
          <div className="liquid-wave" />
          <i className="bubble bubble-one" /><i className="bubble bubble-two" /><i className="bubble bubble-three" />
          <div className="liquid-core" />
        </div>
        <div className="glass-reflection" />
        <div className="reaction-rings"><i /><i /><i /></div>
      </div>
      <div className="vessel-base" />
      <div className="vessel-mist" />
    </div>
  )
}
