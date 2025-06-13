// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect('mongodb+srv://diyaabhisharma:13251294@cluster0.sonho.mongodb.net/Dineoo').then(()=>console.log("DB Connected"));
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://diyaabhisharma:13251294@cluster0.mongodb.net/Dineoo?retryWrites=true&w=majority"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
  }
};
