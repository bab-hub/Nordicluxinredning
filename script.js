// Enkel funktion för att hantera formuläret
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Här skulle du normalt skicka data till en server
    alert('Tack för din förfrågan! Vi återkommer inom kort med ett prisförslag.');
    this.reset();
});

// Animation vid scroll (Fade in effekt)
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
