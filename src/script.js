document.querySelectorAll('.table-container table').forEach(table => {
    table.classList.add('hidden');
});

var toggle = false;
var scrolled = false;

function handleScroll() {
    var scrollTop = window.scrollY;
    if (scrollTop > 20) {
        scrolled = true;
    } else {
        scrolled = false;
    }
    updateNav();
}

window.addEventListener("scroll", handleScroll);

function updateNav() {
    var nav = document.querySelector('header'); // Select the header instead of nav
    if (scrolled) {
        nav.className = 'fixed top-0 w-full transition-all duration-300 z-20 bg-black/50'; // Dark background
    } else {
        nav.className = 'fixed top-0 w-full transition-all duration-300 z-20 bg-transparent'; // Transparent background
    }
}

// Initial call to set the navigation state
updateNav();

function showTable(leagueId, button) {
    // Oculta todos los elementos <tbody>
    document.querySelectorAll('tbody').forEach(tbody => {
        tbody.classList.add('hidden');
    });

    // Muestra el <tbody> seleccionado
    const selectedTable = document.getElementById(leagueId);
    if (selectedTable) {
        selectedTable.classList.remove('hidden');

        // Renderizar los datos de la liga seleccionada
        const leagueName = leagueId.replace("league", "League "); // Convertir ID en nombre de liga
        renderLeagueData(leagueName, selectedTable);
    } else {
        console.error(`No table found with ID: ${leagueId}`);
    }

    // Manejo del estado "activo" en los botones
    document.querySelectorAll('.league-button').forEach(btn => {
        btn.classList.remove('active'); // Elimina el estado activo de todos los botones
    });

    // Agrega la clase "active" al botón seleccionado
    button.classList.add('active');
}


// Función para renderizar los datos de una liga específica
function renderLeagueData(leagueName, tableBody) {
    // Verifica si existen datos para la liga seleccionada
    const leaguePlayers = leagueData[leagueName];
    if (!leaguePlayers) {
        console.error(`No data found for league: ${leagueName}`);
        tableBody.innerHTML = '<tr><td colspan="4" class="text-center text-white">No data available</td></tr>';
        return;
    }

    // Limpia el contenido actual del <tbody>
    tableBody.innerHTML = '';

    // Agrega los jugadores con el diseño original intacto
    leaguePlayers.forEach((player, index) => {
        tableBody.innerHTML += `
        <tr class="${index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-700/30'} hover:bg-[#4facfe]/10 transition-all duration-300 text-white">
            <td class="px-6 py-4">${player.rank}</td>
            <td class="px-6 py-4 font-semibold">${player.name}</td>
            <td class="px-6 py-4">${player.country}</td>
            <td class="px-6 py-4">${player.points}</td>
            <td class="px-6 py-4">${player.wins}</td>
        </tr>
    `;
    });
}

