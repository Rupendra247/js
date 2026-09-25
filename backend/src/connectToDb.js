import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToDb = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("application is connected to database successfully");
};

export default connectToDb;
