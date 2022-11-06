"use strict";

const header = document.querySelector(".header");
const form = document.querySelector(".main__form");
const inputs = document.querySelectorAll(".form__input");
const errorMessages = document.querySelectorAll(".error-message");
const btnSubmit = document.querySelector(".form__submit");
const btnSignUp = document.querySelector(".sign-up");
const btnSignIn = document.querySelector(".sign-in");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const password = document.getElementById("password");

let inputsArray = [];

function toArray(notArray, array) {
  for (let i = 0; i < notArray.length; i++) {
    array.push(notArray[i]);
  }
}

toArray(inputs, inputsArray);

function registration(event) {
  if (
    inputsArray.every((input) => input.nextElementSibling.textContent === "") &&
    inputsArray.every((input) => input.value !== "") &&
    passwordIsCorrect
  ) {
    let user = {
      userFirstName: firstName.value,
      userLastName: lastName.value,
      userPhone: phoneNumber.value,
      userEmail: email.value,
      userPassword: password.value,
    };
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((user) => console.log(user.json));
    confirm();
  } else {
    checkInputs();
  }
}

function checkInputs() {
  inputsArray.forEach((input) => {
    if (input.value === "") {
      input.nextElementSibling.textContent = "❗ Required field";
    } else if (input.nextElementSibling.textContent !== "") {
      input.nextElementSibling.textContent += "";
    } else {
      input.nextElementSibling.textContent = "";
    }
  });
}

function confirm() {
  let confirm = document.createElement("p");
  confirm.className = "confirm";
  confirm.innerHTML =
    "You have successfully registered.<br /> A confirmation link has been sent to your email 💌";

  form.replaceWith(confirm);
}

function checkName(event) {
  let result = event.target.value;
  if (result.length > 0) {
    result = event.target.value;
    result = result.trim();
    result = result[0].toUpperCase() + result.slice(1).toLowerCase();
    result = result.replace(/[^a-zA-ZА-Яа-яЁё]/gi, "");
    event.target.value = result;
  }
  event.target.nextElementSibling.textContent = "";
  return result;
}

function checkPhone(event) {
  let result = event.target.value;
  result = result.trim();
  result = result.replace(/[^+\d ]/g, "");

  event.target.value = result;

  if (event.target.value.length > 0) {
    if (event.target.value[0] !== "+") {
      switch (event.target.value[0]) {
        case "7":
          event.target.value = "+7 " + event.target.value.slice(1, 4);
          break;
        case "8":
          event.target.value = "+7 " + event.target.value.slice(1, 4);
          break;
        case "9":
          event.target.value = "+7 " + event.target.value; // + event.target.value.slice;
          break;
        default:
          event.target.value = "+" + event.target.value;
      }
    } else if (event.target.value[0] === "+") {
      return (event.target.value = "+" + event.target.value.slice(1)); // для нероссийских номеров начинать с +
    }
  }
}

function checkPhoneLength(event) {
  if (event.target.value.length < 12) {
    event.target.nextElementSibling.textContent = "❗ The number is too short";
  } else if (event.target.value.length > 16) {
    event.target.nextElementSibling.textContent = "❗ The number is too long";
  } else {
    event.target.nextElementSibling.textContent = "";
  }
}

function checkEmail(event) {
  let result = event.target.value;
  if (result.includes("@")) {
    event.target.nextElementSibling.textContent = "";
    if (result.match(/^(.+)@(.+)\.(.+)$/)) {
      event.target.nextElementSibling.textContent = "";
    } else {
      event.target.nextElementSibling.textContent = "❗ Please, correct email";
    }
  } else {
    event.target.nextElementSibling.textContent = "❗ Email must contain @";
  }
}

let passwordELements = document.querySelectorAll(
  '[aria-describedby="password"]'
);
const length = document.querySelector("#length");
const capital = document.querySelector("#capital");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

let passwordIsCorrect = false;

