const { ipcRenderer } = require('electron');

// @TODO: no hack global
window.saveDataset = function(locations) {
    ipcRenderer.send('save-dataset', locations);
};