'use strict';

let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const intervalTime = 2000; // 2 seconds

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlide();
}

function updateSlide() {
  const offset = -slideIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, intervalTime);

// Manual sliding
document.addEventListener('DOMContentLoaded', function() {
  let startX;
  let endX;

  document.querySelector('.slider').addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  });

  document.querySelector('.slider').addEventListener('touchend', function(e) {
    endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) {
      slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
    } else if (startX - endX > 50) {
      slideIndex = (slideIndex + 1) % totalSlides;
      updateSlide();
    }
  });
});


/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);