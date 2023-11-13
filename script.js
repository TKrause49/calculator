function add (first, second) {
    return first + second;
}

function subtract (first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function operate (first, op, second) {
    if (op === '+') {return add(first, second)};
    if (op === '-') {return subtract(first, second)};
    if (op === '*') {return multiply(first, second)};
    if (op === '/') {return divide(first, second)};
}

const display = document.querySelector('#display');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const equals = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const addition = document.querySelector('#add');
const subtraction = document.querySelector('#subtract');
const multiplication = document.querySelector('#multiply');
const division = document.querySelector('#divide');

let displayValue = '';
let firstNumber;
let secondNumber;
let operator;

function selectNumber(number) {
    if (displayValue) {display.textContent = ''};
    display.textContent += number;
}

zero.addEventListener('click', () => selectNumber(zero.textContent));
one.addEventListener('click', () => selectNumber(one.textContent));
two.addEventListener('click', () => selectNumber(two.textContent));
three.addEventListener('click', () => selectNumber(three.textContent));
four.addEventListener('click', () => selectNumber(four.textContent));
five.addEventListener('click', () => selectNumber(five.textContent));
six.addEventListener('click', () => selectNumber(six.textContent));
seven.addEventListener('click', () => selectNumber(seven.textContent));
eight.addEventListener('click', () => selectNumber(eight.textContent));
nine.addEventListener('click', () => selectNumber(nine.textContent));

function clear () {
    display.textContent = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayValue = null;
}

clearBtn.addEventListener('click', () => clear());

function getNumber (op) {
    displayValue = display.textContent;

    if (!firstNumber) {
        firstNumber = Number(displayValue);
        operator = op;
        display.textContent = '';
        return;
    } else if (firstNumber) {
        secondNumber = Number(displayValue);
        display.textContent = operate(firstNumber, operator, secondNumber);
        displayValue = display.textContent;
    } 

    if (op === equals.textContent) {
        firstNumber = null;
        secondNumber = null;
        operator = null;
    } else {
        firstNumber = Number(displayValue);
        operator = op;
        secondNumber = null;
    }
};

addition.addEventListener('click', () => getNumber(addition.textContent));
subtraction.addEventListener('click', () => getNumber(subtraction.textContent));
multiplication.addEventListener('click', () => getNumber(multiplication.textContent));
division.addEventListener('click', () => getNumber(division.textContent));
equals.addEventListener('click', () => getNumber(equals.textContent));
