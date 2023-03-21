const textInput = document.querySelector('.card__text-input')
const textInputLabel = document.querySelector('#textInputLabel')
const form = document.getElementById('donation-form')

textInput.addEventListener('click', unselectRadioInputs)
textInputLabel.addEventListener('click', unselectRadioInputs)
form.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const alert = document.querySelector('.alert')
  alert.classList.add('alert--active')
  setTimeout(() => {
    alert.classList.remove('alert--active')
  }, 3000);
})

function unselectRadioInputs() {
  const radioInputs = document.querySelectorAll('input[type="radio"]')
  for (let i = 0; i < radioInputs.length; i++) {
    radioInputs[i].checked = false;
  }
}