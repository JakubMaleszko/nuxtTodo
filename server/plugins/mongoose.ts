import mongoose from "mongoose";

export default nitroPlugin(async () => {
    const uri = process.env.MONGODB_URI|| '';
    try {
    await mongoose.connect(uri);
    console.log("✔ MongoDB connected succsefully");
    } catch (error) {
        console.log("MongoDB failed to connect, error: ", error);
    }
})