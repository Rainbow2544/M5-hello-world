import { Request, Response } from 'express'
import * as documentService from '../services/documentService'

export const getAllDocuments = (req: Request, res: Response) => {
  const documents = documentService.getAllDocuments()
  res.send(documents)
}

export const getOneDocument = (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  
  try {
    const document = documentService.getOneDocument(id)
    res.send(document)
  } catch (e) {
    res.status(404).send(e)
  }
}

