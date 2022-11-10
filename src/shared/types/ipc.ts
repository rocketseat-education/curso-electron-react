export interface Document {
  id: string
  title: string
  content?: string
}

/**
 * Request
 */

export type SaveDocumentArgs = Document

export interface GetDocumentArgs {
  id: string
}

export interface DeleteDocumentArgs {
  id: string
}

/**
 * Response
 */

export interface GetAllDocumentsResponse {
  data: Document[]
}

export interface GetDocumentResponse {
  data: Document
}

export interface CreateDocumentResponse {
  data: Document
}
