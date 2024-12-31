// F3V3R DR34M - M41N SCR1PT
// ULT1M4T3 H4X0R M0D3 4CT1V4T3D

document.addEventListener('DOMContentLoaded', () => {
    // 1337 N4V1G4T10N SM00TH1NG
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // PR0 T34M H0V3R 3FF3CTZ
    const serviceCards = document.querySelectorAll('#services .card, #success-cases .card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow-lg', 'scale-105');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow-lg', 'scale-105');
        });
    });
});
