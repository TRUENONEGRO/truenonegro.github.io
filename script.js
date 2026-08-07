/* =========================================================
   TRUENO NEGRO
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   ELEMENTOS
   ========================================================= */

const header = document.querySelector(".header");
const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");


/* =========================================================
   HEADER AL HACER SCROLL
   ========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================================================
   MENÚ MOBILE
   ========================================================= */

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* =========================================================
   CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
   ========================================================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================================================
   ANIMACIONES AL HACER SCROLL
   ========================================================= */

const animatedElements = document.querySelectorAll(
    ".section-container, .album, .member, .show-card, .video-placeholder"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.classList.add("scroll-animation");

    observer.observe(element);

});


/* =========================================================
   LINKTREE
   ========================================================= */

const linktreeButton =
    document.querySelector("#linktree-button");


if (linktreeButton) {

    linktreeButton.href =
        "https://linktr.ee/TruenoNegroOficial";

    linktreeButton.target = "_blank";

    linktreeButton.rel = "noopener noreferrer";

}


/* =========================================================
   AÑO AUTOMÁTICO DEL FOOTER
   ========================================================= */

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector("footer p");

if (footerYear) {

    footerYear.textContent =
        `© ${currentYear} Trueno Negro`;

}


/* =========================================================
   EFECTO PARALLAX SUAVE EN EL HERO
   ========================================================= */

const hero = document.querySelector(".hero");


window.addEventListener("scroll", () => {

    if (!hero) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.25}px`;

    }

});


// =========================================================
// MENÚ MOBILE
// =========================================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    // Cerrar menú al seleccionar una sección

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}

