"use strict";

let moneySaved = window.localStorage.getItem('money');

var load = (money) => {
    if(moneySaved) {
        return Number(moneySaved);
    } else {
        return money;
    }
}

game.money = load(game.money);
ui.displayMoney(game.money, ui.gold, ui.silver, ui.copper);


ui.saveMenu.onclick = () => {
    save(game.money);
}

var save = (money) => {
    window.localStorage.setItem('money', money);
}