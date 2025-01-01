/*
 ╔══════════════════════════════════════════╗
 ║ VIRTUAL TALENT HUB - MENU INTERACTIONS  ║
 ╚══════════════════════════════════════════╝
 // Cracked by F3V3R DR34M Keygen Team 2024
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    const mobileNavLinks = document.querySelectorAll('.nav-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // F3V3R DR34M Keygen Style Console Log
    console.log(`
    ╔══════════════════════════════════════════╗
    ║ VIRTUAL TALENT HUB - MENU SYSTEM ONLINE ║
    ╚══════════════════════════════════════════╝
    // F3V3R DR34M Menu Interaction Initialized
    `);
});
