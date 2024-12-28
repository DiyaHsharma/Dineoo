import express from "express";
import multer from "multer";
import { addFood } from "../controllers/foodController.js"; // Import addFood from controller

const foodRouter = express.Router();

// Multer storage setup
const storage = multer.diskStorage({
    destination: "uploads", // Folder where images will be stored
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Generate unique filenames
    },
});

const upload = multer({ storage: storage });

// Route for adding food
foodRouter.post("/add", upload.single("image"), addFood); // Use addFood function here

export default foodRouter;
