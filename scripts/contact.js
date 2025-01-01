/*
 ╔══════════════════════════════════════════╗
 ║ VIRTUAL TALENT HUB - ELITE TALENT FORGE ║
 ╚══════════════════════════════════════════╝
 // Cracked by F3V3R DR34M Keygen Team 2024
 */

document.addEventListener('DOMContentLoaded', () => {
    const talentRequestForm = document.getElementById('talentRequestForm');

    talentRequestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission (replace with actual backend logic)
        const formData = new FormData(talentRequestForm);
        const submissionData = Object.fromEntries(formData.entries());

        console.log('Talent Request Submitted:', submissionData);
        
        // Basic form validation
        if (validateForm(submissionData)) {
            alert('Talent Request Received! We will contact you soon.');
            talentRequestForm.reset();
        }
    });

    function validateForm(data) {
        const requiredFields = ['name', 'email', 'message'];
        for (let field of requiredFields) {
            if (!data[field] || data[field].trim() === '') {
                alert(`Please fill out the ${field} field.`);
                return false;
            }
        }
        return true;
    }

    // Form Interaction Animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#3498db';
            input.style.boxShadow = '0 0 10px rgba(52, 152, 219, 0.3)';
        });

        input.addEventListener('blur', () => {
            input.style.borderColor = '#ccc';
            input.style.boxShadow = 'none';
        });
    });

    // Submission Logging
    console.log(`
    ╔══════════════════════════════════════════╗
    ║ TALENT REQUEST SYSTEM INITIALIZED       ║
    ╚══════════════════════════════════════════╝
    // F3V3R DR34M Talent Acquisition Online
    `);
