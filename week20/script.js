"use strict";

const json = `
[
    {
      "name": "Бэтмен",
      "world": "DC Comics",
      "ego": "Брюс Уэйн",
      "work": ["борец с преступностью", "филантроп", "миллиардер"],
      "friends": ["Робин", "Бэтгерл"],
      "superpowers": [
        "интеллект",
        "обширные познания",
        "знания боевых искусств",
        "ловкость"
      ],
      "url": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
    },
    {
      "name": "Супермен",
      "world": "DC Comics",
      "ego": "Кларк Кент",
      "work": ["борец за справедливость"],
      "friends": ["собака Крипто"],
      "superpowers": [
        "непробиваемость",
        "суперсила",
        "полет",
        "самоисцеление",
        "суперзрение",
        "суперслух",
        "классный костюм"
      ],
      "url": "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
    },
    {
      "name": "Железный человек",
      "world": "Marvel Comics",
      "ego": "Тони Старк",
      "work": ["гений", "миллиардер", "плейбой", "филантроп"],
      "friends": ["Мстители"],
      "superpowers": [
        "высокий уровень интеллекта",
        "широкие познания науки и техники",
        "связь со всемирной паутиной",
        "бронекостюмы"
      ],
      "url": "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
    },
    {
      "name": "Спайдер-мен/Человек-паук",
      "world": "Marvel Comics",
      "ego": "Питер Паркер",
      "work": ["борец за справедливость", "студент", "фотограф"],
      "friends": ["Мстители", "Фантастическая четверка", "Люди Икс"],
      "superpowers": [
        "сверхчеловеческие рефлексы",
        "«паучье чутье»",
        "способность прилепляться к твердым поверхностям",
        "производство паутины"
      ],
      "url": "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"
    },
    {
      "name": "Капитан Америка",
      "world": "Marvel Comics",
      "ego": "Стивен Роджерс",
      "work": ["супер-солдат"],
      "friends": ["Мстители"],
      "superpowers": [
        "сила",
        "выносливость",
        "бессмертие",
        "быстрая регенерация",
        " мастерство скрытности и боя"
      ],
      "url": "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"
    },
    {
      "name": "Тор",
      "world": "Marvel Comics",
      "ego": "нет; полное имя — Тор Одинсон",
      "work": ["борец за справедливость", "скандинавский бог"],
      "friends": ["Мстители"],
      "superpowers": ["все, что может бог", "плюс молот Мьелнир"],
      "url": "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg"
    },
    {
      "name": "Халк",
      "world": "Marvel Comics",
      "ego": "Брюс Беннер",
      "work": ["супергерой", "борец за справедливость", "ученый-биохимик"],
      "friends": ["Мстители"],
      "superpowers": [
        "сверхчеловеческая сила и скорость",
        "выносливость",
        "полет"
      ],
      "url": "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg"
    },
    {
      "name": "Чудо-женщина",
      "world": "DC Comics",
      "ego": "Диана Принс",
      "work": ["супергероиня", "секретарь-референт"],
      "friends": ["Лига Справедливости", "Бэтмен", "Супермен"],
      "superpowers": [
        "сверхчеловеческая сила и скорость",
        "выносливость",
        "полет"
      ],
      "url": "https://n1s1.hsmedia.ru/87/ed/c5/87edc525d8813c7b2899e04a4e562fe9/547x397_0xac120002_6444132261540468872.jpg"
    },
    {
      "name": "Черная вдова",
      "world": "Marvel Comics",
      "ego": "Наташа Романофф",
      "work": ["супергероиня", "шпионка"],
      "friends": ["Мстители"],
      "superpowers": [
        "пик человеческого физического потенциала",
        "замедленное старение",
        "знание многих языков"
      ],
      "url": "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg"
    },
    {
      "name": "Дэдпул",
      "world": "Marvel Comics",
      "ego": "Уэйд Уинстон Уилсон",
      "work": ["антигерой", "наемник"],
      "friends": ["Мстители (частично)", "Человек-паук", "Росомаха"],
      "superpowers": [
        "высокий болевой порог",
        "быстрая регенерация",
        "бессмертие",
        "сверхчеловеческая иммунная система"
      ],
      "url": "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg"
    }
  ]
`;

let heroes = JSON.parse(json);
console.log(heroes);

const body = document.querySelector("body");
const container = document.querySelector(".container");
const mainHTML = document.querySelector("main");

const createHeroes = function () {
  let heroCards = "";
  for (let i = 0; i < heroes.length; i++) {
    heroCards += `<div class="hero hero-${i}">
    <div><img src="${heroes[i].url}" alt="Here is a Superhero, click to find more information about he or she" /></div>
    <h3>${heroes[i].name}</h3>
    </div>`;
  }
  container.innerHTML = heroCards;
  container.addEventListener("click", createHeroCard);
};

const createHeroCard = function (event) {
  const heroCard = Array.from(document.querySelectorAll(".hero"));
  let i = heroCard.indexOf(event.target);
  console.log(i);
  if (i !== -1) {
    let popup = document.createElement("section");
    popup.className = "popup";
    popup.classList.add("popup-open");
    mainHTML.append(popup);
    popup.innerHTML = `<div>
    <img src="${heroes[i].url}" alt="Here is a ${heroes[i].name}" />
    </div>
    <div>
    <h3>${heroes[i].name}</h3>
    <p>Вселенная: ${heroes[i].world}</p>
    <p>Альтер-Эго: ${heroes[i].ego}</p>
    <p>Род деятельности: ${heroes[i].work.join(", ")}</p>
    <p>Друзья: ${heroes[i].friends.join(", ")}</p>
    <p>Суперсилы: ${heroes[i].superpowers.join(", ")}</p>
    </div>
    </div>`;
    createOverlay();
    container.removeEventListener("click", createHeroCard);
    container.addEventListener("click", closeHeroCard);
  }
};

const closeHeroCard = function (event) {
  const popup = document.querySelector(".popup");
  const overlay = document.querySelector(".overlay");

  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === overlay);
  console.log(event.currentTarget === container);

  if (event.target === overlay || event.currentTarget === container) {
    popup.remove();
    overlay.remove();
    container.addEventListener("click", createHeroCard);
    container.removeEventListener("click", closeHeroCard);
  }
};

const createOverlay = function (event) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  body.prepend(overlay);
  overlay.addEventListener("click", closeHeroCard);
  container.addEventListener("click", closeHeroCard);
};

document.addEventListener("DOMContentLoaded", createHeroes);
