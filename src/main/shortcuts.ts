import { app, globalShortcut } from 'electron'

app.whenReady().then(() => {
  app.on('browser-window-focus', () => {
    globalShortcut.register('CommandOrControl+N', () => {
      console.log('New documentt')
    })
  })

  app.on('browser-window-blur', () => {
    globalShortcut.unregisterAll()
  })
})
