/*
 ╔══════════════════════════════════════════╗
 ║ VIRTUAL TALENT HUB - ELITE TALENT FORGE ║
 ╚══════════════════════════════════════════╝
 // Cracked by F3V3R DR34M Keygen Team 2024
 */

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceDetails = document.getElementById('development-detail');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceType = card.getAttribute('data-service');
            updateServiceDetails(serviceType);
        });

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    function updateServiceDetails(serviceType) {
        const details = {
            'development': {
                title: 'Software Development',
                description: 'From concept to deployment, we transform your vision into robust, scalable software solutions.',
                features: [
                    'Full-stack development',
                    'Mobile and web applications', 
                    'Cloud infrastructure'
                ]
            },
            'design': {
                title: 'UI/UX Design',
                description: 'Crafting intuitive, visually stunning interfaces that enhance user experience and drive engagement.',
                features: [
                    'User research',
                    'Wireframing and prototyping',
                    'Responsive design'
                ]
            },
            'marketing': {
                title: 'Digital Marketing',
                description: 'Strategic campaigns that amplify your brand, drive conversions, and build lasting digital presence.',
                features: [
                    'SEO optimization',
                    'Social media marketing',
                    'Content strategy'
                ]
            },
            'support': {
                title: '24/7 Support',
                description: 'Proactive, round-the-clock technical support ensuring your operations run smoothly without interruption.',
                features: [
                    'Instant ticket resolution',
                    'Technical consultation',
                    'Performance monitoring'
                ]
            }
        };

        const selectedService = details[serviceType];
        
        serviceDetails.innerHTML = `
            <h2>${selectedService.title}</h2>
            <p>${selectedService.description}</p>
            <ul>
                ${selectedService.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
    }

    // Initialize with development service
    updateServiceDetails('development');

    // Service Card Interaction Logging
    console.log(`
    ╔══════════════════════════════════════════╗
    ║ SERVICES INTERACTION INITIALIZED        ║
    ╚══════════════════════════════════════════╝
    // F3V3R DR34M Talent Tracking Engaged
    `);
});
