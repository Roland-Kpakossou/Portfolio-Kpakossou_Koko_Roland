// Animation Typed.js
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".typing", {
        strings: ["Informatique", "Cybersécurité", "Intelligence Artificielle"],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 500,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true
    });

    // Animation smooth scroll pour la flèche
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Animation du header au scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});