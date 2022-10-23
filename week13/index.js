function sayGreet() {
  let userName = prompt("What's your name?", "Username");
  if (userName) alert(`Hello, ${userName}! Let's start!`);
}

function add() {
  let num1 = prompt("What's the first number?", "First Number");
  if (num1 != Number(num1)) {
    alert("Error: I can't understand this number :(");
    return;
  }
  let num2 = prompt("What's the second number?", "Second Number");
  if (num2 != Number(num2)) {
    alert("Error: I can't understand this number :(");
    return;
  }
  alert(`Result is ${Number(num1) + Number(num2)}`);
}

function subtract() {
  let num1 = prompt("What's the first number?", "First Number");
  if (num1 != Number(num1)) {
    alert("Error: I can't understand this number :(");
    return;
  }
  let num2 = prompt("What's the second number?", "Second Number");
  if (num2 != Number(num2)) {
    alert("Error: I can't understand this number :(");
    return;
  }
  alert(`Result is ${Number(num1) - Number(num2)}`);
}

function multiply() {
  let num1 = prompt("What's the first number?", "First Number");
  if (num1 != Number(num1)) {
    alert("Error: I can't understand this number :(");
    return;
  }
  let num2 = prompt("What's the second number?", "Second Number");
  if (num2 != Number(num2)) {
    alert("Error: I can't understand this number :(");
    return;
  }
  alert(`Result is ${Number(num1) * Number(num2)}`);
}

function divide() {
  let num1 = prompt("What's the first number?", "First Number");
  if (num1 != Number(num1)) {
    alert("Error: I can't understand this number :(");
    return;
  }
  let num2 = prompt("What's the second number?", "Second Number");
  if (num2 != Number(num2)) {
    alert("Error: I can't understand this number :(");
    return;
  }
  alert(`Result is ${Number(num1) / Number(num2)}`);
}

const NUMBERFROMINPUT1 = document.querySelector("#first-number");
const NUMBERFROMINPUT2 = document.querySelector("#second-number");
const RESULT = document.querySelector("#result");

// function addSimple() {
//   let result = Number(NUMBERFROMINPUT1.value) + Number(NUMBERFROMINPUT2.value);
//   RESULT.textContent = result + " ✨";
// }

// function subtractSimple() {
//   let result = Number(NUMBERFROMINPUT1.value) - Number(NUMBERFROMINPUT2.value);
//   RESULT.textContent = result + " ✨";
// }

// function multiplySimple() {
//   let result = Number(NUMBERFROMINPUT1.value) * Number(NUMBERFROMINPUT2.value);
//   RESULT.textContent = result + " ✨";
// }

// function divideSimple() {
//   let result = Number(NUMBERFROMINPUT1.value) / Number(NUMBERFROMINPUT2.value);
//   RESULT.textContent = result + " ✨";
// }

const btnAdd = document.querySelector(".btn-add");
const btnSubtract = document.querySelector(".btn-subtract");
const btnMultiply = document.querySelector(".btn-multiply");
const btnDivide = document.querySelector(".btn-divide");
const btnReset = document.querySelector(".btn-reset");

class Calculator {
  static addSimple(number1, number2) {
    return number1 + number2;
  }

  static subtractSimple(number1, number2) {
    return number1 - number2;
  }

  static multiplySimple(number1, number2) {
    return number1 * number2;
  }

  static divideSimple(number1, number2) {
    return number1 / number2;
  }
}

const resetCalc = function () {
  NUMBERFROMINPUT1.value = "";
  NUMBERFROMINPUT2.value = "";
  RESULT.textContent = "";
};

function calculate(event) {
  let n1 = Number(NUMBERFROMINPUT1.value);
  let n2 = Number(NUMBERFROMINPUT2.value);

  switch (event.target.className) {
    case "btn-add":
      RESULT.textContent = Calculator.addSimple(n1, n2) + " ✨";
      break;
    case "btn-subtract":
      RESULT.textContent = Calculator.subtractSimple(n1, n2) + " ✨";
      break;
    case "btn-multiply":
      RESULT.textContent = Calculator.multiplySimple(n1, n2) + " ✨";
      break;
    case "btn-divide":
      RESULT.textContent = Calculator.divideSimple(n1, n2) + " ✨";
      break;
  }
}

btnAdd.addEventListener("click", calculate);
btnSubtract.addEventListener("click", calculate);
btnMultiply.addEventListener("click", calculate);
btnDivide.addEventListener("click", calculate);
btnReset.addEventListener("click", resetCalc);
