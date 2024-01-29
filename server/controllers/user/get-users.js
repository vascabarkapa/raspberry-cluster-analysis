import asyncHandler from 'express-async-handler';
import { User } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const perPage = parseInt(req.query.pageSize) || 10;

    const skip = (page - 1) * perPage;

    const users = await User.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(perPage);

    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers / perPage);

    res.json({
      users: users,
      current_page: page,
      per_page: perPage,
      total_pages: totalPages,
      total_items: totalUsers
    });
  } catch (error) {
    console.error('Error retrieving users from the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});