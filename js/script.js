// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('-translate-y-full');
    
    if (isHidden) {
        mobileMenu.classList.remove('-translate-y-full', '-z-10');
        mobileMenu.classList.add('translate-y-0', 'z-40');
        mobileMenuButton.innerHTML = '<i class="fas fa-times text-2xl"></i>';
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.add('-translate-y-full');
        mobileMenu.classList.remove('translate-y-0', 'z-40');
        setTimeout(() => {
            if (mobileMenu.classList.contains('-translate-y-full')) {
                mobileMenu.classList.add('-z-10');
            }
        }, 300);
        mobileMenuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        document.body.style.overflow = '';
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
        document.body.style.overflow = '';
    });
});

// Update footer year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-header, .card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('#projects .card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
                img.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}