var context = new (window.AudioContext || window.webkitAudioContext)()

var sound = {
  play: function (seconds) {
    seconds = seconds || 0.5
    var currentTime = context.currentTime
    var oscillator = context.createOscillator()
    oscillator.connect(context.destination)

    oscillator.type = 'sine'
    oscillator.frequency.value = 1200
    oscillator.start(currentTime)
    oscillator.stop(currentTime + seconds)
  }
}

window.onload = function () {
  var toggleButton = document.querySelector('.toggle-timer')
  var body = document.querySelector('body')
  var busy = false
  var timer;

  toggleButton.addEventListener('click', function (event) {
    if (busy) {
      clearInterval(timer)
      toggleButton.innerHTML = 'Start'
      body.style.backgroundColor = '#fff'
    } else {
      timer = setInterval(sound.play, 60000)
      toggleButton.innerHTML = 'Stop'
      body.style.backgroundColor = '#c00'
    }

    toggleButton.classList.toggle('busy')
    busy = !busy
  })
}
