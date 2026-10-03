import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Lavender } from '../components/ingredients/Lavender'
import { PotionVessel } from '../components/potion/PotionVessel'
import { AudioManager } from '../game/audio/AudioManager'
import { addLavender, finishReaction, initialPotionState, type PotionState } from '../game/state/potion'
import workshopImage from '../../CustomAsset-Moody Fantasy Alchemist’s Workshop-3.png'

const audio = new AudioManager()

export default function App() {
  const [potion, setPotion] = useState<PotionState>(initialPotionState)
  const [soundOn, setSoundOn] = useState(true)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const addIngredient = () => {
    if (potion.lavenderAdded) return
    const adding = addLavender(potion)
    setPotion(adding)
    audio.enabled = soundOn
    audio.playDrop()
    navigator.vibrate?.(12)
    window.setTimeout(() => {
      setPotion({ ...adding, stage: 'reacting' })
      audio.playBloom()
      timer.current = window.setTimeout(() => setPotion(current => finishReaction(current)), 1450)
    }, 210)
  }

  const status = potion.stage === 'awaiting-ingredient' ? 'Drag lavender into the vessel' : potion.stage === 'adding' ? 'Lavender is falling…' : potion.stage === 'reacting' ? 'The elixir is waking…' : 'Lavender has softened the elixir'

  return (
    <main className="lab" style={{ '--workshop': `url(${workshopImage})` } as CSSProperties}>
      <div className="atmosphere" />
      <header className="topbar">
        <button className="icon-button" type="button" aria-label="Return to potion selection">‹</button>
        <div><p className="eyebrow">Potion Lab</p><h1>Calm Elixir</h1></div>
        <button className={`sound-button ${soundOn ? 'on' : ''}`} type="button" aria-pressed={soundOn} onClick={() => setSoundOn(value => !value)} aria-label="Toggle ASMR sounds"><span>⌁</span><span className="sound-bars" aria-hidden="true" /></button>
      </header>

      <section className="brew" aria-live="polite">
        <div className="copy"><p className="step">01 <span /> 05</p><h2>{status}</h2><p>Every ingredient changes the character of the brew.</p></div>
        <PotionVessel stage={potion.stage} onDrop={addIngredient} />
        <div className="stars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </section>

      <section className="ingredient-dock" aria-label="Available ingredients">
        <Lavender disabled={potion.lavenderAdded} onReleaseOverVessel={addIngredient} />
        <div className="locked-ingredient"><span>✦</span><small>Moon Petal</small></div>
        <div className="locked-ingredient"><span>◈</span><small>Dewdrop</small></div>
        <div className="locked-ingredient"><span>✦</span><small>Dream Moss</small></div>
        <div className="locked-ingredient"><span>◇</span><small>Mist Crystal</small></div>
      </section>

      {potion.stage === 'ready' && <div className="toast">Lavender added <span>✦</span></div>}
    </main>
  )
}
