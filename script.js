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
let firstArr = [];
let secondArr = [];
let isFirst = true;
let numCount = 0;
let isEqualPressed = false;


function operate(firstNum, operator, secondNum){
    switch (operator){
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "×":
            return multiply(firstNum, secondNum);
        case "÷":
            return divide(firstNum, secondNum);
        default:
            throw new Error("Invalid operator");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const numButtons = document.querySelectorAll(".btn.num");
    const opButtons = document.querySelectorAll(".btn.op");
    const clearButton = document.querySelector(".clear");
    const equalButton = document.querySelector(".equal");

    numButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (isEqualPressed) {
                display.textContent = ""; // Clear display after pressing equal
                isEqualPressed = false;   // Reset isEqualPressed
            }
            const buttonText = this.textContent;
            display.textContent += buttonText;

            if (numCount >= 9) {
                numButtons.forEach(btn => {
                    btn.disabled = true;
                });
            }

          
    
            if (isFirst === true){
                firstArr = Array.from(display.textContent);
                numCount += 1;
            }
            else {
                secondArr = Array.from(display.textContent);
                numCount += 1;
            }
            console.log(firstArr);
            console.log(operator);
            console.log(secondArr);
        });
    });

    opButtons.forEach(button => {
        button.addEventListener("click", function() {
            isFirst = false;
            numCount = 0;
            operator = this.textContent;
            display.textContent = "";
            numButtons.forEach(btn => {
                btn.disabled = false;
            });
        });
    });

    clearButton.addEventListener("click", function(){
        firstArr = [];
        secondArr = [];
        isFirst = true;
        numCount = 0;
        display.textContent = "";
        console.clear();
    });

    equalButton.addEventListener("click", function(){
        firstNum = parseFloat(firstArr.join(""));
        secondNum =  parseFloat(secondArr.join(""));
        
        const result = operate(firstNum, operator, secondNum);

        // Round the result to 10 decimal places
        const roundedResult = Number(result.toFixed(10));
    
        // Convert to string and limit to 10 characters
        let resultString = roundedResult.toString();
        if (resultString.length > 10) {
            resultString = resultString.slice(0, 10);
        }
    
        // Update display
        display.textContent = resultString;


        firstArr = [];
        secondArr = [];
        isFirst = true;
        numCount = 0;
        isEqualPressed = true;
        console.clear();
    });

});