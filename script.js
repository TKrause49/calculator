let firstNumber = 6;
let operator = '*';
let secondNumber = 2;

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

// console.log(operate(firstNumber, operator, secondNumber));