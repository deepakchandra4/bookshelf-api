import mongoose from "mongoose";
import { NODE_ENV , MONGO_URI } from "../config/env.js";

if(!MONGO_URI){
    throw new Error('Please define MONGO_URI inside the  .env.<production/development>.local')
}

const connectToDatabase = async() => {
    try {
       await mongoose.connect(MONGO_URI);
       console.log(`Database connnected to ${NODE_ENV}`);
    } catch (error) {
        console.log("Database connection Failed" , error.message);
        process.exit(1);
    }
}

export default connectToDatabase;