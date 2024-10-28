(function () {
    // Select elements
    const nav = document.getElementById("navbar");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelectorAll("#navbar a");

    // Toggle Menu function
    function toggleMenu() {
        nav.classList.toggle("show");
        // Toggle ARIA expanded attribute for accessibility
        const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
        hamburger.setAttribute("aria-expanded", !expanded);
    }

    // Close menu function for mobile links
    function closeMenu() {
        nav.classList.remove("show");
        hamburger.setAttribute("aria-expanded", false);
    }

    // Event Listeners
    hamburger.addEventListener("click", toggleMenu);
    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Accessibility attributes
    hamburger.setAttribute("aria-controls", "navbar");
    hamburger.setAttribute("aria-expanded", "false");

    // Optional: Close the menu on window resize if the menu is open
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && nav.classList.contains("show")) {
            closeMenu();
        }
    });
})();

