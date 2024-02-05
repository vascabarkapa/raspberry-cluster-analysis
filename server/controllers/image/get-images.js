import asyncHandler from 'express-async-handler';
import { Image } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const perPage = parseInt(req.query.pageSize) || 30;

    const skip = (page - 1) * perPage;

    const images = await Image.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(perPage);

    const totalImages = await Image.countDocuments();
    const totalPages = Math.ceil(totalImages / perPage);

    res.json({
      images: images,
      current_page: page,
      per_page: perPage,
      total_pages: totalPages,
      total_items: totalImages
    });
  } catch (error) {
    console.error('Error retrieving images from the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
