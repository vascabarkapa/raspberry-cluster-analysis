import asyncHandler from 'express-async-handler';
import { Image } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
  try {
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);

    const images = await Image.find({
      taken_at: { $gte: oneHourAgo }
    }).sort({ createdAt: -1 });

    const data = images.map((image) => image.number_of_faces);
    const datetime = images.map((image) => {
      return image.taken_at.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    });

    res.json({ data, datetime });
  } catch (error) {
    console.error('Error retrieving images from the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
