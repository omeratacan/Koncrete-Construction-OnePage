function trackPixel() {
  const pixelURL = `https://static.pixel.com/ase/25565/1553/aa.js`;
  new Image().src = pixelURL;
}

let height = $("#navbar-top").height();

$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $(".header-navbar-bottom").addClass("sticky");
  }
  else {
    $(".header-navbar-bottom").removeClass("sticky");
  }
});

/* Navbar Links */

let header = document.querySelector(".main-nav-items");
let btns = header.getElementsByClassName("main-nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

/* Swiper */

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swipers = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    '999': {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    '575': {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    '1': {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* HAMBURGER */

const menu = document.querySelector(".main-nav-items");
const menuItems = document.querySelectorAll(".main-nav-link");
const hamburger = document.querySelector(".nav-btn");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

/* To Top Button */

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}