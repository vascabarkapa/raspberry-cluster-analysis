import {Router} from 'express';
import {getUsers, getUserById, createUser, updateUser, deleteUser} from '../controllers/user/index.js';
import {auth} from '../middleware/index.js';

const router = Router();

router.get('/', auth, getUsers);
router.get('/:id', auth, getUserById);
router.post('/', auth, createUser);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

export default router