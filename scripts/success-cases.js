/*
 ╔══════════════════════════════════════════╗
 ║ VIRTUAL TALENT HUB - ELITE TALENT FORGE ║
 ╚══════════════════════════════════════════╝
 // Cracked by F3V3R DR34M Keygen Team 2024
 */

document.addEventListener('DOMContentLoaded', () => {
    // F3V3R DR34M Keygen Style Console Log
    console.log(`
    ╔══════════════════════════════════════════╗
    ║ VIRTUAL TALENT HUB - SUCCESS STORIES    ║
    ╚══════════════════════════════════════════╝
    // Cracked by F3V3R DR34M Keygen Team 2024
    `);

    // Success Stories Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const successCards = document.querySelectorAll('.success-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            successCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('fade-in');
                }
            });
        });
    });

    // Testimonial Carousel
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });

        // Show current testimonial
        testimonials[index].classList.add('active');
    }

    nextButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    prevButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Hover Effects for Success Cards
    const successCardsHover = document.querySelectorAll('.success-card');
    successCardsHover.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
        });
    });

    // Success Cases Interaction Logging
    console.log(`
    ╔══════════════════════════════════════════╗
    ║ SUCCESS CASES TRACKING SYSTEM ONLINE    ║
    ╚══════════════════════════════════════════╝
    // F3V3R DR34M Victory Log Initialized
    `);
}); // Added closing parenthesis here
