"use strict";

const giphy = document.querySelector("#giphy");
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");

const url =
  "https://api.giphy.com/v1/gifs/search?api_key=4Cgykbu5185dF4KoIueRx0Spw6Ho2qNG&limit=5&rating=g&lang=en&q=";

const gifTag = function (e) {
  let gifTag = giphy.value;
  return gifTag;
};

btn.addEventListener("click", () => {
  fetch(url + gifTag())
    .then((response) => response.json())
    .then((data) => {
      container.innerHTML = ``;
      console.log(data);
      if (data.data && data.data.length > 0) {
        data.data.forEach((el) => {
          container.innerHTML += `
            <div><img src=${el.images.original.url} /></div>`;
        });
      }
    });
});
