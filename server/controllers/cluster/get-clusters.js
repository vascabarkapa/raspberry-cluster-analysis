import asyncHandler from 'express-async-handler';
import { Cluster } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const perPage = parseInt(req.query.pageSize) || 10;

    const skip = (page - 1) * perPage;

    const clusters = await Cluster.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(perPage);

    const totalClusters = await Cluster.countDocuments();
    const totalPages = Math.ceil(totalClusters / perPage);

    res.json({
      clusters: clusters,
      current_page: page,
      per_page: perPage,
      total_pages: totalPages,
      total_items: totalClusters
    });
  } catch (error) {
    console.error('Error retrieving clusters from the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});