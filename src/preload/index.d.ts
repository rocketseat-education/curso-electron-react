import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  export interface Window {
    electron: ElectronAPI

    api: {
      getPages(): Promise<{ name: string; path: string }[]>
    }
  }
}
