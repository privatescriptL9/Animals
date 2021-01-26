const container__area = document.querySelectorAll('.container__area')

const urls = {
  0: 'taiga.html',
  1: 'desert.html',
  2: 'savannah.html',
  3: 'steppe.html',
  4: 'tropics.html'
}

container__area.forEach((element, index) => {
  element.addEventListener('click', () => {
    document.location.href = urls[index]
  })
})
