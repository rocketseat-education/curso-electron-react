import { ipcMain } from 'electron'
import { randomUUID } from 'node:crypto'
import { store } from '../database'
import { IPC } from '@shared/constants'
import {
  CreateDocumentResponse,
  DeleteDocumentArgs,
  GetAllDocumentsResponse,
  GetDocumentArgs,
  GetDocumentResponse,
  SaveDocumentArgs,
} from '@shared/types'

ipcMain.handle(
  IPC.DOCUMENTS.GET_ALL,
  async (): Promise<GetAllDocumentsResponse> => {
    return {
      data: Object.values(store.get('documents')),
    }
  },
)

ipcMain.handle(
  IPC.DOCUMENTS.GET,
  async (_, args: GetDocumentArgs): Promise<GetDocumentResponse> => {
    const { id } = args

    return {
      data: store.get(`documents.${id}`),
    }
  },
)

ipcMain.handle(
  IPC.DOCUMENTS.CREATE,
  async (): Promise<CreateDocumentResponse> => {
    const id = randomUUID()

    const documents = store.get('documents')

    const document = { id, title: 'Untitled' }

    documents[id] = document

    store.set('documents', documents)

    return {
      data: document,
    }
  },
)

ipcMain.handle(
  IPC.DOCUMENTS.SAVE,
  async (_, args: SaveDocumentArgs): Promise<void> => {
    const { id, title, content } = args

    store.set(`documents.${id}`, {
      id,
      title,
      content,
    })
  },
)

ipcMain.handle(
  IPC.DOCUMENTS.DELETE,
  async (_, args: DeleteDocumentArgs): Promise<void> => {
    const { id } = args

    // @ts-ignore (https://github.com/sindresorhus/electron-store/issues/196)
    store.delete(`documents.${id}`)
  },
)
