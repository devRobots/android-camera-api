import express from 'express';
import morgan from 'morgan';

import imagesRoutes from './routes/images.routes.js';

const app = express();

app.set("port", 4000);

app.use(morgan('dev'));

app.use(imagesRoutes);

export default app;