var murloc = Object();

/*
    ATTRIBUTS
*/
murloc.display = document.getElementById('mlurg');

/*
    METHODES
*/
murloc.suffer = (self) => {
    self.display.style.transform = 'translate(-55%, -50%)';
    setTimeout(() => {
        self.display.style.transform = 'translate(-45%, -50%)';
        setTimeout(() => {
            self.display.style.transform = 'translate(-50%, -50%)';
        }, 100);
    },100);
}

/*
    EVENEMENTS
*/
murloc.display.onclic = () => {
    self.suffer();
    money += 1;
    displayMoney(money, gold, silver, copper);
}