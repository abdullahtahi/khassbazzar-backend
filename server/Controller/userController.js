const User=require("../Schema/UserSchema")
exports.CreateUser=async (request,response)=>{
    try {
const createuser=await User.create(request.body)
        response.status(200).json({
            success:true,
            message:"The user is created successfully",
            createuser
        })
    } catch (error) {
        console.log(error)
        
    }

}
exports.updatedata=async(request,response)=>{
try{
const userupdate=await User.findByIdAndUpdate(id,request.body)
response.status(200).json({
    success:true,
    message:"the user is updated"
})
}catch(error)
{

}
}
exports.login=async(request,response)=>{
try{
    const {email,password}=request.body;
    if(!email || !password ){
        return response.status(400).json({
            success:false,
            message:'please Enter a email and password'
        })
    }
    const loginuser=await User.findOne({email})
if(!loginuser)
{
    return response.status(400).json({
        success:false,
        message:"please register your self first"
    })

}

const isMatched=await loginuser.comparePassword (password)
// console.log(isMatched)
if(!isMatched){
return response.status(400).json({
    success:false,
    message:"the password is in correct"
})
}
const token=await loginuser.getjwttoken();

response.status(200).cookie("token",token,{httpOnly:true}).json({
success:true,
message:"the user is login successfully",
loginuser,
token
})
}catch(error)
{
    console.log(error)
}
}
exports.logout=async(request,response)=>{
   return response.status(200).cookie("token",null,{httpOnly:true,expires:new Date(Date.now())}).json({
    success:true,
    message:"successfully logged out"
    })
}
exports.mystate=async(request,response)=>{
const currentlylogin=await User.findById(request.user.id)
// console.log(currentlylogin) 

    response.status(200).json({
    success:true,
    message:" I am currently login",
    currentlylogin
})
}

