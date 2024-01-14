

const asyncHandler=(fn)=>async(req,res,next)=>{
    try{
        await fn(req,res,next)
    }
    catch(error){
        res.status(error.code || 400).json({
            sucess:false,
            message:error.message
        })
    }

}
export {asyncHandler}