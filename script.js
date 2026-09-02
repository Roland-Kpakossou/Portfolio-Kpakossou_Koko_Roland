document.addEventListener('DOMContentLoaded', initPortfolio);
 
function initPortfolio() {
    initTypingAnimation();
    initSmoothScrollArrow();
    initHeaderScrollState();
}
 
function initTypingAnimation() {
    new Typed('.typing', {
        strings: ["technologie de l'information", 'Informatique'],
        typeSpeed: 30,
        backSpeed: 20,
        startDelay: 500,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true
    });
}
 
function initSmoothScrollArrow() {
    const scrollArrow = document.querySelector('.scroll-arrow');
    if (!scrollArrow) return;
 
    scrollArrow.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSelector = scrollArrow.getAttribute('href');
        const targetSection = document.querySelector(targetSelector);
        targetSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}
 

function initHeaderScrollState() {
    const header = document.querySelector('header');
    if (!header) return;
 
    const SCROLL_THRESHOLD_PX = 100;
 
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD_PX);
    });
}