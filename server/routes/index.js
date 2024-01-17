import {Router} from 'express';
import userRoutes from './userRoutes.js';
import clusterRoutes from './clusterRoutes.js';

const router = Router();
router.use('/user', userRoutes);
router.use('/cluster', clusterRoutes);
router.use('/image', clusterRoutes);

export default router;