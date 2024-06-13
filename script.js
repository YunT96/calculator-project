function add(a, b){
    return +a + +b;
}

function subtract(a, b){
    return +a - +b;
}

function multiply(a , b){
    return +a * +b;
}

function divide(a , b){
    return +a / +b;
}

let firstNum;
let operator;
let secondNum;

function operate(firstNum, operator, secondNum){
    switch (operator){
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
        default:
            throw new Error("Invalid operator");
    }
}
