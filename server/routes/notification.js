import { Router } from 'express';
import { getNotifications, readNotification, readAllNotifications } from '../controllers/notification/index.js';
import { auth } from '../middleware/index.js';

const router = Router();

router.get('/:id', auth, getNotifications);
router.post('/:id', auth, readNotification);
router.post('/read-all/:id', auth, readAllNotifications);

export default router;