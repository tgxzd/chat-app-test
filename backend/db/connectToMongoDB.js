import mongoose from "mongoose";

const connectToMongoDB = async () => {
    const mongoUri = "mongodb+srv://aizaddtengkuazman:aizadcomel@cluster0.nsrhd.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0";
    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongoDB;