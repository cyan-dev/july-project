"use strict";

function waitTime(time /*temps en millisecondes*/) {
    let d = new Date();
<<<<<<< HEAD
    let limit = d.now() + time;

    var e = new Event('wakeUp');
=======
    let limit = d.getTime() + time;

    var e = new Event('wakeUp');

    while(d.getTime() < limit) {
>>>>>>> 305c279e1469b4362c364bd1b9a9c5b69d35d5c8

    while(d.now() < limit) {
    }
    
    window.dispatchEvent(e);
}