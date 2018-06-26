"use strict";

function waitTime(time /*temps en millisecondes*/) {
    let start = Date.now();

    var e = new Event('wakeUp');

    while(Date.now() < start + time) {
        console.log(Math.floor((Date.now() - start) / time * 100) + '%')
    }
    
    window.dispatchEvent(e);

}