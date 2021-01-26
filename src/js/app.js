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

new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  continuousHorizontal: true,
  scrollHorizontally: true,
  afterResponsive: function(isResponsive){},
})

fullpage_api.cards.setOption('perspective', 500);
fullpage_api.cards.init();
