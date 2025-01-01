/*
 ╔══════════════════════════════════════════╗
 ║ VIRTUAL TALENT HUB - ELITE TALENT FORGE ║
 ╚══════════════════════════════════════════╝
 // Cracked by F3V3R DR34M Keygen Team 2024
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    // F3V3R DR34M Keygen Style Console Log
    console.log(`
    ╔══════════════════════════════════════════╗
    ║ VIRTUAL TALENT HUB - CONTACT PORTAL     ║
    ╚══════════════════════════════════════════╝
    // Cracked by F3V3R DR34M Keygen Team 2024
    `);

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value || 'Not Specified',
            serviceInterest: document.getElementById('service-interest').value,
            message: document.getElementById('message').value,
            newsletter: document.getElementById('newsletter').checked
        };

        try {
            // Simulate sending email (replace with actual email service)
            const response = await fetch('https://formspree.io/f/your_formspree_endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Success animation and message
                showSuccessNotification('Message sent successfully! We\'ll get back to you soon.');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            showErrorNotification('Oops! Something went wrong. Please try again.');
        }
    });

    // Success Notification
    function showSuccessNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification', 'success');
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 1000);
        }, 3000);
    }

    // Error Notification
    function showErrorNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification', 'error');
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 1000);
        }, 3000);
    }
});
