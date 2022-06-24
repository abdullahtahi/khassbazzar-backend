const express=require("express")
const {isAuthenticated}=require("../middleware/middleware")

const router=express.Router();
const {CreateUser,updatedata,login,logout,mystate,getSingleproduct}=require("../../Controller/userController")
router.route("/createuser").post(CreateUser);
router.route("/updateuser/:id").put(updatedata);
router.route("/userlogin").post(login);
router.route("/usermystate").get(isAuthenticated,mystate);
router.route("/userlogout").get(logout);

module.exports=router;