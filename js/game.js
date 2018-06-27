"use strict";

let money = 0;

let mainDiv = document.getElementById('maindiv');

let moneyDisplay = document.createElement('p');
moneyDisplay.textContent = money + ' pc';
mainDiv.appendChild(moneyDisplay);

let enemy = document.createElement('img');
enemy.id = 'mlurg';
enemy.src = './media/img/murloc.gif';
enemy.alt = 'murloc';
mainDiv.appendChild(enemy);

function addMoney(money, moneyDisplay) {
    /*
    Cette fonction ajoute 1 pièce de cuivre au compteur de monnaie et gère 
    l'affichage du compteur de pièce en conséquences.
    */
    money += 1;
    moneyDisplay.textContent = money + ' pc';

    return money;
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
        enemy.onclick = null;
        suffer();
        setTimeout(() => {
            money = addMoney(money, moneyDisplay);
            listenClickOnMurloc();
        }, 1000);
    }
}

listenClickOnMurloc();