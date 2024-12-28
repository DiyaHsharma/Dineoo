import foodModel from "../models/foodModel.js";
import path from "path";

const addFood = async (req, res) => {
    try {
        // Debugging: Check if file is received
        console.log("File received:", req.file);

        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }

        // Construct relative path
        const relativePath = `uploads/${req.file.filename}`;

        // Create new food entry
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: relativePath, // Store relative path in DB
        });

        await food.save();
        res.json({ success: true, message: "Food added successfully" });
    } catch (error) {
        console.error("Error adding food item:", error);
        res.status(500).json({ success: false, message: "Error adding food item" });
    }
};

export { addFood };
