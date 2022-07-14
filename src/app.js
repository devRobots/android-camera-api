import express from 'express';
import morgan from 'morgan';

import imagesRoutes from './routes/images.routes.js';

const app = express();
app.disable('x-powered-by');

app.set("port", process.env.PORT || 3000);

app.use(morgan('dev'));

app.use(express.text({limit: '20mb'}));

app.use(imagesRoutes);

export default app;