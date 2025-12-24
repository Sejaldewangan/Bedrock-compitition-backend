import express from 'express'
import { configDotenv } from 'dotenv'
import connectDB from './source/configs/dbConfig.js'
import allRoutes from './source/routes/allroutes.routes.js'
 
configDotenv()

const app = express()

app.use(express.json())
app.use('/api', allRoutes)
app.get("/", (req, res) => {
    res.json("good working")
})

const port = process.env.PORT || 10000

app.listen(port, () => {
    console.log("server is runing on port " + port)
})

connectDB()