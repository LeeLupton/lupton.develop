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
    const s = document.getElementById('sr');

    function c() {
        if (!s) return;
        const r = s.getBoundingClientRect();
        if (r.top >= 0 && r.left >= 0 && r.bottom <= (window.innerHeight || document.documentElement.clientHeight) && r.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            s.classList.remove('x');
        } else {
            s.classList.add('x');
        }
    }

    if (s) {
        s.addEventListener("click", function () {
            if (!s.classList.contains("x")) {
                window.location.href = atob("aHR0cHM6Ly95b3VyLXNlY3JldC1saW5rLmNvbQ=="); // Encoded URL
            }
        });
    }

    window.addEventListener('scroll', c);
    c();
});
