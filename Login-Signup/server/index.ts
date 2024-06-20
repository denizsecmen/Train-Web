import express from 'express';
import { Router } from './router/router';
import cors from 'cors';
import cookie from 'cookie-parser';
const app = express();
let port = 9001;
app.use(cors());
app.use(cookie());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', Router);
app.listen(port, () => {
  console.log(`app listening port:${port}`);
});
