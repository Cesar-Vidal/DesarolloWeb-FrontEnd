document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const closeMenu = document.getElementById("close-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});
