import express from 'express';
import cors from 'cors';
import cookie from 'cookie-parser';
import router from './router/router';
import exp from 'constants';
let app = express();
app.use(cors());
app.use(cookie());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
let port = 9001;
app.use('/', router);
app.listen(port, () => {
  console.log(`Server runs at port ${port}`);
});