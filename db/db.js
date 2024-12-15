import Mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbname = "property_database";
const connect = async () => {
  try {
    const _url =
      "mongodb+srv://ankit46360:9872551751@cluster0.hlmul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    // `mongodb://127.0.0.1:27017/${"ujjwaldb"}`

    await Mongoose.connect(_url);
    console.log("connection sucessful");
  } catch (error) {
    if (error) {
      console.log(error);
    }
  } 
};
connect(); 

export default connect;
