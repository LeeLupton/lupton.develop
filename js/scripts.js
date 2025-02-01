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
    const _ = document.getElementById('sr'); // Secret rock element

    function $() {
        if (!_) return;
        const r = _.getBoundingClientRect();
        const v =
            r.top >= 0 &&
            r.left >= 0 &&
            r.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            r.right <= (window.innerWidth || document.documentElement.clientWidth);

        _.style.pointerEvents = v ? "auto" : "none"; // Disable click if not visible
    }

    if (_) {
        _.addEventListener("click", function () {
            if (_.style.pointerEvents !== "none") {
                window.location.href = atob("aHR0cHM6Ly93d3cubGVlLWx1cHRvbi53b3JrL3NlY3JldC5odG1s"); // Encoded link
            }
        });
    }

    window.addEventListener('scroll', $);
    window.addEventListener('resize', $);
    $(); // Initial check on page load
});

