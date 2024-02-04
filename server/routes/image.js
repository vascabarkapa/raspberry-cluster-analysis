import {Router} from 'express';
import {getImages, createImage, getNumberOfFaces, getAverageImageStats} from '../controllers/image/index.js';
import {auth} from '../middleware/index.js';

const router = Router();

router.get('/', auth, getImages);
router.get('/number-of-faces', auth, getNumberOfFaces);
router.get('/average-faces', auth, getAverageImageStats);
router.post('/', createImage);

export default router