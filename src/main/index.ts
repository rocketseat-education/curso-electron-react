import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { prisma } from './lib/prisma'
import * as path from 'node:path'

import { IPC } from '@shared/constants'

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    minHeight: 400,
    width: 1120,
    height: 700,
    show: false,
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: {
      x: 20,
      y: 20,
    },
    backgroundColor: '#191622',
    autoHideMenuBar: true,
    ...(process.platform === 'linux'
      ? {
          icon: path.join(__dirname, '../../build/icon.png'),
        }
      : {}),
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()

    if (is.dev) {
      mainWindow.webContents.openDevTools({ mode: 'detach' })
    }
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  }

  ipcMain.handle(IPC.PAGES.GET_ALL, async () => {
    return await prisma.document.findMany()
  })
}

if (process.platform === 'linux') {
  app.disableHardwareAcceleration()
}

app.commandLine.appendSwitch('force-color-profile', 'srgb')

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
