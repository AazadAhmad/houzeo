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
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
});