function checkPassword(event) {
  let result = event.target.value;

  if (result.length >= 1) {
    event.target.nextElementSibling.textContent = "";
  } else {
    event.target.nextElementSibling.textContent = "❗ Required field";
  }
  if (result.length > 7) {
    length.firstChild.textContent = " ✔ ";
  } else {
    length.firstChild.textContent = " ❗ ";
  }
  if (result.match(/[a-z]/g) !== null) {
    lowercase.firstChild.textContent = " ✔ ";
  } else {
    lowercase.firstChild.textContent = " ❗ ";
  }
  if (result.match(/[A-Z]/g) !== null) {
    capital.firstChild.textContent = " ✔ ";
  } else {
    capital.firstChild.textContent = " ❗ ";
  }
  if (result.match(/\d/g) !== null) {
    numbers.firstChild.textContent = " ✔ ";
  } else {
    numbers.firstChild.textContent = " ❗ ";
  }
  if (result.match(/[-#!$@%^&*_+~=:;?\.,]/g) !== null) {
    symbols.firstChild.textContent = " ✔ ";
  } else {
    symbols.firstChild.textContent = " ❗ ";
  }

  if (
    result.length > 7 &&
    result.match(/[a-z]/g) !== null &&
    result.match(/[A-Z]/g) !== null &&
    result.match(/\d/g) !== null &&
    result.match(/[-#!$@%^&*_+~=:;?\.,]/g) !== null
  ) {
    passwordIsCorrect = true;
  } else {
    passwordIsCorrect = false;
  }
}

function changeForm(event) {
  switch (event.target.value) {
    case "sign-in":
      btnSignUp.classList.remove("active");
      btnSignIn.classList.add("active");
      firstName.parentElement.classList.add("hidden");
      lastName.parentElement.classList.add("hidden");
      phoneNumber.parentElement.classList.add("hidden");
      email.removeEventListener("change", checkEmail);
      password.removeEventListener("input", checkPassword);
      btnSubmit.removeEventListener("click", registration);
      btnSubmit.textContent = "Sign In";
      document.querySelector(".via").textContent = "or Sign In via";
      document
        .querySelector(".terms-and-conditions")
        .parentElement.classList.add("hidden");
      inputsArray.forEach((input) => {
        input.value = "";
        input.nextElementSibling.textContent = "";
      });
      for (let i = 1; i < passwordELements.length; i++) {
        passwordELements[i].classList.add("hidden");
      }
      break;
    case "sign-up":
      btnSignUp.classList.add("active");
      btnSignIn.classList.remove("active");
      firstName.parentElement.classList.remove("hidden");
      lastName.parentElement.classList.remove("hidden");
      phoneNumber.parentElement.classList.remove("hidden");
      email.addEventListener("change", checkEmail);
      password.addEventListener("input", checkPassword);
      btnSubmit.addEventListener("click", registration);
      btnSubmit.textContent = "Sign Up";
      document.querySelector(".via").textContent = "or Sign Up via";
      document
        .querySelector(".terms-and-conditions")
        .parentElement.classList.remove("hidden");
      inputsArray.forEach((input) => {
        input.value = "";
        input.nextElementSibling.textContent = "";
      });
      for (let i = 1; i < passwordELements.length; i++) {
        passwordELements[i].classList.remove("hidden");
      }
      break;
  }
}

firstName.addEventListener("input", checkName);
lastName.addEventListener("input", checkName);
phoneNumber.addEventListener("input", checkPhone);
phoneNumber.addEventListener("change", checkPhoneLength);
email.addEventListener("input", checkEmail);
password.addEventListener("input", checkPassword);

btnSubmit.addEventListener("click", registration);

btnSignIn.addEventListener("click", changeForm);
btnSignUp.addEventListener("click", changeForm);

// add color theme

const theme = document.querySelector(".theme");

function changeTheme() {
  switch (theme.value) {
    case "dark":
      document.querySelector("body").classList.add("dark");
      document.querySelector(".wrapper").classList.add("dark");
      document
        .querySelectorAll(".button")
        .forEach((elem) => elem.classList.add("dark"));
      document.querySelector(".content").classList.add("dark");
      inputsArray.forEach((input) => {
        input.classList.add("dark");
        input.previousElementSibling.classList.add("dark");
      });
      btnSubmit.classList.add("dark");
      errorMessages.forEach((error) => error.classList.add("dark"));
      document
        .querySelectorAll(".social__title")
        .forEach((elem) => elem.classList.add("dark"));
      break;
    case "light":
      document.querySelector("body").classList.remove("dark");
      document.querySelector(".wrapper").classList.remove("dark");
      document
        .querySelectorAll(".button")
        .forEach((elem) => elem.classList.remove("dark"));
      document.querySelector(".content").classList.remove("dark");
      inputsArray.forEach((input) => {
        input.classList.remove("dark");
        input.previousElementSibling.classList.remove("dark");
      });
      btnSubmit.classList.remove("dark");
      errorMessages.forEach((error) => error.classList.remove("dark"));
      document
        .querySelectorAll(".social__title")
        .forEach((elem) => elem.classList.remove("dark"));
  }
}

theme.addEventListener("change", changeTheme);
