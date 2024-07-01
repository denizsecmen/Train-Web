import express from 'express';
import cors from 'cors';
import cookie from 'cookie-parser';

let app = express();
app.use(cors());
app.use(cookie());
let port = 9001;
app.listen(port, () => {
  console.log(`Server runs at port ${port}`);
});