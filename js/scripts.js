// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinksItems = document.querySelectorAll('.nav-links li a');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Change navbar style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
            scrollTopBtn.style.display = 'block';
        } else {
            nav.classList.remove('scrolled');
            scrollTopBtn.style.display = 'none';
        }
    });

    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sr = document.getElementById('sr');
    if (sr) {
        sr.addEventListener('click', function () {
            window.location.href = 'secret.html';
        });
    }
});
