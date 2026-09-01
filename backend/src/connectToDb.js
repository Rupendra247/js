import mongoose from "mongoose";

const connectTODb = async () => {
    await mongoose.connect("mongodb://localhost:27017/sunway");
    console.log("application is connected to database successfully");
};

export default connectTODb;
