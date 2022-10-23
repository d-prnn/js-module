const submit = document.querySelector("button[type=button]");

// owner
const userName = document.querySelector("#user-name");
const userSurname = document.querySelector("#surname");
const userPhone = document.querySelector("#phone");
const userEmail = document.querySelector("#email");

// cat
const petName = document.querySelector("#name-pet");
const petSex = document.querySelectorAll("[name='gender-pet']");
const petBreed = document.querySelector("[name='breed']");
const petFood = document.querySelectorAll("[name='food']");
const petComment = document.querySelector("[name='comment']");
const petPhoto = document.querySelector("[name='photo-pet']");

class Owner {
  constructor(name, surname, phone, email) {
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.email = email;
  }
}

class Cat {
  constructor(name, sex, breed, food, comment, photo, owner) {
    this.name = name;
    this.sex = sex;
    this.breed = breed;
    this.food = food;
    this.comment = comment;
    this.photo = photo;
    this.owner = owner;
  }
}

function checkGroup(collection) {
  let arr = [];
  collection.forEach((inp) => {
    if (inp.checked) {
      arr.push(inp.value);
    }
  });
  if (arr.length < 2) {
    arr = arr.toString();
  }
  return arr;
}

function savePet() {
  const pet = new Cat(
    petName.value,
    checkGroup(petSex),
    petBreed.value,
    checkGroup(petFood),
    petComment.value,
    petPhoto.value,
    saveOwner()
  );
  console.log(pet);
}

function saveOwner() {
  const person = new Owner(
    userName.value,
    userSurname.value,
    userPhone.value,
    userEmail.value
  );
  return person;
}

submit.addEventListener("click", saveOwner);
submit.addEventListener("click", savePet);
