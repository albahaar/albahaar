// main.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show'); // Toggle the 'show' class
        hamburger.classList.toggle('active'); // Toggle active class for animation
    });
});
