import express from 'express';
import signUp from '../controller/signup';
import auth from '../middleware/auth';
import login from '../controller/login';
let router = express.Router();

router.post('/signup', signUp);
router.post('/login',login);

export default router;