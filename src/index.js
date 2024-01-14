import dotenv from 'dotenv'
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import express from 'express'
dotenv.config({
    path:'./env'
})
const port=process.env.PORT || 8000
const app=express()
connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is listening on port:${port}`)
    })
})
.catch((err)=>{
    console.log(`MongoDB connection error:`,err);
})
