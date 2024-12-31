// F3V3R DR34M - C0NT4CT H4X
// CR4CK3D C0MMUN1C4T10N PR0T0C0L

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // H4X0R V4L1D4T10N M0D3
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // PR0 4L3RT - M3SS4G3 S3NT
        if (name && email && message) {
            alert('Message sent successfully! Our team will contact you soon.');
            contactForm.reset();
        } else {
            alert('ERROR: 1NV4L1D 1NPUT D3T3CT3D');
        }
    });
});
