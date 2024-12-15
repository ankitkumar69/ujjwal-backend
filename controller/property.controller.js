import PropertyModel from "../models/property.model.js";

export const createProperty = async (req, res) => {
  try {
 

    const newproperty = new PropertyModel({
      ...req.body,
     
    });
    const newuser1 = await newproperty.save();
    res.status(200).send("created");
  } catch (err) {
    console.log(err);
  }
};
 
export const updateProperty = async (req, res) => {
       

  try {
    const gighai = await PropertyModel.findById(req.params.id);
    
    if (!gighai) return res.send("gig doesn't exit");

   

    await PropertyModel.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });

    res.send("  property updated");
  } catch (err) {
    console.log(err);
  }
};


export const deleteProperty = async (req, res) => {
  try {
        
    const gighai = await PropertyModel.findById(req.params.id); // make sure to use /delete/:id
        

    await PropertyModel.findOneAndDelete(req.params.id);

    res.status(200).send("gig deleted");
  } catch (err) {
    console.log(err);
  }
};

export const getproperty = async (req,res) => {
      const limit=parseInt(req.query.limit)||16
    
  const filters = {
    ...(req.query.propertyname &&{ propertyname:{  $regex: req.query.propertyname,$options:'i'} }),
    ...(req.query.max &&{ price: {$lt :req.query.max} }), 
    ...(req.query.min &&{ price: {$gt :req.query.min} }), 
    
  }; 
   
  try {
    const Allproperty = await PropertyModel.find({email:"akumar@gmail.com"}).limit(limit);

    res.send(Allproperty);
  } catch (err) {
    console.log(err);
  }
};

export const Allland = async (req, res) => {
  try {
  
  
    const singleproperty = await PropertyModel.find(); // sayad ye  {} me return karta hai data
 
    res.send(singleproperty);
  } catch (err) {
    console.log(err);
  }
};

export const singleproperty = async (req, res) => {
  try {
  
    const singleproperty = await PropertyModel.findById(req.params.id); // 
 
    res.send(singleproperty);
  } catch (err) {
    console.log(err);
  }
};


