import { Router } from 'express';
import userController from '../controllers/user';

const router = Router();

router.post('/auth/signup', userController.userSignup);
router.post('/auth/signin', userController.userSignin);

export default router;
