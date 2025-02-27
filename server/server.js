import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import 'dotenv/config'
import connectDB from './config/mangodb.js'
import { clerkwebhooks } from './controllers/webhooks.js'



//Intilize Express

const app = express() 


//connect db

await connectDB()

//Middlewares
app.use(cors())





//Routes
app.get('/',(req,res)=> res.send("API Working"))

app.post('/clerk', express.json(),clerkwebhooks)




//Port
const PORT = process.env.PORT || 5000



app.listen(PORT, ()=>{
    console.log(`Server is running on  ${PORT}`)
}) 

