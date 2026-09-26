document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  if (!navbar) {
    return;
  }

  function updateNavbar() {
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 40);
  }

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });
});
