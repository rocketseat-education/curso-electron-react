import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: unknown
  }
}
