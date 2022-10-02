// field leave comment
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const nameField = document.querySelector(".name");
const nameInput = document.querySelector("#name");
const textarea = document.querySelector("#comment");
const sendBtn = document.querySelector("#send");

// field chat
const messages = document.querySelector(".messages");

// check radio, show or hidden name field

let checkAuthor = (event) => {
  if (event.target.value === "no") {
    nameField.classList.add("hidden");
  } else if (event.target.value === "yes") {
    nameField.classList.remove("hidden");
  }
};

yes.checked = true;
yes.addEventListener("change", checkAuthor);
no.addEventListener("change", checkAuthor);

// check name field

let checkName = () => {
  let name = nameInput.value;
  name = name.replace(/\s\s+/g, " ");
  name = name.trim().split(" ");
  let nameFormatted = [];
  name.forEach((element) => {
    element = element[0].toUpperCase() + element.slice(1).toLowerCase();
    nameFormatted.push(element);
  });
  return nameFormatted.join(" ");
};

nameInput.addEventListener("change", () => {
  nameInput.value = checkName();
});

// check textarea

let spam = [/viagra/gi, /xxx/gi];

let checkMessage = (str) => {
  for (let i = 0; i < spam.length; i++) {
    if (spam[i].test(str)) {
      str = str.replace(spam[i], "***");
    }
  }
  return str;
};

// send message

let createMessage = () => {
  let message = document.createElement("div");
  message.className = "message";
  messages.prepend(message);
  // username
  let messageUserName = document.createElement("p");
  messageUserName.className = "message_name";
  if (nameInput.value !== "") {
    messageUserName.innerHTML = checkName();
  } else {
    messageUserName.innerHTML = "Username";
  }
  message.append(messageUserName);

  // time
  let messageTime = document.createElement("p");
  messageTime.className = "message_time";
  message.append(messageTime);

  sendTime = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  messageTime.innerHTML = `${sendTime.toLocaleDateString("en-GB", options)}`;

  // text
  let messageText = document.createElement("p");
  messageText.className = "message_text";
  messageText.innerHTML = checkMessage(textarea.value);
  message.append(messageText);

  // remove over 5 elements
  if (messages.childElementCount > 5) {
    messages.removeChild(messages.lastChild);
  }
};

sendBtn.addEventListener("click", () => {
  createMessage();
  textarea.value = "";
});

// array

const elemArray = document.querySelector("#array");
const elemMin = document.querySelector("#min");
const elemMax = document.querySelector("#max");
const elemAverage = document.querySelector("#average");
const elemSum = document.querySelector("#sum");
const elemMultiply = document.querySelector("#multiply");
const randomBtn = document.querySelector("#random");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function createArray(min, max, length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(getRandomIntInclusive(min, max));
  }
  return array;
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function getSum(arr) {
  let sum = 0;
  for (let a of arr) {
    sum += a;
  }
  return sum;
}

function getAverage(arr) {
  let average = getSum(arr) / arr.length;
  return average;
}

function getProduct(arr) {
  let prod = 1;
  for (let a of arr) {
    prod *= a;
  }
  return prod;
}

randomBtn.addEventListener("click", () => {
  let arr = createArray(-10, 10, 10);
  elemArray.textContent = `Generated array: ${arr.join(", ")} `;
  elemMin.textContent = `Minimum number: ${getMin(arr)}`;
  elemMax.textContent = `Maximum number: ${getMax(arr)}`;
  elemAverage.textContent = `Average: ${getAverage(arr)}`;
  elemSum.textContent = `Sum of array elements: ${getSum(arr)}`;
  elemMultiply.textContent = `Product of array elements: ${getProduct(arr)}`;
});

// timer
