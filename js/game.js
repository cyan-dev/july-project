"use strict";

let money = 0

let mainDiv = document.getElementById('maindiv');

let moneyDisplay = document.createElement('p');
moneyDisplay.textContent = money + ' pc';
mainDiv.appendChild(moneyDisplay);

let enemy = document.createElement('img');
enemy.id = 'mlurg'
enemy.src = './media/img/murloc.gif';
enemy.alt = 'murloc';
mainDiv.appendChild(enemy);

function addMoney(money, moneyDisplay) {
    money += 1;
    moneyDisplay.textContent = money + ' pc';

    return money;
}

let test = true

function suffer() {
    enemy.style.transform = 'translate(-55%, -50%)';
    setTimeout(() => {
        enemy.style.transform = 'translate(-45%, -50%)';
        setTimeout(() => {
            enemy.style.transform = 'translate(-50%, -50%)';
        }, 100);
    },100);
}

function listenClickOnMurlock() {
    enemy.onclick = () => {
        enemy.onclick = null
        suffer()
        setTimeout(() => {
            money = addMoney(money, moneyDisplay);
            listenClickOnMurlock();
        }, 1000);
    }
}

listenClickOnMurlock()