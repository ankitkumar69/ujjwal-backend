
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

import Jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const{password,...rest}=req.body

  const saltround = 12
  const hash = bcrypt.hashSync(password, saltround);


  try {
     console.log(req.body)
    const newUser = new User({
          ...req.body,password:hash
    })
    const saveduser=  await newUser.save();

    const{password,...baccha}=saveduser;

    const Token = Jwt.sign({ 
     baccha

    }, process.env.JWT_KEY)
      
    

    res.cookie("register", Token, {
      // 1 hour
      secure: true, // only send the cookie over HTTPS
      httpOnly: true   // use camel case naming
    }).status(200).send(baccha);
        
         
  } catch (error) {
    if (error) return res.status(500).send(`something went wrong`);
    console.log(error);

  }
 
}


export const Login = async (req, res) => {

  try {
    const inserted = await User.findOne({ email:req.body.useremail})

    if (!inserted) return res.status(400).send("user not found");


    const isCorrect = bcrypt.compareSync(req.body.password, inserted.password)
    if (!isCorrect) return res.status(401).send("password or username is incorrect");
    const { password, ...info } = inserted._doc;
    
    res.cookie("logincookie",info).status(200).send(info);
   
 

  } catch (error) {
    if (error) return
    res.status(500).send(`password or username is incorrect${error}`);
    

  }

}

export const Logout = async (req, res) => {

  try {

       await   res.clearCookie('logincookie')

       res.status(200).send("you are sucessfully logout 'come again'");

  } catch (error) {

    res.send(error); 
    console.log(error);


  }

}
export const Updateuser= async (req,res) => {
       console.log(req.query)
     const info= await User.findOneAndUpdate({email:req.query?.email},{isAdmin:req.query?.isAdmin},{new:true})

        res.send(info)

}  

  export const getalluser=async(req,res)=>{
           const info =await User.find()
           res.send(info)
  }
 

export default { Register, Login, Logout,Updateuser};   