
import mongoose from "mongoose";

const {Schema} = mongoose;

const Userschema=new Schema({
    firstname: {
        type: String,
  
    },
    lastname:{
        type:String,
     
       
        
    },
     email:{
        type:String,
       
        
       
    },
     password:{
        type:String,
        
        
       
    },
     gender:{
        type:String,
        
        
       
    },
     profileImg:{
        type:String,
        
        
       
    },
     isAdmin:{
        type:Boolean,
        default:false
        
       
    },
  
   
    
     
},{timestamps:true}
)

export default mongoose.model("user",Userschema);