const mongoose=require("mongoose")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        message:["fullname is required"]
    },
    email:{
        type:String,
        message:["email is required"]  
    },
    password:{
        type:String,
        message:["password is required"]  
    },
    phonenumber:{
        type:Number,
        message:["phone number  is required"] 
    }   
})
userSchema.pre("save",async function(){
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password,10)
    
    }
})
userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
    }

userSchema.methods.getjwttoken=async function(){
    return await jwt.sign({id:this._id},"Abdullah")
}
module.exports= mongoose.model('User', userSchema);


// {
// fullname:"abdullah",
// email:"tahirabdullah801@gmail.com",
// password:"hesoyam002",
// phonenumber:03315531837

//  }
