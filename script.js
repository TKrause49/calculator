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

function clear () {
    display.textContent = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayValue = null;
}

clearBtn.addEventListener('click', () => clear());

function selectNumber(number) {
    if (display.textContent === displayValue) {display.textContent = ''};
    display.textContent += number;
}

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

//when I click on an operator button, and then click on a number button, 
//the display.textcontent should be clear

zero.addEventListener('click', () => selectNumber(0));
one.addEventListener('click', () => selectNumber(1));
two.addEventListener('click', () => selectNumber(2));
three.addEventListener('click', () => selectNumber(3));
four.addEventListener('click', () => selectNumber(4));
five.addEventListener('click', () => selectNumber(5));
six.addEventListener('click', () => selectNumber(6));
seven.addEventListener('click', () => selectNumber(7));
eight.addEventListener('click', () => selectNumber(8));
nine.addEventListener('click', () => selectNumber(9));
addition.addEventListener('click', () => getNumber(addition.textContent));
subtraction.addEventListener('click', () => getNumber(subtraction.textContent));
multiplication.addEventListener('click', () => getNumber(multiplication.textContent));
division.addEventListener('click', () => getNumber(division.textContent));
equals.addEventListener('click', () => getNumber(equals.textContent));
