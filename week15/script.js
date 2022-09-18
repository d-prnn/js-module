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
    inputsArray.every((input) => input.value !== "")
  ) {
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
  console.log(event.target.value.length);
}

function checkPhoneLength(event) {
  if (event.target.value.length < 12) {
    event.target.nextElementSibling.textContent = "❗ The number is too short";
  } else if (event.target.value.length > 16) {
    event.target.nextElementSibling.textContent = "❗ The number is too long";
  } else {
    event.target.nextElementSibling.textContent = "";
  }
  console.log(event.target.value.length);
}

function checkEmail(event) {
  if (event.target.value.includes("@")) {
    console.log(event.target.value.includes("@"));
    event.target.nextElementSibling.textContent = "";
    if (
      event.target.value.endsWith(".com") ||
      event.target.value.endsWith(".ru")
    ) {
      event.target.nextElementSibling.textContent = "";
    } else {
      event.target.nextElementSibling.textContent += "❗ Invalid domain";
    }
  } else {
    event.target.nextElementSibling.textContent = "❗ Email must contain @";
  }
}

function checkPassword(event) {
  let result = event.target.value;

  if (result.length > 7) {
    event.target.nextElementSibling.textContent = "";

    if (result.match(/[a-z]/g) !== null) {
      event.target.nextElementSibling.textContent = "";

      if (result.match(/[A-Z]/g) !== null) {
        event.target.nextElementSibling.textContent = "";

        if (result.match(/\d/g) !== null) {
          event.target.nextElementSibling.textContent = "";

          if (result.match(/[-#!$@%^&*_+~=:;?\.,]/g) !== null) {
            event.target.nextElementSibling.textContent = "";
          } else {
            event.target.nextElementSibling.textContent =
              "❗ Password must contain at least one symbol [-#!$@%^&*_+~=:;?.,]";
          }
        } else {
          event.target.nextElementSibling.textContent =
            "❗ Password must contain at least one number";
        }
      } else {
        event.target.nextElementSibling.textContent =
          "❗ Password must contain at least one capital";
      }
    } else {
      event.target.nextElementSibling.textContent =
        "❗ Password must contain at least one lowercase letter";
    }
  } else {
    event.target.nextElementSibling.textContent = "❗ Password is too short";
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
      password.removeEventListener("change", checkPassword);
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
      break;
    case "sign-up":
      btnSignUp.classList.add("active");
      btnSignIn.classList.remove("active");
      firstName.parentElement.classList.remove("hidden");
      lastName.parentElement.classList.remove("hidden");
      phoneNumber.parentElement.classList.remove("hidden");
      email.addEventListener("change", checkEmail);
      password.addEventListener("change", checkPassword);
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
      break;
  }
}

firstName.addEventListener("input", checkName);
lastName.addEventListener("input", checkName);
phoneNumber.addEventListener("input", checkPhone);
phoneNumber.addEventListener("change", checkPhoneLength);
email.addEventListener("change", checkEmail);
password.addEventListener("change", checkPassword);

btnSubmit.addEventListener("click", registration);

btnSignIn.addEventListener("click", changeForm);
btnSignUp.addEventListener("click", changeForm);

// add color theme

const theme = document.querySelector(".theme");
console.log(theme.value);

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
