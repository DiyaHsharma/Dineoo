import express from "express";
import multer from "multer";
import { addFood } from "../controllers/foodController.js";

const foodRouter = express.Router();

// Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Save files in the "uploads" folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Generate unique filenames
    },
});

const upload = multer({ storage: storage });

// Route to add food
foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
