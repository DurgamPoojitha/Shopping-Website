const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;
const App = electron.app;
const path = require("path");
const Menu = electron.Menu;
const IPCMain = electron.ipcMain;
const fs = require('fs');

function createWindow() {
    let window = new BrowserWindow({
        title: "Shopping Website",
        width: 1400,
        height: 700,
        minHeight: 700,
        minWidth: 1400,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, "preload.js")
        }
    });
    
    Menu.setApplicationMenu(null);
    window.on('closed', () => {App.quit()});
    window.loadFile(path.join(__dirname, "views/credentials-page/log/index.html"));
}

App.whenReady().then(createWindow);

App.on('window-all-closed', () => {App.quit()});

App.on('activate', () => { if(BrowserWindow.getAllWindows().length===0) createWindow(); });

const filename = path.join(__dirname, "views/credentials-page/info/data");

IPCMain.handle('read-file', (event) => {
    const data = fs.readFileSync(filename, 'utf8');
    return data;
});

IPCMain.handle('write-to-file', (event, data) => {
    try {
        fs.writeFileSync(filename, data);
        return true;
    } catch(err) {
        console.log(err);
        return false;
    }
})