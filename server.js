 
import express from "express";
import dotenv from "dotenv";
import connect from "./db/db.js";
import router from "./routes/auth.route.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"
import Property_router from "./routes/property.route.js";



 
 const app = express()
 
 connect();
 app.use(cookieParser())
 mongoose.set('strictQuery',true);
dotenv.config()
app.use(bodyParser.json());  // ye sab humesa route use se uppar rahega ..  like app.use("/api",router);
app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors({origin:['https://ujjwal-backend.onrender.com'],
   credentials:true,
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


 

app.use("/api",router);
app.use("/api",Property_router);




 




   
 app.listen(process.env.PORT||4000,()=>{
    console.log("server is running")
 }) 
 