"use strict";

function waitTime(time /*temps en millisecondes*/) {
    d = new Date();
    limit = d.getTime() + time;

    var e = newEvent('wakeUp');

    while(d.getTime() < limit) {

    }
    
    window.dispatchEvent(e)
}