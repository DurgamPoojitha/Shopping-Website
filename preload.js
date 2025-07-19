const electron = require("electron");
const ContextBridge = electron.contextBridge;
const IPCRenderer = electron.ipcRenderer;

ContextBridge.exposeInMainWorld("backend", {
    saveData: (data) => IPCRenderer.invoke('write-to-file', data),
    readData: () => IPCRenderer.invoke('read-file')
});