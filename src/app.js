/**
 * Modulo principal App
 * 
 * @requires express
 * @requires morgan
 * 
 * @version 1.0
 * @author Yesid Rosas Toro <ysrosast@gmail.com>
 */
import express from 'express';
import morgan from 'morgan';

import imagesRoutes from './routes/images.routes.js';

/**
 * Inicializa el servidor Express y realiza las configuraciones basicas
 * @type {express.Application}
 * @see https://expressjs.com/en/api.html#app
 */
const app = express();

app.disable('x-powered-by');
app.set("port", process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.text({limit: '20mb'}));
app.use(imagesRoutes);

export default app;