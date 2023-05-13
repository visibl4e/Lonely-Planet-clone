const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offSet = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offSet;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

// document.addEventListener("click", (e) => {
//   let handle;
//   if (e.target.matches(".handle")) {
//     handle = e.target;
//   } else {
//     handle = e.target.closest(".handle");
//   }
//   if (handle != null) onHandleClick(handle);
// });

// function onHandleClick(handle) {
//   const slider = handle.closest(".carousel").querySelector(".slider");
//   const slideIndex = parseInt(
//     getComputedStyle(slider).getPropertyValue("--slider-index")
//   );
//   const slides = document.querySelectorAll(".slide");

//   if (handle.classList.contains("left-handle")) {
//     slides.style.setProperty("--slider-index", slideIndex - 1);
//   }
//   if (handle.classList.contains("right-handle")) {
//     slides.style.setProperty("--slider-index", slideIndex + 1);
//   }
// }

// //next button
// const slides = document.querySelectorAll(".slide");
// slides.forEach((slide, index) => {
//   slide.style.transform = `translateX(${index * 50}%)`;
// });
// let currentSlide = 0;
// const nextSlide = document.querySelector(".button-next");
// nextSlide.addEventListener("click", function () {
//   currentSlide++;
// });
// slides.forEach((slide, index) => {
//   slide.style.transform = `translateX(${0 * (index - currentSlide)}%)`;
// });

// // maximum number of slides
// let maxSlide = slides.length - 1;

// // add event listener and navigation functionality
// nextSlide.addEventListener("click", function () {
//   // check if current slide is the last and reset current slide
//   if (currentSlide === maxSlide) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }

//   //   move slide by -100%
//   slides.forEach((slide, index) => {
//     slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
//   });
// });

// // select prev slide button
// const prevSlide = document.querySelector(".button-prev");

// // add event listener and navigation functionality
// prevSlide.addEventListener("click", function () {
//   // check if current slide is the first and reset current slide to last
//   if (currentSlide === 0) {
//     currentSlide = maxSlide;
//   } else {
//     curSlide--;
//   }

//   //   move slide by 100%
//   slides.forEach((slide, index) => {
//     slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
//   });
// });
