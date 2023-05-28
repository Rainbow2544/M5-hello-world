import express from 'express'
import documentRoutes from './routes/document'
import mongoose from 'mongoose'

//mongoose.connect("mongodb://mongo:27018/Samp_data");
const app = express()
app.use(express.json())

app.use('/api/documents', documentRoutes)

export default app
