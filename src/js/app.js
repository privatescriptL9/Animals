const container__area = document.querySelectorAll('.container__area')

const urls = ['taiga.html', 'desert.html', 'savannah.html', 'steppe.html', 'tropics.html']

container__area.forEach((element, index) => {
  element.addEventListener('click', () => {
    document.location.href = urls[index]
  })
})

const arrow = document.querySelectorAll('.arrow')
const container = document.querySelectorAll('.container')
const list = document.querySelector('#fp-nav ul')
const arrowContainer = document.querySelectorAll('.container__arrow')

arrowContainer.forEach((value, i) => {
  value.addEventListener('click', (e) => {
    arrow[i].classList.toggle('rotate')
    container[i].classList.toggle('open')
    list.classList.toggle('hide')
    value.classList.toggle('move')
  })
})

window.addEventListener('scroll', () => {
  const scroll_item = window.scrollY
  document.querySelectorAll('.section').forEach((element, i) => {
    if (element.offsetTop <= scroll_item) {
      document.querySelectorAll('.container').forEach((element) => {
        if (element.classList.contains('open')) {
          element.classList.remove('open')
          arrow[i].classList.remove('rotate')
          list.classList.remove('hide')
          arrowContainer[i].classList.remove('move')
        }
      })
    }
  })
})

const sectionContainer = document.querySelectorAll('#fullpage section')
sectionContainer.forEach((element, i) => {
  if(element.classList.contains('active')){
    arrow[i].classList.remove('rotate')
    container[i].classList.remove('open')
    list.classList.remove('hide')
    arrowContainer[i].classList.remove('move')
  }
})
