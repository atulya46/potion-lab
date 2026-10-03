/** Small procedural sounds keep the prototype self-contained and responsive. */
export class AudioManager {
  private context?: AudioContext
  enabled = true

  private getContext() {
    this.context ??= new AudioContext()
    if (this.context.state === 'suspended') void this.context.resume()
    return this.context
  }

  playDrop() {
    if (!this.enabled) return
    const context = this.getContext()
    const now = context.currentTime
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(310, now)
    oscillator.frequency.exponentialRampToValueAtTime(120, now + 0.16)
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(0.12, now + 0.012)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2)
    oscillator.connect(gain).connect(context.destination)
    oscillator.start(now)
    oscillator.stop(now + 0.22)
  }

  playBloom() {
    if (!this.enabled) return
    const context = this.getContext()
    const now = context.currentTime
    ;[392, 587.33].forEach((frequency, index) => {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.value = frequency
      gain.gain.setValueAtTime(0.0001, now + index * 0.06)
      gain.gain.exponentialRampToValueAtTime(0.045, now + 0.12 + index * 0.06)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.15)
      oscillator.connect(gain).connect(context.destination)
      oscillator.start(now + index * 0.06)
      oscillator.stop(now + 1.2)
    })
  }
}
