"use strict";

function Job(name) {

    /*  Attributs  */
    this.name = name;   // nom
    this.lvlJob = 0;    // niveau de metier
    this.lvlBuild = 0;  // niveau du batiment

    this.production = null;
    game.setProduction(this);

    /*  Methodes  */
    this.work = function() {
        game.floatMoney += this.production * 100;
    }

}


window.addEventListener('clock', () => {
    game.jobs.forEach((job) => {
        game[job].work();
    })
    game.money += Math.floor(game.floatMoney / 100);
    game.floatMoney %= 100;
    ui.displayMoney(game.money);
});
