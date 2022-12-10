import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async (_, params) => {
  console.log(params)

  return 'Hello World'
})
