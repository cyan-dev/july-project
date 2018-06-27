"use strict";

let clockEvent = new Event('clock');

setInterval(() => {
    window.dispatchEvent(clockEvent);
}, 50);
