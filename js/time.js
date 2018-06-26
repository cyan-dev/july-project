"use strict";

function waitTime(time /*temps en millisecondes*/) {
    let limit = Date.now() + time;

    var e = new Event('wakeUp');

    while(Date.now() < limit) {

    }
    
    window.dispatchEvent(e);
}
