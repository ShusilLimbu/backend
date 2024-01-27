import mongoose,{Schema} from 'mongoose'
import bycrypt from 'bycryptjs';
import jwt from 'jsonwebtoken'
const userSchema=Schema({
    username:{
        type:String,
        unique:true,
        index:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        unique:true,
        required:true

    },
    fullName:{
        type:String,
    },
    avatar:{
        type:String,
    },
    coverImage:{
        type:String
    },
    refreshToken:{
        type:String
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Vedio"
        }
    ]

},{timestamps:true})
userSchema.pre("save",async function(next){
    if(!this.isModified("password"))next()
    this.password=bycrypt.hash(this.password,10)
    next()
})
userSchema.methods.isPasswordCorrect=async function(password){
    return bycrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        fullname:this.fullName,
        email:this.email,
        username:this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
     )
}
userSchema.methods.generateRefreshToken=function(){
    return jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
     )
}

export default User=mongoose.models("User",userSchema)