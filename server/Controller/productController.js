const Productimg=require("../Schema/productschema")
const productnew=require("../Schema/newProductSchema")
const fs=require("fs")
const multer=require("multer")
const { response } = require("express")
const upload=multer({
    dest:"uploads/"
})

exports.uploadimage=upload.array("photo",2);
exports.productimgController=async (request,response)=>{
    const filetype=request.files[0].mimetype;
    const reveraltype=filetype.split("/")[1]
    const newname=request.files[0].filename+"."+reveraltype
    // console.log("the file types",newname)
     fs.rename(`uploads/${request.files[0].filename}`,`uploads/${newname}`,function(){

})
const filetype1=request.files[1].mimetype;
const reveraltype1=filetype1.split("/")[1]
const newname1=request.files[1].filename+"."+reveraltype1
fs.rename(`uploads/${request.files[1].filename}`,`uploads/${newname1}`,function(){

})
    // console.log("the requestbody1",request.files[0]);
    // console.log("the reqquest body two",request.files[1]);


    try{

console.log(request.files[1])
        const newproduct=await Productimg.create({
            image:{
                filename:request.files[0].filename,
                path:request.files[0].path
            },
            hovimage:{
                filename:request.files[1].filename,
                path:request.files[1].path
            }


        })
        // console.log(newproduct)
    response.status(200).json({
        success:true,
        message:"the new product is created",
        newproduct
    })
}catch(error)
{
    console.log(error)
}
}

exports.newProductController=async(request,response)=>{
try {
    const product=await productnew.create(request.body)
    response.status(200).json({
        success:true,
        message:"The new product is created",
        product

    })
} catch (error) {
    
}
}
exports.getproducts=async (request,response)=>{
    try{
        const allproducts=await productnew.find()
    response.status(200).json(allproducts)
    }catch(error)
    {

    }
}
exports.getSingleproduct=async(request,response)=>{
const singleproduct=await productnew.findById(request.params.id)
    response.status(200).json({singleproduct})
}