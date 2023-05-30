import express from 'express'
import documentRoutes from './routes/document'
import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL as string)
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => console.log(err));

const app = express()
app.use(express.json())

app.use('/api/documents', documentRoutes)

export default app
