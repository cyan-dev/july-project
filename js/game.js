"use strict";

let money = 0

let mainDiv = document.getElementById('maindiv');

let moneyDisplay = document.createElement('p');
moneyDisplay.textContent = money + ' pc';
mainDiv.appendChild(moneyDisplay);

let enemy = document.createElement('img');
enemy.src = './media/img/murloc.gif';
enemy.alt = 'murloc';
mainDiv.appendChild(enemy);

function addMoney(money, moneyDisplay) {
    money += 1;
    moneyDisplay.textContent = money + ' pc';

    return money;
}

let test = true

function listenClickOnMurlock() {
    enemy.onclick = () => {
        enemy.onclick = null
        setTimeout(() => {
            money = addMoney(money, moneyDisplay);
            listenClickOnMurlock();
        }, 1000);
    }
}

listenClickOnMurlock()