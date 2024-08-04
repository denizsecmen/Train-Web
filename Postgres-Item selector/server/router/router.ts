import express from 'express';
import signUp from '../controller/signup';
import auth from '../middleware/auth';
import login from '../controller/login';
import dashboard from '../controller/dashboard';
import main from '../controller/main';
import item from '../controller/itemadd';
import itemAdd from '../controller/itemget';
let router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/dashboard', auth, dashboard);
router.post('/itemadd', item);
router.get('/getitem',itemAdd);
router.get('/', main);
export default router;