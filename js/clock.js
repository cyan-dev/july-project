"use strict";

var clock = Object();
clock.event = new Event('clock');
clock.cycle = 50;
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

document.onload = clock.swOn(clock);