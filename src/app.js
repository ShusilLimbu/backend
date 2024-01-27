import express from 'express'
import cors from 'cors'
const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
    optionsSuccessStatus:200
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:trued,limit:"16kb"}))
app.use(express.static("public"))
