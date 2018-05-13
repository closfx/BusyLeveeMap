// JavaScript Document
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

var THREE = require('three');

// init win
let win;

function createWindow(){
	// Create browser window
	win = new BrowserWindow({
		show: true,
		frame: false,
		width: 1920,
		height: 1080,
		resizable: false
		
	});
	
	// Load index.html
	win.loadURL(url.format({
		pathname: 'index.html',
		protocol: 'file',
		slashes: true
	}));
	
	// Open devtools
	win.webContents.openDevTools();
	
	win.on('closed', () => {
		win = null;
	});
}

// Run creatre window function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
	if(process.platform !== 'darwin'){
		app.quit();
	}
});