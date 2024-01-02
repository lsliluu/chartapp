const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 280,
        height: 260,
        transparent: true
    })

    win.loadFile('src/windows/index.html')
}

app.whenReady().then(() => {
    createWindow()
})