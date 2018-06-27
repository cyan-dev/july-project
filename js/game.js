"use strict";

let money = 0;

let mainDiv = document.getElementById('maindiv');

let moneyDisplay = document.getElementById('money');

let enemy = document.getElementById('mlurg')

function addMoney(money) {
    /*
    Cette fonction retourne la quantité d'argent + 1
    */
    return money + 1;
}

function displayMoney(money, moneyDisplay) {
    let gold = Math.floor(money / 10000);
    let silver = Math.floor((money - gold*10000) / 100);
    let copper = money - gold*10000 - silver*100;

    moneyDisplay.textContent = 
            gold + ' po, ' 
            + silver + ' pa, ' 
            + copper + ' pc';
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
        displayMoney(money, moneyDisplay)
        listenClickOnMurloc();
    }
}

listenClickOnMurloc();