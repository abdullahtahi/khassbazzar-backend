const mongoose=require("mongoose");
const ConnectDB=async()=>{
    await mongoose.connect('mongodb://localhost:27017/khassbazaar',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((con)=>console.log("hey Abdullah! its me database , i am connected successfully to the database.thanks for that"))
  }
  module.exports=ConnectDB;
