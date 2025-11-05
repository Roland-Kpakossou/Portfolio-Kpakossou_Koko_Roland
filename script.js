// Animation Typed.js
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".typing", {
        strings: ["Informatique", "Cybersécurité", "Inteligence Artificielle"],
        typeSpeed: 50,
        backSpeed: 30,
        startDelay: 500,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true
    });
});