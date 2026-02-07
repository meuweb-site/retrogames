
const games = [
    { title: 'Super Mario World', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/mario.webp', url: 'games/super-mario-world.html' },
    { title: 'Mario Kart Deluxe', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/mario-kart.webp', url: 'games/mario-kart.html' },
    { title: 'Crash Team Racing', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/ctr.webp', url: 'sony/playstation-1/ctr.html' },
    { title: 'Harry Potter And The Sorcerers Stone', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/hp-stone.webp', url: 'games/hp-sorcerer-stone.html' },
    { title: 'Harry Potter and the Chamber of Secrets', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/hp-chamber.webp', url: 'games/hp-chamber-of-secrets.html' },
    { title: 'Donkey Kong Country', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/dkc.webp', url: 'games/donkey-kong-country.html' },
    { title: 'Donkey Kong Country 2: Diddy\'s Kong Quest', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/dkc-2.webp', url: 'games/donkey-kong-country-2.html' },
    { title: 'Donkey Kong Country 3', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/dkc-3.webp', url: 'games/donkey-kong-country-3.html' },
    { title: 'PES 2', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/pes2.png', url: 'games/PES-2.html' },
    { title: 'Pac-Man', company: 'arcade', console: 'Fliperama', image: 'assets/images/pac.png', url: 'games/pac-man.html' },
    { title: 'Donkey Kong', company: 'arcade', console: 'Fliperama', image: 'assets/images/dk.webp', url: 'games/donkey-kong.html' },
    { title: 'Dragon Ball Z - Final Bout', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/db-gt-fb.png', url: 'games/db-gt-final-bout.html' },
    { title: 'Top Gear', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/top-gear.png', url: 'games/top-gear.html' },
    { title: 'Top Gear 2', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/top-gear-2.webp', url: 'games/top-gear-2.html' },
    { title: 'F-Zero', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/f-zero.png', url: 'games/f-zero.html' },
    { title: 'Super Ghoulsn Ghosts', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/super-ghouls.png', url: 'games/super-ghouls-n-ghost.html' },
    { title: 'Sunset Riders', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/sunset-riders.png', url: 'games/sunset-riders.html' },
    { title: 'Super Bomberman 4', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/super-bomb-4.png', url: 'games/super-bomb-4.html' },
    { title: 'Vigilante 8 - 2nd Offense', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/vigilante-8.webp', url: 'games/vigilante-8-2nd-ofense.html' },
    { title: 'Mario Kart 64', company: 'nintendo', console: 'Nintendo 64', image: 'assets/images/mario-kart-64.png', url: 'games/mario-kart-64.html' },
    { title: 'Crash Bandicoot', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/crash-bandi.webp', url: 'sony/playstation-1/crash-bandicoot.html' },
    { title: 'Michael Jackson Moonwalker', company: 'sega', console: 'Master System', image: 'assets/images/mj-moonwalker.png', url: 'games/mj-moonwalker.html' },
    { title: 'Super Monaco GP', company: 'sega', console: 'Mega Drive', image: 'assets/images/super-monaco-gp.webp', url: 'games/super-monaco-gp.html' },
    { title: 'Pokemon FireRed', company: 'nintendo', console: 'Gameboy Advance', image: 'assets/images/pokemon-fr.png', url: 'games/pokemon-fr.html' },
    { title: 'Top Gear 3000', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/tg3000.webp', url: 'games/top-gear-3000.html' },
    { title: 'International Superstar Soccer Deluxe', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/internacional-superstar-soccer-deluxe.png', url: 'games/international.html' },
    { title: 'Futebol Brasileiro 96', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/futebol-brasileiro-96.webp', url: 'games/futebol-brasileiro-96.html' },
    { title: 'Road Rash - Jailbreak', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/road-rash-jailbreak.png', url: 'games/road-rash-jailbreak.html' },
    { title: 'Goof Troop', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/goof-troop.png', url: 'games/goof-troop.html' },
    { title: 'Rock N Roll Racing', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/rock-n-roll-racing.png', url: 'games/rock-n-roll-racing.html' },
    { title: 'Sicari 2: The Brink of Time', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/sicari2.png', url: 'games/sicari-2-the-brink-of-time.html' },
    { title: 'Tekken 3', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/tekken3.webp', url: 'games/tekken-3.html' },
    { title: 'Sonic', company: 'sega', console: 'Master System', image: 'assets/images/sonic.webp', url: 'games/sonic-the-headgehog.html' },
    { title: 'Sonic 2', company: 'sega', console: 'Master System', image: 'assets/images/sonic2.webp', url: 'games/sonic-the-headgehog-2.html' },
    { title: 'Tony Hawks Pro Skater', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/tony.webp', url: 'games/tony-hawks-pro-skater.html' },
    { title: 'Tony Hawks Pro Skater 2', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/tony2.webp', url: 'games/tony-hawks-pro-skater-2.html' },
    { title: 'Tony Hawks Pro Skater 3', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/tony3.webp', url: 'games/tony-hawks-pro-skater-3.html' },
    { title: 'Tony Hawks Pro Skater 4', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/tony4.webp', url: 'games/tony-hawks-pro-skater-4.html' },
    { title: 'Prince of Persia', company: 'sega', console: 'Master System', image: 'assets/images/prince-of-persia.webp', url: 'games/prince-of-persia.html' },
    { title: '007 - The World Is Not Enough', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/007-twine.webp', url: 'sony/playstation-1/007-the-world-is-not-enough.html' },
    { title: 'Spider-Man', company: 'sony', console: 'Playstation 1', image: 'assets/images/spider-man.webp', url: 'games/spider-man.html' },
    { title: 'Aladdin', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/nintendo/SNES/aladdin.webp', url: 'nintendo/SNES/aladdin.html' },
    { title: 'Turma da Monica: O Resgate', company: 'sega', console: 'Master System', image: 'assets/images/turma-da-monica.webp', url: 'games/turma-da-monica-o-resgate.html' },
    { title: 'Super Smash Bros', company: 'nintendo', console: 'Nintendo 64', image: 'assets/images/super-smash-bros.webp', url: 'games/super-smash-bros.html' },
    { title: 'Final Fantasy Chronicles - Chrono Trigger', company: 'sony', console: 'Playstation 1', image: 'assets/images/ff-chrono.webp', url: 'games/final-fantasy-chronicles-chrono-trigger.html' },
    { title: 'Speedy Gonzales in Los Gatos Bandidos', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/ligeirinho.webp', url: 'games/speedy-gonzales-in-los-gatos-bandidos.html' },
    { title: 'Disneys Hercules', company: 'sony', console: 'Playstation 1', image: 'assets/images/sony/playstation-1/disneys-hercules.webp', url: 'games/disneys-hercules.html' },
    { title: 'Mercs', company: 'arcade', console:'Fliperama', image: 'assets/images/mercs.webp', url: 'games/mercs.html' },
    { title: 'Harvest Moon - Back to Nature', company: 'sony', console: 'Playstation 1', image: 'assets/images/harvest-moon.webp', url: 'games/harvest-moon.html' },
    { title: 'Super Star Wars', company: 'nintendo', console: 'Super Nintendo', image: 'assets/images/super-star-wars.webp', url: 'games/super-star-wars.html' },
    { title: 'Final Fight', company: 'arcade', console:'Fliperama', image: 'assets/images/final-fight-arcade.webp', url: 'games/final-fight-arcade.html' },
    { title: 'Jojo\'s Bizarre Adventure', company: 'sony', console: 'Playstation 1', image: 'assets/images/jojo.webp', url: 'games/jojo-s-bizarre-adventure.html' },
    { title: 'Teenage Mutant Ninja Turtles', company: 'arcade', console:'Fliperama', image: 'assets/images/teenage-mutant-ninja-turtles.webp', url: 'games/teenage-mutant-ninja-turtles.html' },
    { title: 'Space Invaders', company: 'arcade', console:'Fliperama', image: 'assets/images/space-invaders.webp', url: 'games/space-invaders.html' },
    { title: 'Diddy Kong Racing', company: 'nintendo', console: 'Nintendo 64', image: 'assets/images/diddy-kong-racing.webp', url: 'games/diddy-kong-racing.html' },
    { title: 'Marvel Vs Capcom', company: 'arcade', console:'Fliperama', image: 'assets/images/marvel-vs-capcom.webp', url: 'games/marvel-vs-capcom.html' },
    { title: 'Toy Story 2 - Buzz Lightyear to the Rescue!', company: 'nintendo', console:'Nintendo 64', image: 'assets/images/nintendo/N64/toy-story-2.webp', url: 'nintendo/N64/toy-story-2-buzz-lightyear-to-the-rescue.html' },
    { title: 'Bust-A-Move', company: 'nintendo', console:'Super Nintendo', image: 'assets/images/nintendo/SNES/bust-a-move.webp', url: 'nintendo/SNES/bust-a-move.html' },
    { title: 'Cartoon Network Racing', company: 'nintendo', console:'Nintendo DS', image: 'assets/images/nintendo/Nintendo-DS/cartoon-network-racing.webp', url: 'nintendo/Nintendo-DS/cartoon-network-racing.html' },
    { title: 'Choplifter III - Rescue Survive', company: 'nintendo', console:'Super Nintendo', image: 'assets/images/nintendo/SNES/choplifter-III.webp', url: 'nintendo/SNES/choplifter-III.html' },
    { title: 'The Lion King', company: 'nintendo', console:'Super Nintendo', image: 'assets/images/nintendo/SNES/the-lion-king.webp', url: 'nintendo/SNES/the-lion-king.html' },
    { title: 'Twisted Metal: Small Brawl', company: 'sony', console:'Playstation 1', image: 'assets/images/sony/playstation-1/twisted-metal-small-brawl.webp', url: 'sony/playstation-1/twisted-metal-small-brawl.html' },
    { title: 'Lamborghini: American Challenge', company: 'nintendo', console:'Super Nintendo', image: 'assets/images/nintendo/SNES/lamborghini-american-challenge.webp', url: 'nintendo/SNES/lamborghini-american-challenge.html' },
    { title: 'The Legend of The Mystical Ninja', company: 'nintendo', console:'Super Nintendo', image: 'assets/images/nintendo/SNES/the-legend-of-the-mystical-ninja.webp', url: 'nintendo/SNES/the-legend-of-the-mystical-ninja.html' },
    { title: 'Jackie Chan Stuntmaster', company: 'sony', console:'Playstation 1', image: 'assets/images/sony/playstation-1/jackie-chan-stuntmaster.webp', url: 'sony/playstation-1/jackie-chan-stuntmaster.html' },
    { title: 'Harry Potter and the Sorcerer\'s Stone', company: 'nintendo', console:'Game Boy Color', image: 'assets/images/nintendo/GBC/hp-and-the-sorcerers-stone-gbc.webp', url: 'nintendo/GBC/harry-potter-and-the-sorcerers-stone.html' },
    { title: 'Demolition Man', company: 'nintendo', console:'Super Nintendo', image: 'assets/images/nintendo/SNES/demolition-man.webp', url: 'nintendo/SNES/demolition-man.html' },
    { title: 'Space Jam', company: 'sony', console:'Playstation 1', image: 'assets/images/sony/playstation-1/space-jam.webp', url: 'sony/playstation-1/space-jam.html' },
    { title: 'GTA 2', company: 'sony', console:'Playstation 1', image: 'assets/images/sony/playstation-1/gta-2.webp', url: 'sony/playstation-1/gta-2.html' },
    { title: 'Donkey Kong Racing', company: 'nintendo', console:'Nintendo 64', image: 'assets/images/nintendo/N64/donkey-kong-racing.webp', url: 'nintendo/N64/donkey-kong-racing.html' },
    { title: 'Crash Bash', company: 'sony', console:'Playstation 1', image: 'assets/images/sony/playstation-1/crash-bash.webp', url: 'sony/playstation-1/crash-bash.html' },
    { title: 'Duke Nukem: Time to Kill', company: 'sony', console:'Playstation 1', image: 'assets/images/sony/playstation-1/duke-nukem-time-to-kill.webp', url: 'sony/playstation-1/duke-nukem-time-to-kill.html' },
];

let currentFilter = 'all';

function renderGames() {
    const grid = document.getElementById('gamesGrid');
    const filteredGames = currentFilter === 'all'
        ? games
        : games.filter(game => game.company === currentFilter);

    grid.innerHTML = filteredGames.map(game => `
                <div class="game-card" onclick="openGame('${game.url}')">
                    <div class="game-image">
                        <img src="${game.image}" alt="${game.title}" class="game-img">
                    </div>
                    <div class="game-title">${game.title}</div>
                    <div class="game-console">${game.console}</div>
                </div>
            `).join('');
}

function filterGames(console) {
    currentFilter = console;
    renderGames();

    // Remove a classe active de todos os itens
    document.querySelectorAll('.nav-menu li').forEach(li => {
        li.classList.remove('active');
    });
    event.target.classList.add('active');

    // Fecha o menu hamburguer em telas móveis
    const navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}

function openGame(url) {
    window.open(url, '_blank');
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    }
}

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

renderGames();

// Reading Bar / Barra de Leitura Horizontal
window.onscroll = function() {
    const readingEl = document.getElementById("readingBar");
    if (!readingEl) return;

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = 0;

    if (height > 0) {
        scrolled = (winScroll / height) * 100;
        if (!isFinite(scrolled) || isNaN(scrolled)) scrolled = 0;
    }

    readingEl.style.width = scrolled.toFixed(2) + "%";
};

// Back to Top Button / Botão Voltar ao Topo
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// End Reading Bar / Fim Barra de Leitura Horizontal

// Search Games / Buscar Jogos
function searchGames() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const grid = document.getElementById('gamesGrid');

    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(filter) &&
        (currentFilter === 'all' || game.console === currentFilter)
    );

    grid.innerHTML = filteredGames.map(game => `
                <div class="game-card" onclick="openGame('${game.url}')">
                    <div class="game-image">
                        <img src="${game.image}" alt="${game.title}" class="game-img">
                    </div>
                    <div class="game-title">${game.title}</div>
                    <div class="game-console">${game.console}</div>
                </div>
            `).join('');
}
// End Search Games / Fim Buscar Jogos