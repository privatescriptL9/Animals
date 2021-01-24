
const container__area = document.querySelectorAll('.container__area')

container__area.forEach(element => {
  element.addEventListener('mouseover', () => {
    console.log('MouseOver')
  })
})