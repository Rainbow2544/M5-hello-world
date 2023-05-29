import Document from '../models/Document'
import {DocumentType} from '../types/Document'

let documents = [
  { 
    id: 1,
    message: "hello world" 
  },
]

export function isDocumentType(obj: any): obj is DocumentType {
  return typeof obj === "object" && obj !== null && "message" in obj && typeof obj.message === "string";
}

export const createOneDocument = async (body:DocumentType) => {
  if (!isDocumentType(body)) {
    throw ({"error": "Please input correct document format."});
  }

  const newDocument = new Document(body)

  const saveDocument = await newDocument.save()
  return saveDocument
}

export const getAllDocuments = async () => {
  const documents = Document.find();
  return documents
}

export const getOneDocument = async (id:string) => {
  const matchedDocument = Document.find({_id: id})
  return matchedDocument
}



