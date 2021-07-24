/*Menu Button*/
function toggleMenu() {
  var menu = document.querySelector("#menu");
  menu.classList.toggle("show");
}
/*Banner Slider */
var swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*Team Slider */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/*Timeline Slider*/
var timeline = document.getElementById("timeline");
var timelineLi = document.querySelectorAll(".timelineItem");
var calc = timelineLi.length * 220;
timeline.style.width = calc + "px";
var distance = 200;

var button0 = document
  .getElementById("slid")
  .addEventListener("click", moveLeft);

var button1 = document
  .getElementById("slide")
  .addEventListener("click", moveRight);

function moveLeft() {
  document.getElementById("timelineContent").scrollLeft -= distance;
}

function moveRight() {
  document.getElementById("timelineContent").scrollLeft += distance;
}
