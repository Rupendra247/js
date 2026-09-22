import mongoose from "mongoose";

const connectToDb = async () => {
    await mongoose.connect("mongodb+srv://dhunganarupendra03_db_user:Mg1iQK4cW2IhodLV@cluster0.8wyysvb.mongodb.net/?appName=Cluster0");
    console.log("application is connected to database successfully");
};

export default connectToDb;
