const jwt=require("jsonwebtoken")
// const jwt=require("jsonwebtoken")
const User=require("../../Schema/UserSchema")
exports.isAuthenticated=async (request,response,next)=>{
    var {token}=request.cookies
    // console.log(request.cookies)
if(!token){
    return response.status(200).json({
        success:false,
        message:"user must be login first"
    })
}
const decoded=jwt.verify(token,"Abdullah")
// console.log(decoded)
request.user=await User.findById(decoded.id);
next();
}