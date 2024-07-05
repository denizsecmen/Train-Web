import express from 'express';
import signUp from '../controller/signup';
import auth from '../middleware/auth';
import login from '../controller/login';
import dashboard from '../controller/dashboard';
import main from '../controller/main';
let router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/dashboard', auth, dashboard);
router.get('/', main);
export default router;