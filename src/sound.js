class Sound {
  constructor () {
    this.context = new (window.AudioContext || window.webkitAudioContext)()
  }

  play (seconds) {
    seconds = seconds || 0.5
    const currentTime = this.context.currentTime
    let oscillator = this.context.createOscillator()
    oscillator.connect(this.context.destination)

    oscillator.type = 'sine'
    oscillator.frequency.value = 1200
    oscillator.start(currentTime)
    oscillator.stop(currentTime + seconds)
  }
}

export default Sound
