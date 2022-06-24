const mongoose=require("mongoose");
const productimages=new mongoose.Schema({
        image:{
            filename:{
                type:String
            },
            path:{
                type:String
            }
        },
            hovimage:{
                filename:{
                    type:String
                },
                path:{
                    type:String
                }
        }

}) 
module.exports=mongoose.model("Productimg",productimages)
// {
// productname:"styleloan",
// productslug:"style-loan",
// description:"1 piece of style loan",
// price:"234"
// color:"pink"
// fabric:"cotton"
// catagory:"Women "
//     }