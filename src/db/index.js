import mongoose from 'mongoose'
import DB_NAME from '../constants.js'
const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB host:${connectionInstance.connection.host}`)
        console.log(process.env.MONGODB_URI)
    } catch (error) {
        console.log("MongoDB connection error",error)
        process.exit(1)
    }
    
}
export default connectDB

// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         throw error
//     }
//     catch(error){
//         console.log("Error:",error);
//         throw error
//     }

// })()