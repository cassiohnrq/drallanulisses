// Navbar scroll behavior deixando transparente ao topo e depois colorido
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

// Sincronização entre abas horizontais e accordion
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


// Smooth scroll e centralização do accordion ao clicar nos links
document.querySelectorAll('a[href^="#aba"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const collapseEl = document.querySelector(targetId);

    if (!collapseEl) return;

    // Abre o accordion
    const bsCollapse = new bootstrap.Collapse(collapseEl, {
      toggle: true
    });

    // Scroll para o centro da tela
    setTimeout(() => {
      const rect = collapseEl.getBoundingClientRect();
      const elementTop = rect.top + window.pageYOffset;
      const offset = (window.innerHeight / 2) - (rect.height / 2);

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      });
    }, 300); // espera o accordion abrir
  });
});




