function art() {
  const url =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=14&q=hasImages=true";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let objectsArr = data.objectIDs;

      function getRandomImg() {
        let randomNum = Math.floor(Math.random() * (objectsArr.length - 0) + 0);

        let urlObj = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`;

        let objArt = urlObj + objectsArr[randomNum];
        return objArt;
      }

      function createImg(u) {
        fetch(u)
          .then((response) => response.json())
          .then((data) => {
            const container = document.querySelector(".container");
            container.innerHTML += `<div>
          <img src="${data.primaryImageSmall}" />
          </div>`;
          });
      }

      createImg(getRandomImg());
      createImg(getRandomImg());
      createImg(getRandomImg());
    });
}

document.addEventListener("DOMContentLoaded", art);
