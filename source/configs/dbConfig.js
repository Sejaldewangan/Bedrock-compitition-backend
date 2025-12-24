import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv()
 const uri=process.env.DB_URI
const connectDB = async () =>{
try {
        await mongoose.connect(uri)
        console.log("db connected")
} catch (error) {
    console.log(error);
    
}
}
export default connectDB