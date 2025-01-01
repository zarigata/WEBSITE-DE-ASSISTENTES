/*
 ╔══════════════════════════════════════════╗
 ║ VIRTUAL TALENT HUB - ELITE TALENT FORGE ║
 ╚══════════════════════════════════════════╝
 // Cracked by F3V3R DR34M Keygen Team 2024
 */

document.addEventListener('DOMContentLoaded', () => {
    // Parallax Effect
    const heroBackground = document.querySelector('.hero-background');
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        heroBackground.style.transform = `
            translateZ(-1px) 
            scale(2) 
            translateX(${(mouseX - 0.5) * 10}%) 
            translateY(${(mouseY - 0.5) * 10}%)
        `;
    });

    // Feature Animation on Scroll
    const features = document.querySelectorAll('.animate-feature');
    const observerOptions = {
        threshold: 0.1
    };

    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    features.forEach(feature => {
        featureObserver.observe(feature);
    });

    // Scroll-triggered Animations
    const scrollAnimations = () => {
        const scrollPosition = window.scrollY;
        const heroSection = document.querySelector('.hero');
        
        // Subtle parallax for hero section
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    };

    window.addEventListener('scroll', scrollAnimations);

    // Console Easter Egg with Keygen Style
    console.log(`
    ╔══════════════════════════════════════════╗
    ║ VIRTUAL TALENT HUB - ANIMATION ENGINE   ║
    ╚══════════════════════════════════════════╝
    // F3V3R DR34M Animation Cracking Complete
    `);
});
