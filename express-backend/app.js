import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoute from './routes/postRoute.js'
import authRoute from './routes/authRoute.js'
import testRoute from './routes/testRoute.js'

dotenv.config()
const app = express()
app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))


app.use(express.json())
app.use(cookieParser())

app.use('/api/posts', postRoute)
app.use('/api/auth', authRoute)
app.use('/api/test', testRoute)


app.listen(8000, ()=>{
    console.log('app is listening on 8000')
})