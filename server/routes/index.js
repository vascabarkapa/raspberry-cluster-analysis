import {Router} from 'express';
import userRoutes from './user.js';
import clusterRoutes from './cluster.js';
import authRoutes from './auth.js';
import imageRoutes from './image.js';
import notificationRoutes from './notification.js';

const router = Router();
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/cluster', clusterRoutes);
router.use('/image', imageRoutes);
router.use('/notification', notificationRoutes);

export default router;