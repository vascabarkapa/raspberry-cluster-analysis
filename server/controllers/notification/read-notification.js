import asyncHandler from 'express-async-handler';
import { Notification } from './../../models/index.js';

export default asyncHandler(async (req, res) => {
  try {
    const { notification_id } = req.params;

    const notification = await Notification.findById(notification_id);

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    notification.is_read = 1;
    await notification.save();

    res.json({ message: 'Notification status updated successfully' });
  } catch (error) {
    console.error('Error updating notification status:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
