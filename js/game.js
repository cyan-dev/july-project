"use strict";

let money = 0

let mainDiv = document.getElementById('maindiv');

let enemy = document.createElement('img');
enemy.src = './media/img/murloc.gif';
enemy.alt = 'murloc';

let moneyDisplay = document.createElement('p');
moneyDisplay.textContent = money + ' pc';
mainDiv.appendChild(moneyDisplay);

function addMoney(money, moneyDisplay) {
    money += 1;
    moneyDisplay.textContent = money + ' pc';

    return money;
}

mainDiv.appendChild(enemy);

function enemyEvent() {
    enemy.addEventListener('click', () => {
        let w = false;
        w = waitTime(1000);
        money = addMoney(money, moneyDisplay);
        if(w) {
            enemyEvent();
        }
    }, {once:true});
}

enemyEvent();