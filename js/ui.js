var ui = Object();

/*
    MAIN DIV
*/
ui.mainDiv = document.getElementById('maindiv');

/*
    MONNAIE
*/
ui.gold = Array.from(document.getElementsByClassName('goldCount'));
ui.silver = Array.from(document.getElementsByClassName('silverCount'));
ui.copper = Array.from(document.getElementsByClassName('copperCount'));

/*
    TABS
*/
ui.swampTab = document.getElementById('swampTab');
ui.jobsTab = document.getElementById('jobsTab');

/*
    MURLOC
*/
ui.enemy = document.getElementById('mlurg');

/*
    MENU
*/
ui.swampMenu = document.getElementById('swamp');
ui.jobsMenu = document.getElementById('jobs');
ui.saveMenu = document.getElementById('test');