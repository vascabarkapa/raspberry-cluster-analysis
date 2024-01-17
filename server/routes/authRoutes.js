import { Router } from 'express';
import { login, getCurrentUser } from '../controllers/auth/index.js';

const router = Router();

router.post('/login', login);
router.get('/me', getCurrentUser);

export default router