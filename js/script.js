
/* =========================
   CARRITO
========================= */

const panel = document.getElementById("cartPanel");
const icon = document.querySelector(".cart-icon");

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

    panel.classList.contains("active")
        ? closeCart()
        : openCart();
}

/* cerrar carrito al click afuera */
document.addEventListener("click", (e) => {
    const clickInsideCart = panel.contains(e.target);
    const clickOnIcon = icon && icon.contains(e.target);

    if (!clickInsideCart && !clickOnIcon && panel.classList.contains("active")) {
        closeCart();
    }
});

/* cerrar con ESC */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeCart();
    }
});


/* =========================
   MENU HAMBURGUESA
========================= */

const nav = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-toggle");

function toggleMenu(btn) {
    btn.classList.toggle("active");
    nav.classList.toggle("active");
}

/* cerrar menú al hacer click en link */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.classList.remove("active");
    });
});

/* cerrar menú al click afuera */
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove("active");
        menuBtn.classList.remove("active");
    }
});


/* =========================
   ANIMACIÓN LOOKS
========================= */

const looks = document.querySelectorAll(".look");

const lookObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
    });
}, {
    threshold: 0.3
});

looks.forEach(el => lookObserver.observe(el));


/* =========================
   ANIMACIÓN COLECCIÓN
========================= */

const elements = document.querySelectorAll(
    ".collection-intro, .collection-block, .collection-quote, .collection-end"
);

const collectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
    });
}, {
    threshold: 0.25
});

elements.forEach(el => collectionObserver.observe(el));
