import {Router} from 'express';
import userRoutes from './userRoutes.js';
import clusterRoutes from './clusterRoutes.js';
import authRoutes from './authRoutes.js';

const router = Router();
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/cluster', clusterRoutes);
router.use('/image', clusterRoutes);

export default router;