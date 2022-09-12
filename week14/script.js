'use strict';

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const slider = document.querySelector('.slider__content');
const slides = document.querySelectorAll('.slide');
console.log(slides);

const imgPrev = document.querySelector('.slide-prev');
const imgCenter = document.querySelector('.slide-center');
const imgNext = document.querySelector('.slide-next');

let images = [
  'assets/images/slide1.png',
  'assets/images/slide2.png',
  'assets/images/slide3.png',
  'assets/images/slide4.png',
  'assets/images/slide5.png',
  'assets/images/slide6.png',
];

function imageChange() {
  if (slider.classList.contains('left')) {
    images.unshift(images.pop());
    console.log(images);
  } else if (slider.classList.contains('right')) {
    images.push(images.shift());
    console.log(images);
  }
  imgPrev.src = images[0];
  imgCenter.src = images[1];
  imgNext.src = images[2];
}

function moveLeft() {
  slider.classList.add('left');
  btnPrev.removeEventListener('click', moveLeft);
  btnNext.removeEventListener('click', moveRight);
}

btnPrev.addEventListener('click', moveLeft);

function moveRight() {
  slider.classList.add('right');
  btnNext.removeEventListener('click', moveRight);
  btnPrev.removeEventListener('click', moveLeft);
}

btnNext.addEventListener('click', moveRight);

slider.addEventListener('animationend', () => {
  imageChange();
  slider.classList.remove('left');
  slider.classList.remove('right');
  btnPrev.addEventListener('click', moveLeft);
  btnNext.addEventListener('click', moveRight);
});
