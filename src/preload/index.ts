import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge } from 'electron'
import { api } from './api'

declare global {
  export interface Window {
    electron: typeof electronAPI
    api: typeof api
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
