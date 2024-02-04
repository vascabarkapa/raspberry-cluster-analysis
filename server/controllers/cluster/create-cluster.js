import asyncHandler from 'express-async-handler';
import { Cluster, Notification } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
  try {
    const newCluster = await Cluster.create(req.body);

    if (newCluster.replicas > newCluster.max_pods) {
      await Notification.create(
        {
          user_id: '65bfe8b94db8d70019f07b81',
          model_name: 'Cluster',
          model_id: newCluster._id,
          title: 'Your cluster is overloaded!',
          description: 'Check the health of the cluster.',
          is_read: false
        }
      );
    }

    res.status(201).json(newCluster);
  } catch (error) {
    console.error('Error creating cluster from the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
