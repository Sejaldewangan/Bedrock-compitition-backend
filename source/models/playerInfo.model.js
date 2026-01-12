import mongoose from "mongoose";

const playerRegistrationSchema = new mongoose.Schema({
  // --- Section 1: Player Information ---
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  minecraftGamerTag: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,     
    lowercase: true, 
    trim: true
  },
  phoneNumber: {
    type: String,      
    required: false  ,
    min: [10, "Phone number must be at least 10 digits"]  
  },
  age: {
    type: Number,
    required: true,
    min: [8, "You must be at least 8 years old to register"]
 },

  
}, { timestamps: true });


const PlayerRegistration = mongoose.models.PlayerRegistration || mongoose.model("PlayerRegistration", playerRegistrationSchema);

export default PlayerRegistration;