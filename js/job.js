"use strict";

function Job(idName, name) {

    /*  Attributs  */
    this.idName = idName;       // Nom en anglais
    this.name = name;           // Nom en francais
    this.lvlJob = 0;            // Niveau de metier
    this.lvlBuild = 0;          // Niveau du batiment
    this.goldToUpJob = 0;       // Besoin en gold pour monter de niveau
    this.itemsToUpJob = 0;      // Besoin en item pour monter de niveau
    this.goldToUpBuild = 0;     // Besoin en glod pour ameliorer le batiment
    this.itemsToUpBuild = 0;    // Besoin en item pour ameliorer le batiment
    this.production = 0;        // Production

    /*  Methodes  */
    this.work = function() {
        game.floatMoney += this.production * 100;
    }

    game.jobs.push(this.idName);
}
