import { Router } from 'express';
import { getClusters, createCluster } from '../controllers/cluster/index.js';

const router = Router();

router.get('/', getClusters);
router.post('/', createCluster);

export default router