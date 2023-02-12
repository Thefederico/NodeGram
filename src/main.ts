import express, { Application } from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';

import { routesApp } from './network/index.routes';

config();

const ROOT_PATH = path.join(__dirname, '../');

const app: Application = express();

app.use(bodyParser.json());

routesApp(app);
app.use('/app', express.static(path.join(ROOT_PATH, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
