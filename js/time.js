"use strict";

function waitTime(time /*temps en millisecondes*/) {
    let d = new Date();
    let limit = d.getTime() + time;

    var e = new Event('wakeUp');

    while(d.getTime() < limit) {

    }
    
    window.dispatchEvent(e);
}