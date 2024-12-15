import mongoose from "mongoose";
const{Schema}=mongoose;

const Propertyschema =new Schema({

    
 title:{
    type:String,
    
},

price:{
    type:String,
    

},

address:{
    type:String,
    

},
description:{
    type:String,
    

},
landmark:{
    type:String,
   

},
city:{
    type:String,
   

},
videoUrl:{
    type:String,
   

},

ImgUrlArray:{
    type:Array,
},



}) 
export default mongoose.model("all_property",Propertyschema);