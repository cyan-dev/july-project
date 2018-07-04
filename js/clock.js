"use strict";

var clock = new Object();
clock.event = new Event('clock');
clock.cycle = 100;
clock.id = null;

clock.swOn = (self) => {
    if(!self.id) {
        self.id = setInterval(() => {
            window.dispatchEvent(self.event);
        }, self.cycle);
        return true;
    } else return false;
}

clock.swOff = (self) => {
    if(self.id) {
        clearInterval(self.id);
        self.id = null;
        return true;
    } else return false;
}

setTimeout(() => {
    clock.swOn(clock);
}, 1000);