document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  function checkScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
      navbar.classList.remove("navbar-transparent"); 
    } else {
      navbar.classList.add("navbar-transparent");
      navbar.classList.remove("navbar-scrolled");
    }
  }

  checkScroll();
  window.addEventListener("scroll", checkScroll);
});
