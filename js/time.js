"use strict";

function waitTime(time /*temps en millisecondes*/) {
    let d = new Date();
    let limit = d.now() + time;

    var e = new Event('wakeUp');

    while(d.now() < limit) {
    }
    
    window.dispatchEvent(e)
}