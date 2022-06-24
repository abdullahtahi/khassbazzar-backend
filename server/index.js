const express=require("express")
const connectDb=require("./databaseconnect/connectDB")
const cors=require("cors")
const user=require("../server/routes/UserRoutes/UserRoutes")
const product=require("../server/routes/productRoutes/productRoutes")
const { response } = require("express")
var cookieParser = require('cookie-parser')

const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use((request,response,next)=>{
    response.setHeader( "Access-Control-Allow-Origin","*" );
    response.setHeader( "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    response.setHeader( "Access-Control-Allow-Methods","GET,POST,PATCH,DELETE" );

next();
});
// app.use("/static",express.static("uploads/"));
app.use("/khassbazzaruser",user);
app.use("/khassbazzarproduct",product);
const PORT = process.env.PORT || 5000;
connectDb();
app.listen(PORT ,()=>{console.log("Server is listening us at",PORT)})