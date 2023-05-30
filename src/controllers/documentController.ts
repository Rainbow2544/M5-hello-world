import { Request, Response } from 'express'
import * as documentService from '../services/documentService'

export const createOneDocument = async (req: Request, res: Response) => {
  try {
    const saveDocument = await documentService.createOneDocument(req.body);
    res.status(200).json(saveDocument);
  } catch (e) {
    res.status(404).json(e);
  }
};


export const getAllDocuments = async (req: Request, res: Response) => {
  try{
    const documents = await documentService.getAllDocuments()
    res.status(200).json(documents)
  } catch (e) {
    res.status(404).json(e);
  }
}

export const getOneDocument = async (req: Request, res: Response) => {
  const id = req.params.id
  
  try {
    const document = await documentService.getOneDocument(id)
    res.status(200).json(document)
  } catch (e) {
    res.status(404).json({"error":"The document cannot be found."})
  }
}

export const deleteOneDocument = async (req: Request, res: Response) => {
  const id = req.params.id
  
  try {
    await documentService.deleteOneDocument(id)
    res.status(200).json("Document has been deleted successfully.")
  } catch (e) {
    res.status(404).json({"error": "The document cannot be found."})
  }
}

export const updateOneDocument = async (req: Request, res: Response) => {
  const id = req.params.id
  
  try {
    const document = await documentService.updateOneDocument(id,req.body)
    res.status(200).json(document)
  } catch (e) {
    res.status(404).json({"error": "The document cannot be found."})
  }
}
