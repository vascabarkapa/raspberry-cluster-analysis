import asyncHandler from 'express-async-handler';
import { Notification } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
  try {
    const notifications = await Notification.find({ user_id: req.params.id });

    if (!notifications || notifications.length === 0) {
      return res.status(404).json({ message: 'Notifications not found' });
    }

    notifications.forEach((notification) => {
      notification.is_read = 1;
      notification.save();
    });

    res.json({ message: 'Notification status updated successfully' });
  } catch (error) {
    console.error('Error updating notification status:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
