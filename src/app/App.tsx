import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Ingredient } from '../components/ingredients/Ingredient'
import { PotionVessel } from '../components/potion/PotionVessel'
import { AudioManager } from '../game/audio/AudioManager'
import { ingredientById, calmElixirIngredients, type IngredientId } from '../game/recipes/calmElixir'
import { addIngredient, canAddIngredient, finishReaction, initialPotionState, nextIngredient, type PotionState } from '../game/state/potion'
import workshopImage from '../../CustomAsset-Moody Fantasy Alchemist’s Workshop-3.png'

const audio = new AudioManager()

export default function App() {
  const [potion, setPotion] = useState<PotionState>(initialPotionState)
  const [soundOn, setSoundOn] = useState(true)
  const [feedback, setFeedback] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const addPotionIngredient = (id: IngredientId) => {
    if (!canAddIngredient(potion, id)) {
      setFeedback(`The elixir is waiting for ${ingredientById[nextIngredient(potion) ?? id].name}.`)
      return
    }
    const adding = addIngredient(potion, id)
    setPotion(adding)
    setFeedback(null)
    audio.enabled = soundOn
    audio.playDrop()
    navigator.vibrate?.(12)
    window.setTimeout(() => {
      setPotion({ ...adding, stage: 'reacting' })
      audio.playBloom()
      timer.current = window.setTimeout(() => setPotion(current => finishReaction(current)), 1450)
    }, 210)
  }

  const next = nextIngredient(potion)
  const currentIngredient = potion.lastIngredient ? ingredientById[potion.lastIngredient] : undefined
  const status = potion.stage === 'awaiting-ingredient' && next
    ? `${currentIngredient ? 'Now add' : 'Begin with'} ${ingredientById[next].name}`
    : potion.stage === 'adding' ? `${currentIngredient?.name} is joining the elixir…`
      : potion.stage === 'reacting' ? currentIngredient?.reaction ?? 'The elixir is waking…'
        : 'Calm Elixir is complete'

  return (
    <main className="lab" style={{ '--workshop': `url(${workshopImage})` } as CSSProperties}>
      <div className="atmosphere" />
      <header className="topbar">
        <button className="icon-button" type="button" aria-label="Return to potion selection">‹</button>
        <div><p className="eyebrow">Potion Lab</p><h1>Calm Elixir</h1></div>
        <button className={`sound-button ${soundOn ? 'on' : ''}`} type="button" aria-pressed={soundOn} onClick={() => setSoundOn(value => !value)} aria-label="Toggle ASMR sounds"><span>⌁</span><span className="sound-bars" aria-hidden="true" /></button>
      </header>

      <section className="brew" aria-live="polite">
        <div className="copy"><p className="step">{String(potion.addedIngredients.length + (potion.stage === 'ready' ? 0 : 1)).padStart(2, '0')} <span /> 05</p><h2>{status}</h2><p>{currentIngredient?.reaction ?? 'Every ingredient changes the character of the brew.'}</p></div>
        <PotionVessel stage={potion.stage} lastIngredient={potion.lastIngredient} onDrop={addPotionIngredient} />
        <div className="stars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </section>

      <section className="ingredient-dock" aria-label="Available ingredients">
        {calmElixirIngredients.map((ingredient) => <Ingredient key={ingredient.id} ingredient={ingredient} added={potion.addedIngredients.includes(ingredient.id)} busy={potion.stage === 'adding' || potion.stage === 'reacting' || potion.stage === 'ready'} onAdd={addPotionIngredient} />)}
      </section>

      {feedback && <div className="toast error">{feedback}</div>}
      {potion.stage === 'ready' && <div className="toast">Calm Elixir complete <span>✦</span></div>}
    </main>
  )
}
