import Document from '../models/Document'
import { DocumentType } from '../types/Document'

function isDocumentType(obj: any): obj is DocumentType {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'message' in obj &&
    typeof obj.message === 'string'
  )
}

export const createOneDocument = async (body: DocumentType) => {
  if (!isDocumentType(body)) {
    throw { error: 'Please input correct document format.' }
  }

  const newDocument = new Document(body)
  const saveDocument = await newDocument.save()
  return saveDocument
}

export const getAllDocuments = async () => {
  const documents = await Document.find()
  return documents
}

export const getOneDocument = async (id: string) => {
  const matchedDocument = await Document.findById(id).exec()

  if (!matchedDocument || matchedDocument === null) {
    throw { error: 'The document cannot be found.' }
  }
  return matchedDocument
}

export const deleteOneDocument = async (id: string) => {
  const deleteDocument = await Document.findByIdAndDelete(id)
  return deleteDocument
}

export const updateOneDocument = async (id: string, body: DocumentType) => {
  const updateDocument = await Document.findByIdAndUpdate(
    id,
    { $set: body },
    { new: true }
  )
  return updateDocument
}
