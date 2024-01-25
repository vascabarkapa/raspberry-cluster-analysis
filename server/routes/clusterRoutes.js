import {Router} from 'express';
import {getClusters, createCluster} from '../controllers/cluster/index.js';
import {auth} from '../middleware/index.js';

const router = Router();

router.get('/', auth, getClusters);
router.post('/', createCluster);

export default router