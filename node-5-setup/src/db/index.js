import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";
/*
- connect to DB using mongoose with precation
- if connect tell the abt instance
- if error then exit
*/
// Self Function Call
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log(`Mongodb Connected : ${connectionInstance}`)
  } catch (error) {
    console.log("+--Connection Failed : ",error);
    process.exit(1)
    // throw error;
  }
};

export default connectDB;
