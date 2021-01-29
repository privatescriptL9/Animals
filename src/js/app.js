const container__area = document.querySelectorAll('.container__area')

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

function music() {
  const audio = new Audio()
  audio.src = 'assets/sounds/main.mp3'
  audio.autoplay = 'autoplay'
}

music()
