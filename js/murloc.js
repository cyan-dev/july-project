var murloc = Object();

/*
    ATTRIBUTS
*/
murloc.display = ui.murlocDisplay;

/*
    METHODES
*/
murloc.suffer = () => {
    murloc.display.style.transform = 'translate(-55%, -50%)';
    setTimeout(() => {
        murloc.display.style.transform = 'translate(-45%, -50%)';
        setTimeout(() => {
            murloc.display.style.transform = 'translate(-50%, -50%)';
        }, 100);
    },100);
}

/*
    EVENEMENTS
*/
murloc.display.onclick = () => {
    murloc.suffer();
    game.addMoney();
    ui.displayMoney(game.money);
}