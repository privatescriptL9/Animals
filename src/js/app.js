const container__area = document.querySelectorAll('.container__area')
const soundBtn = document.querySelector('.sound-btn')

const urls = [
  'taiga.html',
  'desert.html',
  'savannah.html',
  'steppe.html',
  'tropics.html',
]

container__area.forEach((element, index) => {
  element.addEventListener('click', () => {
    document.location.href = urls[index]
  })
})

const audio = new Audio()

function music() {
  audio.src = 'assets/sounds/main.mp3'
  audio.autoplay = 'autoplay'
}

music()

soundBtn.addEventListener('click', () => {
  if (!audio.muted) {
    audio.muted = true
    soundBtn.classList.remove('fa-volume-up')
    soundBtn.classList.add('fa-volume-down')
  } else {
    audio.muted = false
    soundBtn.classList.remove('fa-volume-down')
    soundBtn.classList.add('fa-volume-up')
  }
})




