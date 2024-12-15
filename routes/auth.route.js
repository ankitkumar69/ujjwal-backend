import express from "express";
import  {Register,Login,Logout,Updateuser, getalluser}  from "../controller/auth.controller.js";
 const router = express.Router();
 router.post("/register",Register);
 router.post("/login",Login);
 router.get("/logout",Logout);
 router.get("/getalluser",getalluser);
 router.put("/updateuser",Updateuser);


 
  
 export default router;  