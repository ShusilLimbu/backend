
class ApiError extends Error{
    constructor(statusCode,message="Something Went Wrong",errors=[],statck){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.errors=errors
        this.success=false
        this.message=message
        
    }
}