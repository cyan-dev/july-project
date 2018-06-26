"use strict";

function waitTime(time /*temps en millisecondes*/) {
    let start = Date.now();

    let e = new Event('wakeUp');

    var send = 800000
    while(Date.now() < start + time) {
        if(send === 800000) {
            send = 0;
            console.log(Math.floor((Date.now() - start) / time * 100) + '%');
        }
        else {
            send  += 1
        }
    }
    
    console.log(Math.floor((Date.now() - start) / time * 100) + '%');
    window.dispatchEvent(e);

}