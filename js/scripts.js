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
    const sr = document.getElementById('sr'); // Secret rock element

    function checkSrVisibility() {
        if (!sr) return;
        const rect = sr.getBoundingClientRect();
        const isVisible =
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);

        if (isVisible) {
            sr.style.pointerEvents = "auto"; // Allow clicking when visible
            sr.style.opacity = "1"; // Ensure it's not visually hidden
        } else {
            sr.style.pointerEvents = "none"; // Disable clicking when not visible
            sr.style.opacity = "0.5"; // Reduce visibility for debugging
        }
    }

    if (sr) {
        sr.addEventListener("click", function () {
            if (sr.style.pointerEvents !== "none") {
                window.location.href = atob("aHR0cHM6Ly93d3cubGVlLWx1cHRvbi53b3JrL3NlY3JldC5odG1s"); // Base64-encoded link
            }
        });
    }

    window.addEventListener('scroll', checkSrVisibility);
    window.addEventListener('resize', checkSrVisibility);
    checkSrVisibility(); // Initial check on page load
});


