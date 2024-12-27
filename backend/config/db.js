import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://diyaabhisharma:13251294@cluster0.sonho.mongodb.net/Dineoo').then(()=>console.log("DB Connected"));
}