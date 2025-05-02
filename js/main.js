document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('-translate-y-full');
        if (isHidden) {
            mobileMenu.classList.remove('-translate-y-full', '-z-10');
            mobileMenu.classList.add('translate-y-0', 'z-40');
            mobileMenuButton.innerHTML = '<i class="fas fa-times text-2xl"></i>';
        } else {
            mobileMenu.classList.add('-translate-y-full');
            mobileMenu.classList.remove('translate-y-0', 'z-40');
            setTimeout(() => {
                if (mobileMenu.classList.contains('-translate-y-full')) {
                    mobileMenu.classList.add('-z-10');
                }
            }, 300);
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        }
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-y-full');
            mobileMenu.classList.remove('translate-y-0', 'z-40');
            setTimeout(() => {
                if (mobileMenu.classList.contains('-translate-y-full')) {
                    mobileMenu.classList.add('-z-10');
                }
            }, 300);
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        });
    });

    // Update footer year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Intersection Observer for scroll animations
    const headers = document.querySelectorAll('.section-header');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    headers.forEach(header => observer.observe(header));

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});