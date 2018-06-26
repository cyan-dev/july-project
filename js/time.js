"use strict";

function waitTime(time /*temps en millisecondes*/) {
    let start = Date.now();

    let e = new Event('wakeUp');

    let send = 800000
    while(Date.now() < start + time) {

    }
    return true;
}

function looptime(time) {
    while(true) {
        waitTime(time);
        console.log('clock : ' + time);
    }
}
