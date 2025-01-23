import foodModel from "../models/foodModel.js";
import fs from 'fs';
import path from 'path';

// Add food item
const addFood = async (req, res) => {
    try {
      console.log("Request Body:", req.body);
      console.log("File Metadata:", req.file);
  
      if (!req.file) {
        return res.status(400).json({ success: false, message: "No image uploaded" });
      }
  
      const image_filename = `uploads/${req.file.filename}`; 
  
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
  

// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        // Use process.cwd() to get the current working directory
        const uploadsDir = path.join(process.cwd(), 'uploads');

        // Construct the correct file path for the image
        const imagePath = path.join(uploadsDir, path.basename(food.image)); // Use only the filename

        // Check if the image file exists before attempting to delete
        if (fs.existsSync(imagePath)) {
            // Delete the image from the uploads folder
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error("Error deleting file:", err);
                    return res.status(500).json({ success: false, message: "Error deleting image file" });
                }
                console.log("Image file deleted successfully");
            });
        } else {
            console.log("Image file not found:", imagePath);
        }

        // Delete the food item from the database
        await foodModel.findByIdAndDelete(req.body.id);

        // Send success response
        res.json({ success: true, message: "Food item removed successfully" });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ success: false, message: "Error removing food item" });
    }
};


export { addFood, listFood, removeFood };
