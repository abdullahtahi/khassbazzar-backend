const mongoose=require("mongoose")
const newproductSchema=new mongoose.Schema({
    productname:{
        type:String,
        message:["product name  is required "]
    },
    productslug:{
        type:String,
        message:["product slug is required"]
    },
    description:{
        type:String,
        message:["Description is required"]
    },
    price:{
        type:Number,
        message:["price is required"]
    },
    color:{
            type:String,
            message:["Color is required"]
        },
    fabric:{
            type:String,
            message:["fabric is required"]

        },
        catagory:{
            type:String,
            message:["catagory is required"]
        },
        img:{
            type:String,
            message:["image is required"]
        }
})
module.exports=mongoose.model("productnew",newproductSchema)