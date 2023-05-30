import express from 'express'
import * as documentController from '../controllers/documentController'

const router = express.Router()

router.get('/', documentController.getAllDocuments)

router.post('/', documentController.createOneDocument)

router.get('/:id', documentController.getOneDocument)

router.delete('/:id', documentController.deleteOneDocument)

router.put('/:id', documentController.updateOneDocument)


export default router
