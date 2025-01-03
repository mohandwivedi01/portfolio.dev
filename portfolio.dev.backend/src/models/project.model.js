import mongoose  from "mongoose";

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologyUsed: [
        String
    ],
    projectActiveLink: {
        type: String
    },
    repoLink: {
        type: String
    },
    image: {
        type: String
    },
    role: {
        type: String
    },
    like: {
        type: Number,
        default:0
    }
},{timestamps:true})

export const Project = mongoose.Model("Project", projectSchema);