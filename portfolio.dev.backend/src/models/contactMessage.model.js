import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    emial: {
        type: String,
        trim: true,
        lowercase: true
    },
    message: {
        type: String
    },
    
},{timestamps:true})

export const Contact = mongoose.Model("Contact", contactSchema);