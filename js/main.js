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
  //autoplay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

/*Team Slider */
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,

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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,

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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*Timeline Slider*/
var timeline = document.getElementById("timeline");
var timelineLi = document.querySelectorAll(".timelineItem");
var calc = timelineLi.length * 240;
timeline.style.width = calc + "px";
var distance = window.screen.width - 50;

//console.log(distance);

var button0 = document
  .getElementById("btnLeft")
  .addEventListener("click", moveLeft);

var button1 = document
  .getElementById("btnRight")
  .addEventListener("click", moveRight);

function moveLeft() {
  var left = (document.getElementById("timelineContent").scrollLeft -=
    distance);
}

function moveRight() {
  var right = (document.getElementById("timelineContent").scrollLeft +=
    distance);
}
