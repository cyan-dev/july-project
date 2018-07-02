"use strict";

var game = Object();

game.money = 0;
game.floatMoney = 0;
game.cycle = 15;

game.addMoney = () => {
    game.money += 1;
}

/*  Mutateurs des metiers  */
game.lvlupJob = function(self) {
    self.lvlJob += 1;
    game.setProduction(self);
}

game.lvlupBuild = function(self) {
    self.lvlBuild += 1;
    game.setProduction(self);
}

game.setProduction = function(self) {
    self.production = (
        self.lvlJob * Math.pow(2, self.lvlBuild) / game.cycle
    );
}


/*  Instanciation des metiers  */
game.jobs = new Array()

document.addEventListener('load', () => {
    game.alchemy = new Job('alchimie');
    game.jobs.push('alchemy');

    game.archeology = new Job('archeologie');
    game.jobs.push('archeology');

    game.blacksmithing = new Job('forge');
    game.jobs.push('blacksmithing');

    game.cooking = new Job('cuisine');
    game.jobs.push('cooking');

    game.enchanting = new Job('enchantement');
    game.jobs.push('enchanting');

    game.engineering = new Job('ingenierie');
    game.jobs.push('engineering');

    game.firstAid = new Job('secourisme');
    game.jobs.push('firstAid');

    game.fishing = new Job('peche');
    game.jobs.push('fishing');

    game.herbalism = new Job('herboristerie');
    game.jobs.push('herbalism');

    game.inscription = new Job('caligraphie');
    game.jobs.push('inscription');

    game.jewelcrafting = new Job('joillerie');
    game.jobs.push('jewelcrafting');

    game.leatherworking = new Job('travail du cuir');
    game.jobs.push('leatherworking');

    game.mining = new Job('minage');
    game.jobs.push('mining');

    game.skinning = new Job('depecage');
    game.jobs.push('skinning');

    game.tailoring = new Job('couture');
    game.jobs.push('tailoring');
});
