const slider = document.querySelector(".slider");
const slide = document.querySelector(".slide");

let slidePosition = 0;
const totalSlides = slider.children.length;
let slideWidth = slide.offsetWidth;

function slideNext() {
  slidePosition -= slideWidth;
  if (slidePosition < -((totalSlides - 1) * slideWidth)) {
    slidePosition = 0;
  }
  slider.style.transform = `translateX(${slidePosition}px)`;
}

function autoSlide() {
  slideNext();
}

let slideInterval = setInterval(autoSlide, 5000);

// Stop automatic sliding on mouseenter
slider.addEventListener("mouseenter", function () {
  clearInterval(slideInterval);
});

slider.addEventListener("mouseleave", function () {
  slideInterval = setInterval(autoSlide, 5000);
});

window.addEventListener("resize", function () {
  slideWidth = slider.querySelector(".slide").offsetWidth;
});
