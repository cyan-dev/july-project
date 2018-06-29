const {app, BrowserWindow} = require('electron');

// Variable globale correspondant à la fenpetre principale
let mainWindow;

function createWindow() {
    // Création de la fenêtre
    mainWindow = new BrowserWindow({
        width: 360, 
        height: 640
    });

    // Rend la fenêtre prioritaire sur le reste de l'affichage
    // et retire la possibilité de changer sa taille
    mainWindow.setAlwaysOnTop(true);
    mainWindow.setResizable(false);

    // Assignation du index.html à la fenêtre
    mainWindow.loadFile('index.html');

    // Déférencement de la mainWindow lors de la fermeture.
    mainWindow.on('closed', () => {
        mainWindows = null;
    })
}

// Quand l'app est completement chargé on crée la fenêtre
app.on('ready', createWindow);


// La suite concerne les Mac OS et leurs gestion particulière de la 
// fermeture des fenêtres
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
})