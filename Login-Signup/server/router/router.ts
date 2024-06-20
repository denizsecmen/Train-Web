import express from 'express';
import { signUp, logIn } from '../controller/controller';
import auth from '../auth/auth';
const Router = express.Router();
Router.post('/signup', signUp);
Router.post('/login', logIn);
Router.post('/auth', auth);
export { Router };
