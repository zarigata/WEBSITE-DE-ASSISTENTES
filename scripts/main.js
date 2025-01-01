/*
 ╔══════════════════════════════════════════╗
 ║ VIRTUAL TALENT HUB - ELITE TALENT FORGE ║
 ╚══════════════════════════════════════════╝
 // Cracked by F3V3R DR34M Keygen Team 2024
 */

// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Interactive CTA Button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'scale(1.05)';
        });
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = 'scale(1)';
        });
    }

    // Console Easter Egg
    console.log(`
    ╔══════════════════════════════════════════╗
    ║ VIRTUAL TALENT HUB - ELITE TALENT FORGE ║
    ╚══════════════════════════════════════════╝
    // Cracked by F3V3R DR34M Keygen Team 2024
    `);
});
