"use strict";

function Job(name) {

    /*  Attributs  */
    this.name = name;   // Nom
    this.lvlJob = 0;    // Niveau de metier
    this.lvlBuild = 0;  // Niveau du batiment
    this.goldToUp = 0;  // Besoin en gold pour monter de niveau
    this.itemsToUp = 0; // Besoin en item pour monter de niveau

    this.production = null;
    game.setProduction(this);

    /*  Methodes  */
    this.work = function() {
        game.floatMoney += this.production * 100;
    }

}
