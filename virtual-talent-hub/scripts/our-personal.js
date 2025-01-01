/*
 ╔══════════════════════════════════════════╗
 ║ COMFY TALENT HUB - OUR PERSONAL SCRIPT  ║
 ╚══════════════════════════════════════════╝
 // Cracked by F3V3R DR34M Keygen Team 2024
 */

const teamMemberData = [
    {
        photo: 'assets/photos/ceo1.png',
        name: 'Carlos Rodriguez',
        role: 'Chief Executive Officer',
        country: 'Argentina',
        flag: '🇦🇷'
    },
    {
        photo: 'assets/photos/man1.png',
        name: 'João Silva',
        role: 'Senior Tech Recruiter',
        country: 'Brazil',
        flag: '🇧🇷'
    },
    {
        photo: 'assets/photos/man2.png',
        name: 'Miguel Fernandez',
        role: 'Global Talent Coordinator',
        country: 'Colombia',
        flag: '🇨🇴'
    },
    {
        photo: 'assets/photos/tele1.png',
        name: 'Sofia Martinez',
        role: 'Customer Success Manager',
        country: 'Chile',
        flag: '🇨🇱'
    },
    {
        photo: 'assets/photos/tele2.png',
        name: 'Isabella Pereira',
        role: 'Remote Work Specialist',
        country: 'Uruguay',
        flag: '🇺🇾'
    },
    {
        photo: 'assets/photos/woman2.png',
        name: 'Valentina Morales',
        role: 'Project Management Expert',
        country: 'Peru',
        flag: '🇵🇪'
    },
    {
        photo: 'assets/photos/woman3.png',
        name: 'Camila Santos',
        role: 'Digital Solutions Architect',
        country: 'Ecuador',
        flag: '🇪🇨'
    }
];

function generateTeamMembers() {
    const teamSlider = document.getElementById('team-members');
    
    // Clear any existing content
    teamSlider.innerHTML = '';
    
    // Duplicate team members to create a continuous loop
    const extendedTeamData = [...teamMemberData, ...teamMemberData, ...teamMemberData];
    
    // Generate team members
    extendedTeamData.forEach((member) => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('team-member');
        
        memberDiv.innerHTML = `
            <img src="${member.photo}" alt="${member.name}" class="team-member-image">
            <div class="team-member-info">
                <div class="team-member-name">${member.name}</div>
                <div class="team-member-role">${member.role}</div>
                <div class="team-member-country">
                    <span>${member.country}</span> <span>${member.flag}</span>
                </div>
            </div>
        `;
        
        teamSlider.appendChild(memberDiv);
    });

    // Set CSS variable for total number of members
    teamSlider.style.setProperty('--total-members', teamMemberData.length.toString());
}

document.addEventListener('DOMContentLoaded', generateTeamMembers);
