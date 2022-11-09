import { app, Tray, Menu, nativeImage } from 'electron'
import path from 'node:path'

app.whenReady().then(() => {
  const icon = nativeImage.createFromPath(
    path.resolve(__dirname, 'rotionTemplate.png'),
  )

  const tray = new Tray(icon)

  const contextMenu = Menu.buildFromTemplate([
    { icon, label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar nova página',
      click() {
        console.log('Novo documento')
      },
    },
    { type: 'separator' },
    { label: 'Recentes', enabled: false },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+1',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Ignite',
      accelerator: 'CommandOrControl+2',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Arquitetura back-end',
      accelerator: 'CommandOrControl+3',
      acceleratorWorksWhenHidden: false,
    },
    { type: 'separator' },
    {
      label: 'Sair do Rotion',
      role: 'quit',
    },
  ])

  tray.setContextMenu(contextMenu)
})
