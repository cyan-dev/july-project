"use strict";

var Job = new Object();
Job.initQTE = 20;
Job.workQTE = Job.initQTE;
Job.worked = 0;

Job.work = (self) => {
    if(self.workQTE === 1) {
        self.workQTE = self.initQTE;
        self.worked += 1;
        return 1;
    } else {
        self.workQTE -= 1;
        return 0;
    }
}

Job.showWork = (self) => {
    console.debug(self.worked);
}

Job.active = (self) => {
    if(self.work(self) == 1) {
        self.showWork(self);
    }
}

window.addEventListener("clock", function(e) {
    Job.active(Job);
});