import mongoose from "mongoose";

const connectDB = async (DATABASE_URI) => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.log(error.message)
        console.log("❌ Failed to connect to MongoDB:");
        process.exit(1);
    };
};
export default connectDB;
