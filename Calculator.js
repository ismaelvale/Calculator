function add(a,b) {
    return a+b;
};

console.log(add(2,6));

function subtract(a,b) {
    return a - b;
};

console.log(subtract(6,5));

function multiply(a,b) {
    return a*b;
};

console.log(multiply(8,5));

function divide(a,b) {
    return a/b;
};

console.log(divide(8,4));

function operate(str,a,b) {
    switch(str) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;
    }
};

console.log(operate("+",3,5));

const one = document.getElementById("1");
one.addEventListener("click", displayOne => {
    document.getElementById("interface").textContent += "1";
});

const two = document.getElementById("2");
two.addEventListener("click", displayTwo => {
    document.getElementById("interface").textContent += "2";
});
const three = document.getElementById("3");
three.addEventListener("click", displayThree => {
    document.getElementById("interface").textContent += "3";
});

const four = document.getElementById("4");
four.addEventListener("click", displayFour => {
    document.getElementById("interface").textContent += "4";
});

const five = document.getElementById("5");
five.addEventListener("click", displayFive => {
    document.getElementById("interface").textContent += "5";
});
const six = document.getElementById("6");
six.addEventListener("click", displaySix => {
    document.getElementById("interface").textContent += "6";
});

const seven = document.getElementById("7");
seven.addEventListener("click", displaySeven => {
    document.getElementById("interface").textContent += "7";
});

const eight = document.getElementById("8");
eight.addEventListener("click", displayEight => {
    document.getElementById("interface").textContent += "8";
});
const nine = document.getElementById("9");
nine.addEventListener("click", displayNine => {
    document.getElementById("interface").textContent += "9";
});

const zero = document.getElementById("0");
zero.addEventListener("click", displayZero => {
    document.getElementById("interface").textContent += "0";
});

const division = document.getElementById("divide");
division.addEventListener("click", displayDivision => {
    document.getElementById("interface").textContent += "/";
});
const multiplication = document.getElementById("multiply");
multiplication.addEventListener("click", displayMultiplication => {
    document.getElementById("interface").textContent += "*";
});

const subtraction = document.getElementById("subtract");
subtraction.addEventListener("click", displaySubtraction => {
    document.getElementById("interface").textContent += "-";
});
const addition = document.getElementById("add");
addition.addEventListener("click", displayAddition => {
    document.getElementById("interface").textContent += "+";
});

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", displayDecimal => {
    document.getElementById("interface").textContent += ".";
});
const equality = document.getElementById("equals");
equality.addEventListener("click", displayEquality => {
    document.getElementById("interface").textContent += "=";
});

const cleared = document.getElementById("clear");
cleared.addEventListener("click", clear => {
    document.getElementById("interface").textContent = "";
});
const backspace = document.getElementById("delete");
backspace.addEventListener("click", backspace => {
    let interface = document.getElementById("interface");
    interface.innerText = interface.innerText.slice(0,-1);
});

