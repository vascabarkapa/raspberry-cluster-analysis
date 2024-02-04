import asyncHandler from 'express-async-handler';
import { Cluster } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
  try {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    const clusters = await Cluster.find({
      createdAt: { $gte: twentyFourHoursAgo },
    }).sort({ createdAt: -1 });

    const load = clusters.map((cluster) => cluster.load);
    const load_threshold = clusters.map((cluster) => cluster.load_threshold);
    const datetime = clusters.map((cluster) => {
      return cluster.createdAt.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
    });

    res.json({ load, load_threshold, datetime });
  } catch (error) {
    console.error('Error retrieving cluster info from the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
