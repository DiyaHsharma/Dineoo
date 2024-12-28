import foodModel from "../models/foodModel.js";

// Add food item
const addFood = async (req, res) => {
    try {
        // Log the file details to debug
        console.log("Request Body:", req.body);
        console.log("File Metadata:", req.file);

        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }

        // Store the image file path
        const image_filename = req.file.path;

        // Save to database
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        await food.save();
        res.json({ success: true, message: "Food added successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Error adding food item" });
    }
};

export { addFood };