import mongoose from "mongoose";

const additionalInfoSchema = new mongoose.Schema({
  experienceLevel: {
    type: String,
    required: true, 
  
    // enum: ["Entry Level", "Intermediate", "Senior", "Expert"] 
  },
  state: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
 
  }
}, { timestamps: true });


const AdditionalInfo = mongoose.models.AdditionalInfo || mongoose.model("AdditionalInfo", additionalInfoSchema);

export default AdditionalInfo;