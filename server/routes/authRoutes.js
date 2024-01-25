import {Router} from 'express';
import {login, getCurrentUser} from '../controllers/auth/index.js';
import {auth} from '../middleware/index.js';

const router = Router();

router.post('/login', login);
router.get('/me', auth, getCurrentUser);

export default router