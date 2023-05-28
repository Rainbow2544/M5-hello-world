import { Request, Response } from 'express'
import * as documentService from '../services/documentService'

export const getAllDocuments = (req: Request, res: Response) => {
  const documents = documentService.getAllDocuments()
  res.send(documents)
}

