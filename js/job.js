"use strict";

function Job(name) {

    /*  Attributs  */
    this.name = name;   // nom
    this.lvlJob = 0;    // niveau de metier
    this.lvlBuild = 0;  // niveau du batiment

    this.production = lvlJob * Math.pow(2, this.lvlBuild);


    /*  Methodes  */
    this.work = function() {
        console.debug('work ' + this.name);
    }

    this.lvlupJob = function() {
        this.lvlJob += 1;
    }

    this.lvlupBuild = function() {
        this.lvlBuild += 1;
    }
}

/*
window.addEventListener('clock', () => {
    r.forEach((job) => {
        window[job].work();
    })
});

var r = new Array();

var a = new Job('a'); r.push('a');
var b = new Job('b'); r.push('b');
var c = new Job('c'); r.push('c');
*/
