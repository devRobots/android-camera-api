/**
 * Modulo manejador de rutas de la API de imágenes
 * @module Routes
 * 
 * @requires express
 * 
 * @version 1.0
 * @author Yesid Rosas Toro <ysrosast@gmail.com>
 */

import { Router } from "express";
import { imageController } from "../controllers/images.controller.js";

/**
 * Instancia de Router
 * @type {Router}
 * @see https://expressjs.com/en/api.html#router
 */
const router = Router();

/**
 * @member postImage
 * @description Enrutamiento del metodo POST para subir una imagen a Firebase Storage
 * @property {string} path Ruta de la API
 * @property {function} controller Controlador asociado a la accion de la API
 * 
 * @see https://expressjs.com/en/api.html#router.post
 */
router.post("/api/images", imageController.postImage);

/**
 * @member getImages
 * @description Enrutamiento del metodo GET para obtener una lista de todas las imagenes que se han subido a Firebase Storage
 * @property {string} path Ruta de la API
 * @property {function} controller Controlador asociado a la accion de la API
 * 
 * @see https://expressjs.com/en/api.html#router.get
 */
router.get("/api/images", imageController.getImages);

/**
 * @member getImages
 * @description Enrutamiento del metodo GET para obtener la URL de una imagen que se ha subido a Firebase Storage
 * @property {string} path Ruta de la API
 * @property {function} controller Controlador asociado a la accion de la API
 * 
 * @see https://expressjs.com/en/api.html#router.get
 */
router.get("/api/images/:nombre", imageController.downloadImage);

export default router;