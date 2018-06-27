function listenClickOnMurloc() {
    /*
    Cette fonction gère l'écoute de l'événement de click sur le Murloc
    */
    enemy.onclick = () => {
        //enemy.onclick = null;
        suffer();
        setTimeout(() => {
            money = addMoney(money, moneyDisplay);
            listenClickOnMurloc();
        }, 1000);
    }
}