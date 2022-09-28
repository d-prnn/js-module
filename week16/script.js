const input = document.querySelector("#array");
const error = document.querySelector("#error");
const arrayNumbers = document.querySelector("#arrayNumbers");
const result = document.querySelector("#result");
let resultBtn = document.querySelector("#result-btn");
const resetBtn = document.querySelector("#reset");

let arrayN = [];

input.addEventListener("change", () => {
  error.textContent = "";
  if (!/[^0-9\.]/g.test(input.value) && input.value !== "") {
    arrayN.push(Number(input.value));
    input.value = "";
  } else {
    error.textContent = "❗ Введите цифры";
    input.value = "";
  }
});

resultBtn.addEventListener("click", () => {
  arrayN.sort((a, b) => {
    return a - b;
  });
  arrayNumbers.innerHTML = `Отсортировано по возрастанию: ${arrayN.join(", ")}`;
  let sumOfArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  };

  result.textContent = `Сумма всех элементов массива: ${sumOfArray(arrayN)}`;
});

resetBtn.addEventListener("click", () => {
  arrayN = [];
  arrayNumbers.textContent = "";
  result.textContent = "";
});

// Задачки

// Task 1

const arrayOfTask1 = ["js", "css", "html"];
const task1 = document.querySelector(".task1");

task1.textContent = `Задача 1. Первый элемент массива [${arrayOfTask1.join(
  ", "
)}] это ${arrayOfTask1[0]}.`;

// Task 2

const arrayOfTask2 = [0, 1, false, 2, undefined, "", 3, null];
const task2 = document.querySelector(".task2");

let arrayStr = "";
for (let i = 0; i < arrayOfTask2.length; i++) {
  if (i == arrayOfTask2.length - 1) {
    arrayStr += arrayOfTask2[i];
  } else {
    arrayStr += arrayOfTask2[i] + ", ";
  }
}

let filterArray = (elem) => {
  if (elem !== false) {
    return elem;
  }
};

task2.textContent = `Задача 2. После фильтрации массива [${arrayStr}] остались эти элементы [${arrayOfTask2
  .filter(filterArray)
  .join(", ")}];`;

// Task 3

const arrayOfTask3 = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];
const task3 = document.querySelector(".task3");

let findLongArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
      return i;
    }
  }
};

task3.textContent = `Задача 3. В массиве [${arrayOfTask3.join(
  ", "
)}] находится массив, длина которого больше 3, под индексом ${findLongArray(
  arrayOfTask3
)}`;
