"use strict";

// Gestion de la monnaie
let money = 0;
let gold = Array.from(document.getElementsByClassName('goldCount'));
let silver = Array.from(document.getElementsByClassName('silverCount'));
let copper = Array.from(document.getElementsByClassName('copperCount'));

// Main div
let mainDiv = document.getElementById('maindiv');

// Tabs
let swampTab = document.getElementById('swampTab');
let jobsTab = document.getElementById('jobsTab');
jobsTab.style.display = 'none';

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
    gold.forEach((coin) => {
        coin.textContent = Math.floor(money / 10000);
    });
    silver.forEach((coin) => {
        coin.textContent = Math.floor((money / 100) % 100);
    });
    copper.forEach((coin) => {
        coin.textContent = money % 100;
    });

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
    jobsTab.style.display = 'none';
    swampTab.style.display = 'flex';
}

jobsMenu.onclick = () => {
    swampTab.style.display = 'none';
    jobsTab.style.display = 'flex';
}

listenClickOnMurloc();