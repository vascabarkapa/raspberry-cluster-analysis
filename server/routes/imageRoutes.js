import { Router } from 'express';
import { getImages, createImage } from '../controllers/image/index.js';

const router = Router();

router.get('/', getImages);
router.post('/', createImage);

export default router