import asyncHandler from 'express-async-handler';
import { Cluster } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
  try {
    const clusters = await Cluster.find().sort({createdAt: -1});
    res.json(clusters);
  } catch (error) {
    console.error("Error retrieving clusters from the database:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
});