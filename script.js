// ============================================
// SMOOTH SCROLLING FOR NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Update active nav link
            updateActiveNavLink();
        }
    });
});

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all feature cards and destination cards
document.querySelectorAll('.feature-card, .destination-card').forEach(card => {
    observer.observe(card);
});

// ============================================
// CTA BUTTONS
// ============================================
const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-large');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Scroll to CTA section
        const ctaSection = document.querySelector('#cta');
        if (ctaSection && this.className.includes('cta-button-large')) {
            alert('🐱 Welcome to Fat Cat Travels!\n\nYour travel planning journey starts here.\n\nThis is a demo homepage. In the full version, you would be able to:\n✈️ Plan your itineraries\n🏨 Manage bookings\n💰 Track your budget\n📱 Access everywhere\n\nStay tuned for more features!');
        } else {
            alert('🐱 Welcome to Fat Cat Travels!\n\nReady to plan your next adventure?\n\nThis is a demo homepage. In the full version, you would be able to:\n✈️ Plan your itineraries\n🏨 Manage bookings\n💰 Track your budget\n📱 Access everywhere\n\nStay tuned for more features!');
        }
    });
});

// ============================================
// HAMBURGER MENU (for mobile)
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('visible');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('visible');
        });
    });
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ============================================
// SCROLL TO TOP ON PAGE LOAD
// ============================================
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

console.log('🐱 Fat Cat Travels - Travel Management Purrrfectly Planned!');
