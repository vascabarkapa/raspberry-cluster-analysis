import asyncHandler from 'express-async-handler';
import Cluster from '../../models/clusterModel.js';

export default asyncHandler(async (req, res) => {
  try {
    const newCluster = await Cluster.create(req.body);
    res.status(201).json(newCluster);
  } catch (error) {
    console.error("Error creating cluster from the database:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
