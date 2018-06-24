const {app, BrowserWindow} = require('electron')

// Variable globale correspondant à la fenpetre principale
let mainWindow

function createWindow() {
    // Création de la fenêtre
    mainWindow = new BrowserWindow({width: 360, height: 640})

    // Assignation du index.html à la fenêtre
    mainWindow.loadFile('index.html')

    // Déférencement de la mainWindow lors de la fermeture.
    mainWindow.on('closed', () => {
        mainWindows = null
    })
}

// Quand l'app est completement chargé on crée la fenêtre
app.on('ready', createWindow)


// La suite concerne les Mac OS et leurs gestion particulière de la 
// fermeture des fenêtres
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
})