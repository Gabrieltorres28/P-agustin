/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm("service_2cud1ij", "template_jc6mhjm", "#contact-form", "YyD3pCcHT45Om4qyv")
    .then(
      () => {
        // Show sent message - emoji - win + . - 'verificación'
        contactMessage.textContent = "Message sent successfully ✅";
        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
          contactForm.reset();
        }, 2500);
        // Clear input fields
      },
      () => {
        // Show error message - emoji 'x'
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
// Mostrar el botón de scroll-up cuando se hace scroll
const scrollUp = () => {
  const scrollUpButton = document.getElementById('scroll-up');
  if (window.scrollY >= 350) {
      scrollUpButton.classList.add('show-scroll');
  } else {
      scrollUpButton.classList.remove('show-scroll');
  }
};
window.addEventListener('scroll', scrollUp);

// Scroll para activar el enlace de sección en el menú
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionClass.classList.add('active-link');
      } else {
          sectionClass.classList.remove('active-link');
      }
  });
};
window.addEventListener('scroll', scrollActive);

function removePlaceholder(element) {
  element.placeholder = '';
}

function restorePlaceholder(element, text) {
  if (element.value === '') {
    element.placeholder = text;
  }
}


/*=============== SCROLL REVEAL ANIMATION ===============*/
// Configuración general de ScrollReveal
const sr = ScrollReveal({
  origin: 'top',       // El origen del movimiento (puedes cambiar 'top' por 'left', 'right', 'bottom' según quieras que se desplace)
  distance: '60px',     // La distancia del movimiento
  duration: 2900,       // Duración de la animación en milisegundos
  delay: 250,          // Retraso antes de que empiece la animación
  reset: true,         // Si quieres que la animación se repita cuando el elemento vuelva a la vista
});

// Animación para la sección home
sr.reveal(`.home__data, .home__social,  .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin:'left'})
sr.reveal(`.about__image, .skills__content`, {origin:'right'})
sr.reveal(`.services__card, .projects__card`, {interval:100})
       // No repetir la animación al hacer scroll hacia atrás






// Aplica la animación a cada sección usando su clase o ID