function renderLeagueData(leagueName, tableBody) {
    // Verifica si existen datos para la liga seleccionada
    const leaguePlayers = leagueData[leagueName];
    if (!leaguePlayers) {
        console.error(`No data found for league: ${leagueName}`);
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-white">No data available</td>
            </tr>`;
        return;
    }

    // Limpia el contenido actual del <tbody>
    tableBody.innerHTML = '';

    // Agrega los jugadores con el diseño original intacto
    leaguePlayers.forEach((player, index) => {
        tableBody.innerHTML += `
            <tr class="${index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-700/30'} hover:bg-[#4facfe]/10 transition-all duration-300 text-white">
                <td class="px-6 py-4">${player.rank}</td>
                <td class="px-6 py-4 font-semibold">${player.name}</td>
                <td class="px-6 py-4">${player.country}</td>
                <td class="px-6 py-4">${player.points}</td>
                <td class="px-6 py-4">${player.wins}</td>
            </tr>
        `;
    });
}

// Show League A table by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showTable('leagueA', document.querySelector('.league-button')); // Pass the first button as the active button
});

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    menuButton.addEventListener('click', function () {
        const isMenuVisible = mobileMenu.classList.contains('block');

        if (isMenuVisible) {
            mobileMenu.classList.remove('block');
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('opacity-0');
            }, 300);
            menuIconOpen.classList.remove('hidden');
            menuIconOpen.classList.add('block');
            menuIconClose.classList.remove('block');
            menuIconClose.classList.add('hidden');
        } else {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.add('block');
                mobileMenu.classList.remove('opacity-0');
            }, 10);  // Small delay transition
            menuIconOpen.classList.remove('block');
            menuIconOpen.classList.add('hidden');
            menuIconClose.classList.remove('hidden');
            menuIconClose.classList.add('block');
        }
    });
});

ScrollReveal().reveal('.item', { delay: 250 });
ScrollReveal().reveal('.item', { duration: 500 });
ScrollReveal().reveal('.item', { delay: 375, reset: true });

// Is the same as...

ScrollReveal().reveal('.scroll-reveal', {
    delay: 375,
    duration: 700,
    reset: false
});

const recentMatches = [
    { id: 1, league: "Liga A", winner: { name: "SSJ_Goku_Master", score: 5 }, loser: { name: "VegetaPrince", score: 0 }, stake: 1000, date: "2023-06-20" },
    { id: 2, league: "Liga B", winner: { name: "KrillinWarrior", score: 5 }, loser: { name: "Tien_Master", score: 2 }, stake: 800, date: "2023-06-19" },
    { id: 3, league: "Liga A", winner: { name: "GohanScholar", score: 5 }, loser: { name: "CellPerfect", score: 3 }, stake: 1200, date: "2023-06-18" },
];

const leagueData = {
    "League A": [
        { rank: 1, name: "SSJ_Goku_Master", country: "Argentina", points: 2800, wins: 45 },
        { rank: 2, name: "VegetaPrince", country: "Brasil", points: 2750, wins: 42 },
        { rank: 3, name: "GohanScholar", country: "Chile", points: 2600, wins: 40 },
        { rank: 4, name: "TrunksTimeLord", country: "Paraguay", points: 2500, wins: 38 },
        { rank: 5, name: "PiccoloSensei", country: "Colombia", points: 2400, wins: 36 },
        { rank: 6, name: "FriezaEmperor", country: "Argentina", points: 2350, wins: 35 },
        { rank: 7, name: "CellPerfect", country: "Colombia", points: 2300, wins: 33 },
        { rank: 8, name: "BuuSagaHero", country: "Argentina", points: 2250, wins: 32 },
        { rank: 9, name: "BrolyLegend", country: "Chile", points: 2200, wins: 30 },
        { rank: 10, name: "GokuBlackRose", country: "Argentina", points: 2150, wins: 28 },
    ],
    "League B": [
        { rank: 1, name: "KrillinWarrior", country: "Argentina", points: 2000, wins: 40 },
        { rank: 2, name: "Tien_Master", country: "Chile", points: 1950, wins: 38 },
        { rank: 3, name: "YamchaWolf", country: "Argentina", points: 1900, wins: 36 },
        { rank: 4, name: "RoshiLegend", country: "Colombia", points: 1850, wins: 35 },
        { rank: 5, name: "ChiaotzuFighter", country: "Argentina", points: 1800, wins: 33 },
        { rank: 6, name: "VidelCity", country: "Chile", points: 1750, wins: 32 },
        { rank: 7, name: "Pan_GT", country: "Brasil", points: 1700, wins: 30 },
        { rank: 8, name: "UubStudent", country: "Colombia", points: 1650, wins: 28 },
        { rank: 9, name: "MarronFighter", country: "Argentina", points: 1600, wins: 26 },
        { rank: 10, name: "GotenksFusion", country: "Colombia", points: 1550, wins: 25 },
    ],
    "League C": [
        { rank: 1, name: "NailNamek", country: "Argentina", points: 1400, wins: 35 },
        { rank: 2, name: "ZarbonElite", country: "Argentina", points: 1350, wins: 33 },
        { rank: 3, name: "DodoriaForce", country: "Argentina", points: 1300, wins: 31 },
        { rank: 4, name: "CaptainGinyu", country: "Argentina", points: 1250, wins: 30 },
        { rank: 5, name: "JeicePower", country: "Argentina", points: 1200, wins: 28 },
        { rank: 6, name: "BurterSpeed", country: "Argentina", points: 1150, wins: 26 },
        { rank: 7, name: "RecoomeStrong", country: "Argentina", points: 1100, wins: 25 },
        { rank: 8, name: "GuldoTime", country: "Argentina", points: 1050, wins: 23 },
        { rank: 9, name: "RaditzSaiyan", country: "Argentina", points: 1000, wins: 22 },
        { rank: 10, name: "NappaElite", country: "Argentina", points: 950, wins: 20 },
    ],
};

let activeLeague = "League A";

document.getElementById('menu-toggle').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

function openPage(url) {
    window.open(url, '_blank'); // Opens the URL in a new tab
    // Alternatively, use window.location.href = url; to redirect in the same tab
}

const newsData = [
    {
        title: "Liga Profesional Online",
        date: "2024-12-14",
        excerpt: "LIGA PROFESIONAL ONLINE💥 En esta liga encontraras a los mejores jugadores de cada país midiendo su fuerza.",
        imageUrl: "https://via.placeholder.com/400x200", // Imagen de ejemplo
        link: "https://www.youtube.com/watch?v=kMsvzlDSFqg" // Replace with actual URL
    },
    {
        title: "Guías Para Budokai Tenkaichi 3",
        date: "2024-12-13",
        excerpt: "Estas Guías Se Enfocan En Enseñar Cómo Utilizar Y Activar La Técnica Contra Z De Forma Infinita, Contrarrestar Ataques..",
        imageUrl: "img/guia.png",
        link: "https://www.youtube.com/watch?v=x91HqxZm4Oc&ab_channel=MickyCoronel" // Replace with actual URL
    },
    {
        title: "Combos Y Jugadas",
        date: "2024-12-12",
        excerpt: "Estas Guías En Dragon Ball Z: Budokai Tenkaichi 3 Enseñan Diferentes Combos Y Jugadas Para Dominar Con El Personaje Cell..",
        imageUrl: "img/combos.jpg",
        link: "https://www.youtube.com/watch?v=btEc9mzsJf4" // Replace with actual URL
    },
];

const newsContainer = document.getElementById('news-container');
newsContainer.innerHTML = ''; // Clear the container before adding cards

newsData.forEach(news => {
    newsContainer.innerHTML += `
      <div class="border border-[#00f2fe]/30 rounded-lg p-6 bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all duration-300">
        <h3 class="text-xl font-semibold mb-2 text-white">${news.title}</h3>
        <p class="text-[#4facfe] text-sm mb-4">${news.date}</p>
        <img src="${news.imageUrl}" alt="${news.title}" class="w-full h-40 object-cover rounded-lg mb-4">
        <div class="flex justify-between items-center">
        <p class="text-gray-300 flex-grow">${news.excerpt}</p>
        <button class="text-[#00f2fe] font-semibold mt-4 hover:text-[#ff0080] transition-colors flex items-center" onclick="openPage('${news.link}')">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" class="inline ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
        </div>
    </div>
`;
});

// Function to open a new page
function openPage(url) {
    window.open(url, '_blank'); // Opens the URL in a new tab
}


// Function to render recent matches and league data
function renderData() {
    // Render recent matches
    const recentMatchesContainer = document.querySelector('.grid');
    recentMatchesContainer.innerHTML = '';
    recentMatches.forEach(match => {
        recentMatchesContainer.innerHTML += `
                    <div class="bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm border border-[#4facfe]/30 hover:border-[#ff0080]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,128,0.3)]">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-[#00f2fe]">${match.league}</span>
                            <span class="text-white text-sm">${match.date}</span>
                        </div>
                        <div class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <svg xmlns="http ://www.w3.org/2000/svg" class="w-4 h-4 text-[#ff0080] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span class="text-white font-semibold">${match.winner.name}</span>
                            </div>
                            <span class="text-[#00f2fe] font-bold">${match.winner.score}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-400">${match.loser.name}</span>
                            <span class="text-gray-400">${match.loser.score}</span>
                        </div>
                        <div class="mt-2 pt-2 border-t border-[#4facfe]/30">
                            <span class="text-[#ff0080] flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                                ${match.stake} Points
                            </span>
                        </div>
                    </div>
                `;
    });

    // Render league data
    const leagueTableBody = document.querySelector('tbody');
    leagueTableBody.innerHTML = '';
    leagueData[activeLeague].forEach((player, index) => {
        leagueTableBody.innerHTML += `
                <tr class="${index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-700/30'} hover:bg-[#4facfe]/10 transition-all duration-300 text-white">
                    <td class="px-6 py-4">${player.rank}</td>
                    <td class="px-6 py-4 font-semibold">${player.name}</td>
                    <td class="px-6 py-4">${player.points}</td>
                    <td class="px-6 py-4">${player.wins}</td>
                </tr>
            `;
    });
}

renderData();