import express from 'express'
import taskRoutes from './routes'
import mongoose from 'mongoose'

mongoose.connect("mongodb://mongo:27018/Samp_data");
const app = express()
app.use(express.json())

app.use('/api/tasks', taskRoutes)

export default app
