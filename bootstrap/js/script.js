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


 document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#info-accordion .nav-link');
    const accordionItems = document.querySelectorAll('#info-accordion .accordion-collapse');

    accordionItems.forEach(item => {
      item.addEventListener('show.bs.collapse', function () {
        const id = this.getAttribute('id');

        // Remove active de todas as abas
        navLinks.forEach(link => link.classList.remove('active'));

        // Ativa a aba correspondente
        const activeLink = document.querySelector(`#info-accordion .nav-link[data-bs-target="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      });
    });

    // Também atualizar quando clicar na aba horizontal
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
