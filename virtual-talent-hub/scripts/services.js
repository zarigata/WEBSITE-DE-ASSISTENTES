document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const detailsContainer = document.getElementById('service-details');

    // Service Details Configuration
    const serviceDetails = {
        development: {
            title: 'Software Development',
            icon: '💻',
            description: 'Transforming digital dreams into robust, scalable solutions.',
            keyFeatures: [
                'Full-stack Engineering',
                'Cloud-Native Architecture',
                'Microservices Design',
                'Performance Optimization'
            ],
            technologies: ['React', 'Node.js', 'Python', 'Docker', 'Kubernetes']
        },
        design: {
            title: 'UI/UX Design',
            icon: '🎨',
            description: 'Crafting intuitive, breathtaking digital experiences.',
            keyFeatures: [
                'User-Centered Design',
                'Responsive Interfaces',
                'Interaction Prototyping',
                'Accessibility Optimization'
            ],
            technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision']
        },
        marketing: {
            title: 'Digital Marketing',
            icon: '🚀',
            description: 'Amplifying your brand\'s digital presence with strategic campaigns.',
            keyFeatures: [
                'SEO Optimization',
                'Social Media Strategy',
                'Content Marketing',
                'Conversion Rate Optimization'
            ],
            technologies: ['Google Analytics', 'SEMrush', 'Hootsuite', 'Mailchimp']
        },
        support: {
            title: '24/7 Technical Support',
            icon: '🛡️',
            description: 'Proactive, round-the-clock technical guardianship.',
            keyFeatures: [
                'Instant Ticket Resolution',
                'Performance Monitoring',
                'Security Audits',
                'Continuous Improvement'
            ],
            technologies: ['Zendesk', 'PagerDuty', 'Datadog', 'New Relic']
        }
    };

    // Animate service details
    function animateServiceDetails(service) {
        const details = serviceDetails[service];
        
        detailsContainer.innerHTML = `
            <div class="service-details-content animate-spawn">
                <div class="service-header">
                    <span class="service-icon">${details.icon}</span>
                    <h2>${details.title}</h2>
                </div>
                <p class="service-description">${details.description}</p>
                
                <div class="service-features">
                    <h3>Key Features</h3>
                    <ul>
                        ${details.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="service-technologies">
                    <h3>Technologies</h3>
                    <div class="tech-stack">
                        ${details.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // Add click event to service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active state from all cards
            serviceCards.forEach(c => c.classList.remove('active'));
            
            // Add active state to clicked card
            card.classList.add('active');
            
            // Get service type from data attribute
            const serviceType = card.getAttribute('data-service');
            
            // Animate and show service details
            animateServiceDetails(serviceType);
        });
    });

    // Initial load with development service
    animateServiceDetails('development');

    // Keygen-style console log
    console.log(`
    ╔══════════════════════════════════════════╗
    ║ F3V3R DR34M: SERVICE INTERACTION ENGAGED ║
    ╚══════════════════════════════════════════╝
    `);
});
