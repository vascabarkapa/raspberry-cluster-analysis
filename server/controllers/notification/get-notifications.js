import asyncHandler from 'express-async-handler';
import { Notification } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
  try {
    const unreadNotifications = await Notification.find({ user_id: req.params.id , is_read: false }).sort({ createdAt: -1 });
    const readNotifications = await Notification.find({ user_id: req.params.id , is_read: true }).sort({ createdAt: -1 });
    const allNotifications = [...unreadNotifications, ...readNotifications];

    res.json(allNotifications);
  } catch (error) {
    console.error('Error retrieving notifications from the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
