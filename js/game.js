"use strict";

var game = Object();

game.money = 0;
game.floatMoney = 0;
game.cycle = 20;

game.addMoney = function(amount) {
    if(!amount) {
        game.money += 1;
    } else {
        game.money += amount
    }
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

game.setGoldToUpJob = function(self) {
    self.goldToUp = (
        self.lvlJob + 1
    );
}

game.setItemToUpJob = function(self) {
    self.ItemToUp = (
        self.lvlJob + 1
    );
}

game.setGoldToUpBuild = function(self) {
    self.goldToUp = (
        self.lvlBuild + 1
    );
}

game.setItemToUpBuild = function(self) {
    self.ItemToUp = (
        self.lvlBuild + 1
    );
}

/*  Instanciation des metiers  */
game.jobs = new Array()

game.alchemy = new Job('alchemy', 'alchimie');
game.archeology = new Job('archeology', 'archeologie');
game.blacksmithing = new Job('blacksmithing', 'forge');
game.cooking = new Job('cooking', 'cuisine');
game.enchanting = new Job('enchanting', 'enchantement');
game.engineering = new Job('engineering', 'ingenierie');
game.firstAid = new Job('firstAid', 'secourisme');
game.fishing = new Job('fishing', 'peche');
game.herbalism = new Job('herbalism', 'herboristerie');
game.inscription = new Job('inscription', 'caligraphie');
game.jewelcrafting = new Job('jewelcrafting', 'joillerie');
game.leatherworking = new Job('leatherworking', 'travail du cuir');
game.mining = new Job('mining', 'minage');
game.skinning = new Job('skinning', 'depecage');
game.tailoring = new Job('tailoring', 'couture');

game.jobs.forEach((job) => {
    document.getElementById(job+'Plus').addEventListener('click', (e) => {
        game.lvlupJob(game[e.target.id.replace('Plus', '')]);
    });
});

window.addEventListener('clock', () => {
    game.jobs.forEach((job) => {
        game[job].work();
    })
    game.money += Math.floor(game.floatMoney / 100);
    game.floatMoney %= 100;
    ui.displayMoney(game.money);
});