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

    // Initialiser le compteur de visites
    updateVisitCount();
    
    // Vérifier si c'est une nouvelle visite (stockage local)
    if (!localStorage.getItem('visited')) {
        localStorage.setItem('visited', 'true');
        // La visite sera comptée via l'appel API
    }
});

// Compteur de visites avec CountAPI
function updateVisitCount() {
    const namespace = 'portfolio-kpakossou';
    const key = 'visits';
    
    // Incrémenter le compteur
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
        .then(response => response.json())
        .then(data => {
            console.log('Nombre de visites:', data.value);
        })
        .catch(error => console.error('Erreur compteur:', error));
    
    // Récupérer le nombre actuel
    fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('visit-count').textContent = data.value;
        })
        .catch(error => console.error('Erreur récupération:', error));
}

// Fonctions pour le panel admin
function showAdminPanel() {
    const password = prompt('Entrez le mot de passe admin:');
    // Changez 'admin123' par le mot de passe que vous souhaitez
    if (password === 'admin123') {
        document.getElementById('admin-stats').classList.remove('hidden');
        updateVisitCount(); // Mettre à jour l'affichage
    } else {
        alert('Mot de passe incorrect');
    }
}

function hideStats() {
    document.getElementById('admin-stats').classList.add('hidden');
}

// Fonction pour réinitialiser le compteur (optionnel)
function resetCounter() {
    const namespace = 'portfolio-kpakossou';
    const key = 'visits';
    
    fetch(`https://api.countapi.xyz/set/${namespace}/${key}?value=0`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('visit-count').textContent = data.value;
            alert('Compteur réinitialisé à 0');
        })
        .catch(error => console.error('Erreur réinitialisation:', error));
}