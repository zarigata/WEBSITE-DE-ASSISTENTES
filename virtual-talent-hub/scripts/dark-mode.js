/*
 ╔══════════════════════════════════════════╗
 ║ VIRTUAL TALENT HUB - DARK MODE TOGGLE   ║
 ╚══════════════════════════════════════════╝
 // Cracked by F3V3R DR34M Keygen Team 2024
 */

document.addEventListener('DOMContentLoaded', () => {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌓 Toggle Dark Mode';
    document.body.appendChild(themeToggle);

    // Theme toggle functionality
    const toggleTheme = () => {
        const root = document.documentElement;
        
        if (document.documentElement.classList.contains('dark-mode')) {
            // Switch to Light Mode
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to Dark Mode
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    };

    // Add event listener to theme toggle button
    themeToggle.addEventListener('click', toggleTheme);

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark.matches)) {
        document.documentElement.classList.add('dark-mode');
    }

    // Listen for system theme changes
    systemPrefersDark.addListener((e) => {
        if (e.matches && !document.documentElement.classList.contains('dark-mode')) {
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else if (!e.matches && document.documentElement.classList.contains('dark-mode')) {
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Console Easter Egg
    console.log(`
    ╔══════════════════════════════════════════╗
    ║ DARK MODE SYSTEM INITIALIZED            ║
    ╚══════════════════════════════════════════╝
    // F3V3R DR34M Theme Cracking Complete
    `);
});
