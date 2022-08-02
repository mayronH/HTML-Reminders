import './style.css'

const number = document.querySelector('#slider')
const choice = document.querySelector('.choice')

number.addEventListener('change', () => {
  choice.textContent = number.value
})
