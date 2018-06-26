"use strict";

function waitTime(time /*temps en millisecondes*/) {
    let start = Date.now();

    var e = new Event('wakeUp');

    while(Date.now() < start + time) {

    }
    
    window.dispatchEvent(e);
}
