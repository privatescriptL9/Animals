new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  continuousHorizontal: true,
  scrollHorizontally: true,
  afterResponsive: function (isResponsive) {},
})

fullpage_api.cards.setOption('perspective', 500)
fullpage_api.cards.init()
