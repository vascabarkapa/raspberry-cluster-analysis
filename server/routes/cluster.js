import {Router} from 'express';
import {getClusters, createCluster, getLoadThreshold} from '../controllers/cluster/index.js';
import {auth} from '../middleware/index.js';

const router = Router();

router.get('/', auth, getClusters);
router.get('/load-threshold', auth, getLoadThreshold);
router.post('/', createCluster);

export default router