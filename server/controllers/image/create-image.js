import asyncHandler from 'express-async-handler';
import Image from '../../models/imageModel.js';

export default asyncHandler(async (req, res) => {
  try {
    const newImage = await Image.create(req.body);
    res.status(201).json(newImage);
  } catch (error) {
    console.error("Error creating image from the database:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
});
