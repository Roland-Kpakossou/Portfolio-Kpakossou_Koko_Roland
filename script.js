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

    // Initialiser le compteur de visites IMMÉDIATEMENT au chargement
    initializeCounter();
});

// ===== SYSTÈME DE COMPTEUR AMÉLIORÉ =====

let visitData = {
    totalVisits: 0,
    uniqueVisits: 0,
    lastVisit: null
};

// Initialisation du compteur
function initializeCounter() {
    loadVisitData();
    
    // Vérifier si c'est une nouvelle visite
    const today = new Date().toDateString();
    const lastVisitDate = visitData.lastVisit ? new Date(visitData.lastVisit).toDateString() : null;
    
    // Incrémenter le compteur total à chaque chargement
    visitData.totalVisits++;
    
    // Vérifier si c'est une visite unique (nouveau jour ou première visite)
    if (!lastVisitDate || lastVisitDate !== today) {
        visitData.uniqueVisits++;
        visitData.lastVisit = new Date().toISOString();
    }
    
    // Sauvegarder les données mises à jour
    saveVisitData();
    
    // Mettre à jour l'affichage si le panel admin est ouvert
    updateCounterDisplay();
    
    console.log('Visite enregistrée - Total:', visitData.totalVisits, 'Uniques:', visitData.uniqueVisits);
}

// Charger les données depuis le localStorage
function loadVisitData() {
    const saved = localStorage.getItem('portfolioVisitData');
    if (saved) {
        try {
            visitData = JSON.parse(saved);
        } catch (e) {
            console.error('Erreur chargement données:', e);
            resetVisitData();
        }
    } else {
        resetVisitData();
    }
}

// Sauvegarder les données dans le localStorage
function saveVisitData() {
    try {
        localStorage.setItem('portfolioVisitData', JSON.stringify(visitData));
    } catch (e) {
        console.error('Erreur sauvegarde données:', e);
    }
}

// Réinitialiser les données de visite
function resetVisitData() {
    visitData = {
        totalVisits: 0,
        uniqueVisits: 0,
        lastVisit: null
    };
}

// Mettre à jour l'affichage du compteur
function updateCounterDisplay() {
    const visitCountElement = document.getElementById('visit-count');
    const uniqueVisitsElement = document.getElementById('unique-visits');
    
    if (visitCountElement) {
        visitCountElement.textContent = visitData.totalVisits;
    }
    if (uniqueVisitsElement) {
        uniqueVisitsElement.textContent = visitData.uniqueVisits;
    }
}

// ===== FONCTIONS ADMIN =====

// Fonctions pour le panel admin
function showAdminPanel() {
    const password = prompt('Entrez le mot de passe admin:');
    // Changez 'admin123' par le mot de passe que vous souhaitez
    if (password === 'admin123') {
        document.getElementById('admin-stats').classList.remove('hidden');
        updateCounterDisplay(); // Mettre à jour l'affichage
    } else {
        alert('Mot de passe incorrect');
    }
}

function hideStats() {
    document.getElementById('admin-stats').classList.add('hidden');
}

// Fonction pour réinitialiser le compteur
function resetCounter() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser le compteur ?')) {
        resetVisitData();
        saveVisitData();
        updateCounterDisplay();
        alert('Compteur réinitialisé à 0');
    }
}