/*
 ╔══════════════════════════════════════════╗
 ║ COMFY TALENT HUB - OUR PERSONAL SCRIPT  ║
 ╚══════════════════════════════════════════╝
 // Cracked by F3V3R DR34M Keygen Team 2024
 */

const southAmericanCountries = [
    { name: 'Brazil', flag: '🇧🇷', code: 'BR' },
    { name: 'Argentina', flag: '🇦🇷', code: 'AR' },
    { name: 'Chile', flag: '🇨🇱', code: 'CL' },
    { name: 'Colombia', flag: '🇨🇴', code: 'CO' },
    { name: 'Peru', flag: '🇵🇪', code: 'PE' },
    { name: 'Uruguay', flag: '🇺🇾', code: 'UY' },
    { name: 'Ecuador', flag: '🇪🇨', code: 'EC' }
];

const roles = [
    'Senior Virtual Assistant',
    'Tech Talent Coordinator',
    'Customer Success Manager',
    'Remote Work Specialist',
    'Global Talent Recruiter',
    'Project Management Expert',
    'Digital Solutions Architect'
];

const teamMemberPhotos = [
    'assets/photos/ceo1.png',
    'assets/photos/man1.png',
    'assets/photos/tele1.png',
    'assets/photos/tele2.png'
];

function generateName() {
    const firstNames = [
        'Ana', 'Carlos', 'Maria', 'João', 'Sofia', 'Pedro', 'Isabella', 
        'Miguel', 'Luisa', 'Rafael', 'Camila', 'Gabriel', 'Valentina'
    ];
    const lastNames = [
        'Silva', 'Santos', 'Oliveira', 'Rodriguez', 'Martinez', 'Fernandez', 
        'Pereira', 'Gonzalez', 'Costa', 'Morales', 'Rocha', 'Mendez'
    ];
    
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

function generateTeamMembers() {
    const teamGrid = document.getElementById('team-members');
    
    // Shuffle arrays to randomize selection
    const shuffledCountries = southAmericanCountries.sort(() => 0.5 - Math.random());
    const shuffledRoles = roles.sort(() => 0.5 - Math.random());
    const shuffledPhotos = teamMemberPhotos.sort(() => 0.5 - Math.random());
    
    for (let i = 0; i < shuffledPhotos.length; i++) {
        const country = shuffledCountries[i % shuffledCountries.length];
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('team-member');
        
        memberDiv.innerHTML = `
            <img src="${shuffledPhotos[i]}" alt="Team Member" class="team-member-image">
            <div class="team-member-info">
                <div class="team-member-name">${generateName()}</div>
                <div class="team-member-role">${shuffledRoles[i % shuffledRoles.length]}</div>
                <div class="team-member-country">
                    ${country.name} ${country.flag}
                </div>
            </div>
        `;
        
        teamGrid.appendChild(memberDiv);
    }
}

document.addEventListener('DOMContentLoaded', generateTeamMembers);
