import { Router } from 'express';
import { getNotifications, readNotification } from '../controllers/notification/index.js';
import { auth } from '../middleware/index.js';

const router = Router();

router.get('/:id', auth, getNotifications);
router.post('/:id', auth, readNotification);

export default router;