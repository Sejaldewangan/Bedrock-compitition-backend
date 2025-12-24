import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    name: {
        type: String,  
        required: true    
    },
    description: {
        type: String,
        required: false   
    }
}, { timestamps: true }); 

const Register = mongoose.model("Register", registerSchema);

export default Register;