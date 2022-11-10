import { IPC } from '@shared/constants'

import {
  CreateDocumentResponse,
  DeleteDocumentArgs,
  GetAllDocumentsResponse,
  GetDocumentArgs,
  GetDocumentResponse,
  SaveDocumentArgs,
} from '@shared/types'

import { ipcRenderer } from 'electron'

export const api = {
  getDocuments(): Promise<GetAllDocumentsResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.GET_ALL)
  },
  getDocument(args: GetDocumentArgs): Promise<GetDocumentResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.GET, args)
  },
  createDocument(): Promise<CreateDocumentResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.CREATE)
  },
  saveDocument(args: SaveDocumentArgs) {
    return ipcRenderer.invoke(IPC.DOCUMENTS.SAVE, args)
  },
  deleteDocument(args: DeleteDocumentArgs) {
    return ipcRenderer.invoke(IPC.DOCUMENTS.DELETE, args)
  },
}
