
// $(window).scroll(function () {

//     // sticky Header
//     var scroll = $(window).scrollTop();
//     if (scroll >= 35) {
//         $("header").addClass("sticky");
//     } else {
//         $("header").removeClass("sticky");

//     } 
// });
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar-collapse");
  const toggler = document.querySelector(".navbar-toggler");

  // If menu is open and click is outside navbar and toggler
  if (
    navbar.classList.contains("show") &&
    !navbar.contains(event.target) &&
    !toggler.contains(event.target)
  ) {
    // Collapse the navbar
    const bsCollapse = bootstrap.Collapse.getInstance(navbar);
    bsCollapse.hide();
  }
});

$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    cssMode: false,
    loop: false,
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: false,
    keyboard: true,
  });

  $(".heading svg").on("click", function () {
    $(this).toggleClass("active");
  });

  // $(".navbar-toggler-icon").on("click", function () {
  //   $("body").addClass("body-overlay");
  // });
  $(".close-menu").on("click", function () {
    $(".navbar-collapse").removeClass("show");
    // $("body").removeClass("body-overlay");
  });

  const $input = $("#searchInput");
  const $closeBtn = $(".close-btn");

  $input.on("input", function () {
    if ($(this).val().length > 0) {
      $closeBtn.show();
    } else {
      $closeBtn.hide();
    }
  });

  $closeBtn.on("click", function () {
    $input.val("");
    $closeBtn.hide();
  });

  $(".pop-btn").on("click", function () {
    $(".mobile-filter").toggleClass("show-filter");
  });
  $(".close_btn").on("click", function () {
    $(".mobile-filter").removeClass("show-filter");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const mapSection = document.querySelector(".map-s");
    const offsetTop = 150;

    window.addEventListener("scroll", () => {
      if (window.scrollY > offsetTop) {
        mapSection.classList.add("sticky");
      } else {
        mapSection.classList.remove("sticky");
      }
    });
  });
});
