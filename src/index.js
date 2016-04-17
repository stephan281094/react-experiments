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
  var time = document.querySelector('.time')
  var body = document.querySelector('body')
  var busy = false
  var timerInterval;

  var timer = {
    time: 0,
    update: function () {
      this.time++

      if (this.time === 60) {
        sound.play()
        this.time = 0
      }
    }
  }

  toggleButton.addEventListener('click', toggleTimer)
  body.addEventListener('keydown', function (event) {
    if (event.keyCode === 32) {
      toggleTimer()
    }
  })

  function toggleTimer () {
    if (busy) {
      clearInterval(timerInterval)
      timer.time = 0
      drawTimer()

      toggleButton.innerHTML = 'Start'
      body.style.backgroundColor = '#fff'
    } else {
      timerInterval = setInterval(function () {
        timer.update()
        drawTimer()
      }, 1000)
      toggleButton.innerHTML = 'Stop'
      body.style.backgroundColor = '#c00'
    }

    toggleButton.classList.toggle('busy')
    time.classList.toggle('busy')
    busy = !busy
  }

  function drawTimer (t) {
    time.innerHTML = t || timer.time
  }
}
