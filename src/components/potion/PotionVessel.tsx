import type { PotionStage } from '../../game/state/potion'

type PotionVesselProps = { stage: PotionStage; onDrop: () => void }

export function PotionVessel({ stage, onDrop }: PotionVesselProps) {
  return (
    <div
      className={`vessel-zone ${stage}`}
      aria-label="Potion vessel. Drop lavender here."
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => { event.preventDefault(); onDrop() }}
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
