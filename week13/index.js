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

function addSimple() {
  let result = Number(NUMBERFROMINPUT1.value) + Number(NUMBERFROMINPUT2.value);
  RESULT.textContent = result + " ✨";
}

function subtractSimple() {
  let result = Number(NUMBERFROMINPUT1.value) - Number(NUMBERFROMINPUT2.value);
  RESULT.textContent = result + " ✨";
}

function multiplySimple() {
  let result = Number(NUMBERFROMINPUT1.value) * Number(NUMBERFROMINPUT2.value);
  RESULT.textContent = result + " ✨";
}

function divideSimple() {
  let result = Number(NUMBERFROMINPUT1.value) / Number(NUMBERFROMINPUT2.value);
  RESULT.textContent = result + " ✨";
}

function reset() {
  NUMBERFROMINPUT1.value = "";
  NUMBERFROMINPUT2.value = "";
  RESULT.textContent = "";
}
