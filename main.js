const electron = require('electron');

const { app, dialog, BrowserWindow, ipcMain } = electron;
const exportToExcel = require('./fileSaver');

const path = require('path');

app.on('ready', _ => {
    let win = new BrowserWindow({
        height: 700, //@TODO: resize?
        width: 1200,
        resizable: true
    });

    win.loadURL('file://' + __dirname + '/src/index.html');
    win.setMenu(null);

    win.on('closed', _ => {
        win = null;
    });
});

ipcMain.on('save-dataset', (evt, locations) => {
    dialog.showSaveDialog({
        title: 'Save dataset...',
        defaultPath: `${app.getAppPath()}/datasets`,
        filters: [{
            name: 'Excel', extensions: ['xlsx']
        }]
    }, function(filename) {
        if (filename) {
            exportToExcel(locations, filename);
        }
    });
});