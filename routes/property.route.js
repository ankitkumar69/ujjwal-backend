import express from "express";
import {
  createProperty,
  getproperty,
  deleteProperty,
  updateProperty,
  Allland,
  singleproperty,
 
} from "../controller/property.controller.js";

import { isAuthenticated } from "../middleWare/authentication.js";

const Property_router = express.Router();
Property_router.post("/create", createProperty);
Property_router.get("/getproperty", getproperty);
Property_router.get("/getsingleproperty/:id", singleproperty);
Property_router.get("/allland", Allland);
Property_router.delete("/deleteproperty/:id", deleteProperty);
Property_router.put("/updateproperty/:id", updateProperty);

export default Property_router;
