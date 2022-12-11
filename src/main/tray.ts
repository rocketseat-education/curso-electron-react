import { app, Menu, Tray } from 'electron'
import path from 'node:path'

app.whenReady().then(() => {
  const tray = new Tray(path.resolve(__dirname, 'rotionTemplate.png'))

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    { type: 'checkbox', label: 'Ativar modo dark' },
    { label: 'Rotion' },
    { label: 'Rotion' },
    { label: 'Rotion' },
    { label: 'Rotion' },
  ])

  tray.setContextMenu(contextMenu)
})
