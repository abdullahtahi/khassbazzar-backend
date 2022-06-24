const express=require("express")
const router=express.Router();
const {productimgController,uploadimage,newProductController,
    getproducts,getSingleproduct}=require("../../Controller/productController")
router.post("/newproductimg",uploadimage,productimgController)
router.route("/getproducts").get(getproducts);
router.route("/singleproduct/:id").get(getSingleproduct)
router.route("/newproduct").post(newProductController);
module.exports=router