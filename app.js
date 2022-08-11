let currentNumber = '';
let prevNumber = '';
let prevOperator = '';

const mainScreen = document.getElementById('main-screen');
const secondScreen = document.getElementById('second-screen');
const numBtn = document.querySelectorAll('[data-number]');
const oppBtn = document.querySelectorAll('[data-operator]');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

numBtn.forEach((button) => button.addEventListener('click', () => enterNumber(button.textContent)));
oppBtn.forEach((button) => button.addEventListener('click', () => setOperation(button.textContent)));
clearBtn.onclick = () => clear();
equalsBtn.onclick = () => solve();

function enterNumber(number) {
    mainScreen.textContent = '';
    currentNumber =  currentNumber + number;
    mainScreen.textContent = currentNumber;
}

function setOperation(operator){
    if(prevNumber === ''){
        secondScreen.textContent = currentNumber + ' ' + operator;
        prevNumber = currentNumber;
        currentNumber = '';
        prevOperator = operator;
        mainScreen.textContent = '';
    }
    else{
        valid = operate(prevOperator);
        secondScreen.textContent = prevNumber + ' ' + operator;
        currentNumber = '';
        prevOperator = operator;
        if(valid === true){
            mainScreen.textContent = '';
        }
        if(valid === false){
            reset()
        }
    }
}

function solve(){
    operate(prevOperator);
    secondScreen.textContent = ' ';
    currentNumber = prevNumber;
    mainScreen.textContent = prevNumber;
    
    reset()
}

function operate(operator){
    valid = true;
    if(operator === 'x'){
        prevNumber = '' + (parseInt(prevNumber) * parseInt(currentNumber));
    }
    else if(operator === '-'){
        prevNumber = '' + (parseInt(prevNumber) - parseInt(currentNumber) );
    }
    else if(operator === '+'){
        prevNumber = '' + (parseInt(prevNumber) + parseInt(currentNumber));
    }
    else if(operator === '÷'){
        if(parseInt(currentNumber) === 0){
            mainScreen.textContent = 'DIV/0';
            valid = false;
        }
        else{
            prevNumber = '' + (parseInt(prevNumber) / parseInt(currentNumber));
        }
    }
    return valid;
}

function clear(){
    mainScreen.textContent = ' ';
    reset();
}

function reset(){
    secondScreen.textContent = ' ';
    currentNumber = '';
    prevNumber = '';
    prevOperator = '';
}