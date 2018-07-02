"use strict";

let money = 0;

ui.jobsTab.style.display = 'none';

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
    ui.enemy.style.transform = 'translate(-55%, -50%)';
    setTimeout(() => {
        ui.enemy.style.transform = 'translate(-45%, -50%)';
        setTimeout(() => {
            ui.enemy.style.transform = 'translate(-50%, -50%)';
        }, 100);
    },100);
}

function listenClickOnMurloc() {
    /*
    Cette fonction gère l'écoute de l'événement de click sur le Murloc
    */
    ui.enemy.onclick = () => {
        //enemy.onclick = null;
        suffer();
        money = addMoney(money);
        displayMoney(money, ui.gold, ui.silver, ui.copper);
        listenClickOnMurloc();
    }
}

ui.swampMenu.onclick = () => {
    ui.jobsTab.style.display = 'none';
    ui.swampTab.style.display = 'flex';
}

ui.jobsMenu.onclick = () => {
    ui.swampTab.style.display = 'none';
    ui.jobsTab.style.display = 'flex';
}

listenClickOnMurloc();

/* ******************************************** */

var Game = () => {
    this.money = 0

    this.cuisine = new Job();
    this.peche = new Job();
    this.archeologie = new Job();
    this.secourisme = new Job();

    this.addMoney = (self) => {
        return self.money + 1;
    }
}