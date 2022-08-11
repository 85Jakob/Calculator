let firstNumber = '';
let secondNumber = '';

const mainScreen = document.getElementById('main-screen');
const secondScreen = document.getElementById('second-screen');
const numBtn = document.querySelectorAll('[data-number]');
const oppBtn = document.querySelectorAll('[data-operator]');

numBtn.forEach((button) => button.addEventListener('click', () => enterNumber(button.textContent)));
oppBtn.forEach((button) => button.addEventListener('click', () => setOperation(button.textContent)));

function enterNumber(number) {
    mainScreen.textContent += number;
    firstNumber =  firstNumber + number;
    console.log(firstNumber);
}

function setOperation(operator){
    secondScreen.textContent = firstNumber + ' ' + operator;
    
}