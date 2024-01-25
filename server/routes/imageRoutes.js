import {Router} from 'express';
import {getImages, createImage} from '../controllers/image/index.js';
import {auth} from '../middleware/index.js';

const router = Router();

router.get('/', auth, getImages);
router.post('/', createImage);

export default router