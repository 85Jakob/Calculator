let currentOperation = null;

const currentScreen = document.getElementById('current-screen')
const numBtn = document.querySelectorAll('[data-number]');
const oppBtn = document.querySelectorAll('[data-operator]');

numBtn.forEach((button) => button.addEventListener('click', () => enterNumber(button.textContent)))

function enterNumber(number) {
    currentScreen.textContent += number
}