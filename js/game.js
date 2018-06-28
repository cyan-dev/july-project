"use strict";

// Gestion de la monnaie
let money = 0;
let gold = document.getElementById('goldCount');
let silver = document.getElementById('silverCount');
let copper = document.getElementById('copperCount');

// Main div
let mainDiv = document.getElementById('maindiv');

// Tabs
let swampTab = document.getElementById('swampTab');
let jobsTab = document.getElementById('jobsTab');

// Murloc
let enemy = document.getElementById('mlurg');

// Menu
let swampMenu = document.getElementById('swamp');
let jobsMenu = document.getElementById('jobs');

function addMoney(money) {
    /*
    Cette fonction retourne la quantité d'argent + 1
    */
    return money + 1;
}

function displayMoney(money, gold, silver, copper) {
    gold.textContent = Math.floor(money / 10000);
    silver.textContent = Math.floor((money / 100) % 100);
    copper.textContent = money % 100;

}

function suffer() {
    /*
    Cette fonction gère l'animation du Murlock lorsqu'il prend un coup 
    (lorsqu'on clique dessus)
    */
    enemy.style.transform = 'translate(-55%, -50%)';
    setTimeout(() => {
        enemy.style.transform = 'translate(-45%, -50%)';
        setTimeout(() => {
            enemy.style.transform = 'translate(-50%, -50%)';
        }, 100);
    },100);
}

function listenClickOnMurloc() {
    /*
    Cette fonction gère l'écoute de l'événement de click sur le Murloc
    */
    enemy.onclick = () => {
        //enemy.onclick = null;
        suffer();
        money = addMoney(money);
        displayMoney(money, gold, silver, copper)
        listenClickOnMurloc();
    }
}

swampMenu.onclick = () => {
    jobsTab.hidden = true;
    swampTab.hidden = false;
}

jobsMenu.onclick = () => {
    swampTab.hidden = true;
    jobsTab.hidden = false;
}

listenClickOnMurloc();