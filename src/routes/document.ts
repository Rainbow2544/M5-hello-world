import express from 'express'
import * as documentController from '../controllers/documentController'

const router = express.Router()

router.get('/', documentController.getAllDocuments)

// router.post('/', taskController.createOneTask)

router.get('/:id', documentController.getOneDocument)

// router.delete('/:id', taskController.deleteTask)

// router.put('/:id', taskController.updateTask)

// router.patch('/:id', taskController.updateTaskPartial)

export default router
