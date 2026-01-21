import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const uri = process.env.uri;

const connectDB = async () => {
  // Sanity check: If URI is missing, log it!
  if (!uri) {
    console.error("CRITICAL ERROR: DB_URI is not defined in environment variables!");
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Failed:");
    console.error(error.message);
  }
};

export default connectDB;