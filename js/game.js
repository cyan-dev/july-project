"use strict";

let money = 0;
let gold = document.getElementById('goldCount');
let silver = document.getElementById('silverCount');
let copper = document.getElementById('copperCount');

let mainDiv = document.getElementById('maindiv');

let enemy = document.getElementById('mlurg')

function addMoney(money) {
    /*
    Cette fonction retourne la quantité d'argent + 1
    */
    return money + 1;
}

function displayMoney(money, gold, silver, copper) {
    gold.innerHTML = Math.floor(money / 10000);
    silver.innerHTML = Math.floor((money - gold*10000) / 100);
    copper.inerHTML = money - gold*10000 - silver*100;

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

listenClickOnMurloc();