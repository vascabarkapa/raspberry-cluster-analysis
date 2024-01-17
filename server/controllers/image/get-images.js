import asyncHandler from 'express-async-handler';
import Image from '../../models/imageModel.js';

export default asyncHandler(async (req, res) => {
  try {
    const images = await Image.find().sort({createdAt: -1});
    res.json(images);
  } catch (error) {
    console.error("Error retrieving images from the database:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
});