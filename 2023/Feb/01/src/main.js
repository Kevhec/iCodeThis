const themeButton = document.querySelector('.component__lightModeButton');
const moonIcon = document.querySelector('.component__icon--moon')
const sunIcon = document.querySelector('.component__icon--sun')
const body = document.body;

themeButton.addEventListener('click', () => {
  moonIcon.classList.toggle('hidden');
  sunIcon.classList.toggle('hidden');
  body.classList.toggle('light-mode');
})