"use strict";

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

console.log(inputs);
console.log(firstName, lastName, phoneNumber, email, password);

function checkInputs(event) {
  inputs.forEach((input) => {
    if (input.value === "") {
      input.nextElementSibling.textContent = "❗ Required field";
    } else {
      input.nextElementSibling.textContent = "";
    }
  });
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

firstName.addEventListener("input", checkName);
lastName.addEventListener("input", checkName);
phoneNumber.addEventListener("input", checkPhone);
phoneNumber.addEventListener("change", checkPhoneLength);
email.addEventListener("change", checkEmail);
password.addEventListener("change", checkPassword);

btnSubmit.addEventListener("click", checkInputs);
