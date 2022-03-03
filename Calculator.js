let a;
let b;
let op;
let interface = document.getElementById("interface");
let signs = /[^0-9]/;
let run = document.getElementById("run");

//Arithmetic Functions

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

function operate(op,a,b) {
    switch(op) {
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

//Number Buttons Event Listeners

window.addEventListener("keydown", function(e) {
    switch (`${e.key}`) {
        case "0":
            interface.textContent += 0;
            break;
        case "1":
            interface.textContent += 1;
            break;
        case "2":
            interface.textContent += 2;
            break;
        case "3":
            interface.textContent += 3;
            break;
        case "4":
            interface.textContent += 4;
            break;
        case "5":
            interface.textContent += 5;
            break;
        case "6":
            interface.textContent += 6;
            break;
        case "7":
            interface.textContent += 7;
            break;
        case "8":
            interface.textContent += 8;
            break;
        case "9":
            interface.textContent += 9;
            break;
        case "/":
            displayDivision();
            break;
        case "-":
            displaySubtraction();
            break;
        case "+":
            displayAddition();
            break;
        case "*":
            displayMultiplication();
            break;
        case "=":
            displayEquality();
            break;
        case "Backspace":
            backspace();
            break;
        case "Enter":
            displayEquality();
            break;
    }
});

const one = document.getElementById("1");
one.addEventListener("click", displayOne => {
    interface.textContent += "1";
});
const two = document.getElementById("2");
two.addEventListener("click", displayTwo => {
    interface.textContent += "2";
});
const three = document.getElementById("3");
three.addEventListener("click", displayThree => {
    interface.textContent += "3";
});
const four = document.getElementById("4");
four.addEventListener("click", displayFour => {
    interface.textContent += "4";
});
const five = document.getElementById("5");
five.addEventListener("click", displayFive => {
    interface.textContent += "5";
});
const six = document.getElementById("6");
six.addEventListener("click", displaySix => {
    interface.textContent += "6";
});
const seven = document.getElementById("7");
seven.addEventListener("click", displaySeven => {
    interface.textContent += "7";
});
const eight = document.getElementById("8");
eight.addEventListener("click", displayEight => {
    interface.textContent += "8";
});
const nine = document.getElementById("9");
nine.addEventListener("click", displayNine => {
    interface.textContent += "9";
});
const zero = document.getElementById("0");
zero.addEventListener("click", displayZero => {
    interface.textContent += "0";
});
const decimal = document.getElementById("decimal");
decimal.addEventListener("click", displayDecimal => {
    let doubleDecimal = /[\.]/;
    if (doubleDecimal.test(interface.innerText) === true) {
        null;
    } else {
         interface.textContent += ".";
    }
});

//Operator Buttons Event Listeners

const division = document.getElementById("divide");
division.addEventListener("click", displayDivision);

function displayDivision() {
    if(signs.test(interface.innerText) === true){
        op = interface.innerText.slice(0,1);
        b = parseInt(interface.innerText.slice(1,));
        run.textContent = parseFloat(operate(op, a, b).toFixed(3)); 
        a = parseFloat(operate(op, a, b).toFixed(3));
        interface.textContent = "/";
    } else {
        a = parseInt(interface.innerText);
        interface.textContent = "/";   
    }
};

const multiplication = document.getElementById("multiply");
multiplication.addEventListener("click", displayMultiplication);

function displayMultiplication() {
    if(signs.test(interface.innerText) === true){
        op = interface.innerText.slice(0,1);
        b = parseInt(interface.innerText.slice(1,));
        run.textContent = parseFloat(operate(op, a, b).toFixed(3)); 
        a = parseFloat(operate(op, a, b).toFixed(3));
        interface.textContent = "*";
    } else {
        a = parseInt(interface.innerText);
        interface.textContent = "*";
    }
};
const subtraction = document.getElementById("subtract");
subtraction.addEventListener("click", displaySubtraction);

function displaySubtraction() {
    if(signs.test(interface.innerText) === true){
        op = interface.innerText.slice(0,1);
        b = parseInt(interface.innerText.slice(1,));
        run.textContent = parseFloat(operate(op, a, b).toFixed(3));
        a = parseFloat(operate(op, a, b).toFixed(3));
        interface.textContent = "-";
    } else {
        a = parseInt(interface.innerText);
        interface.textContent = "-";
    }
};
const addition = document.getElementById("add");
addition.addEventListener("click", displayAddition) 

function displayAddition() {
    if(signs.test(interface.innerText) === true){
        op = interface.innerText.slice(0,1);
        b = parseInt(interface.innerText.slice(1,));
        run.textContent = parseFloat(operate(op, a, b).toFixed(3));
        a = parseFloat(operate(op, a, b).toFixed(3));
        interface.textContent = "+";
    } else {
        a = parseInt(interface.innerText);
        interface.textContent = "+";
    }
};


//Next Step Buttons Event Listeners and Functions

const equality = document.getElementById("equals");
equality.addEventListener("click", displayEquality);

function displayEquality() {
    let op = interface.innerText.slice(0,1);
    let b = parseInt(interface.innerText.slice(1,));
    interface.textContent = "= ";

    if (b != 0) {
        interface.textContent += parseFloat(operate(op, a, b).toFixed(3));
        run.textContent = parseFloat(operate(op, a, b).toFixed(3));
    } else {
        interface.innerText = "Think maths, you can't divide by 0.";
        run.textContent = "";
    }
};

const cleared = document.getElementById("clear");
cleared.addEventListener("click", clear); 

function clear() {
    interface.textContent = "";
    run.textContent = "";
};

const remove = document.getElementById("delete");
remove.addEventListener("click", backspace);

function backspace() {
    if(interface.innerText != "") {
        interface.innerText = interface.innerText.slice(0,-1);
    } else {
        clear();
    }
};

