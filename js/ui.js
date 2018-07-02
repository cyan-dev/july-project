var ui = Object();

/*
    ATTRIBUTS
*/
// Main div
ui.mainDiv = document.getElementById('maindiv');

// Monnaie
ui.gold = document.getElementById('goldCount');
ui.silver = document.getElementById('silverCount');
ui.copper = document.getElementById('copperCount');

// Onglets
ui.swampTab = document.getElementById('swampTab');
ui.jobsTab = document.getElementById('jobsTab');
ui.jobsTab.style.display = 'none';

// Murloc
ui.murlocDisplay = document.getElementById('mlurg');

// Menu
ui.swampMenu = document.getElementById('swamp');
ui.jobsMenu = document.getElementById('jobs');
ui.saveMenu = document.getElementById('test');

/*
    METHODES
*/
ui.displayMoney = (money) => {
    ui.gold.textContent = Math.floor(money / 10000);
    ui.silver.textContent = Math.floor((money / 100) % 100);
    ui.copper.textContent = money % 100;
}

/*
    EVENEMENTS
*/
ui.swampMenu.onclick = () => {
    ui.jobsTab.style.display = 'none';
    ui.swampTab.style.display = 'flex';
}

ui.jobsMenu.onclick = () => {
    ui.swampTab.style.display = 'none';
    ui.jobsTab.style.display = 'flex';
}