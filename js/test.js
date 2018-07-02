"use strict";

let moneySaved = window.localStorage.getItem('money');

var load = (money) => {
    if(moneySaved) {
        return Number(moneySaved);
    } else {
        return money;
    }
}

money = load(money);
displayMoney(money, ui.gold, ui.silver, ui.copper);


ui.saveMenu.onclick = () => {
    save(money);
}

var save = (money) => {
    window.localStorage.setItem('money', money);
}