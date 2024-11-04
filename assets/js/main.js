/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navOpen = document.getElementById("nav-open"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navOpen) {
  navOpen.addEventListener("click", () => {
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
const scrollup = () =>{
    const scrollUp = documen.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
      const scrollY = window.pageYOffset

      sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          sectionClass-classList.add('active-link')
        }else{
          sectionClass.classList.remove('active-link')
        }


      })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/


// Aplica la animación a cada sección usando su clase o ID



/*=============== AUTO_ESCRITURA ===============*/

const elemento = document.getElementById("textoEscritura");
const texto = elemento.innerHTML; // Toma el texto que ya está en el HTML
const velocidad = 44; // Ajusta la velocidad en milisegundos
let indice = 0;

// Limpia el contenido para que se vea el efecto desde el inicio
elemento.innerHTML = "";

function escribirTexto() {
    if (indice < texto.length) {
        elemento.innerHTML += texto.charAt(indice);
        indice++;
        setTimeout(escribirTexto, velocidad);
    }
}

// Llamada a la función cuando se cargue la página
window.onload = escribirTexto;

