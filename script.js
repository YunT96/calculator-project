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
    switch (b){
        case 0:
            return "Bruh";
        default:
            return +a / +b;
    }
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

            if (numCount >= 10) {
                return; //Escape to limit digits to 10
            }

            if (isEqualPressed) {
                display.textContent = ""; // Clear display after pressing equal
                isEqualPressed = false;   // Reset isEqualPressed
            }
            const buttonText = this.textContent;
            display.textContent += buttonText;

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
            isEqualPressed = true;
        });
    });

    clearButton.addEventListener("click", function(){
        firstArr = [];
        secondArr = [];
        isFirst = true;
        numCount = 0;
        display.textContent = "";
        //console.clear();
    });

    equalButton.addEventListener("click", function(){

        if (firstArr.length === 0 || secondArr.length === 0) {
            return; // Exit the function if either array is empty
        }

        firstNum = parseFloat(firstArr.join(""));
        secondNum =  parseFloat(secondArr.join(""));
        
        const result = operate(firstNum, operator, secondNum);
        
        if (result === "Bruh") {
            display.textContent = result;
            firstArr = ["WTF"];
        }
        else {
            // Round the result to 10 decimal places
            const roundedResult = Number(result.toFixed(10));
    
            // Convert to string and limit to 10 characters
            let resultString = roundedResult.toString();
            if (resultString.length > 10) {
                resultString = resultString.slice(0, 10);
            }
            display.textContent = resultString;
            firstArr = Array.from(resultString);
        }
        
        secondArr = [];
        isFirst = true;
        numCount = 0;
        isEqualPressed = true;
        //console.clear();
    });

});