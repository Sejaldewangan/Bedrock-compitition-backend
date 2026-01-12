import express from 'express'
import { configDotenv } from 'dotenv'
import connectDB from './source/configs/dbConfig.js'
import allRoutes from './source/routes/allroutes.routes.js'
import cors from 'cors'
 
configDotenv()

const app = express()

// Enable CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use('/api', allRoutes)
app.get("/", (req, res) => {
    res.json("good working")
})

const port = process.env.PORT || 6969

app.listen(port, () => {
    console.log("server is runing on port " + port)
})

connectDB()