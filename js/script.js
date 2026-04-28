/* =========================
   CARRITO
========================= */

const panel = document.getElementById("cartPanel");
const icon = document.querySelector(".cart-icon");

if (panel && icon) {

    function openCart() {
        panel.classList.add("active");
        icon.classList.add("hidden");
    }

    function closeCart() {
        panel.classList.remove("active");
        icon.classList.remove("hidden");
    }

    function toggleCart(e) {
        e.stopPropagation();
        panel.classList.contains("active") ? closeCart() : openCart();
    }

    document.addEventListener("click", (e) => {
        const clickInsideCart = panel.contains(e.target);
        const clickOnIcon = icon.contains(e.target);

        if (!clickInsideCart && !clickOnIcon && panel.classList.contains("active")) {
            closeCart();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCart();
        }
    });
}


/* =========================
   MENU HAMBURGUESA
========================= */

const nav = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-toggle");

if (nav && menuBtn) {

    function toggleMenu(btn) {
        btn.classList.toggle("active");
        nav.classList.toggle("active");
    }

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            menuBtn.classList.remove("active");
        });
    });

    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove("active");
            menuBtn.classList.remove("active");
        }
    });
}


/* =========================
   ANIMACIÓN LOOKS
========================= */

const looks = document.querySelectorAll(".look");

if (looks.length > 0) {
    const lookObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
        });
    }, { threshold: 0.3 });

    looks.forEach(el => lookObserver.observe(el));
}


/* =========================
   ANIMACIÓN COLECCIÓN
========================= */

const elements = document.querySelectorAll(
    ".collection-intro, .collection-block, .collection-quote, .collection-end"
);

if (elements.length > 0) {
    const collectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
        });
    }, { threshold: 0.25 });

    elements.forEach(el => collectionObserver.observe(el));
}


/* =========================
   CARRUSEL
========================= */

const carousel = document.querySelector('.carousel-nuevo');
const btnLeft = document.querySelector('.arrow.left');
const btnRight = document.querySelector('.arrow.right');

if (carousel && btnLeft && btnRight) {

    btnLeft.addEventListener('click', () => {
        carousel.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    btnRight.addEventListener('click', () => {
        carousel.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
}