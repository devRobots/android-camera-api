/**
 * Modulo controlador de la API de imágenes
 * @module Controller
 * 
 * @requires firebase/storage
 * 
 * @version 1.0
 * @author Yesid Rosas Toro <ysrosast@gmail.com>
 */

import { getStorage, ref, uploadString, getDownloadURL, listAll } from "firebase/storage";
import app from "../firebase.js";

/**
 * Ruta padre donde se almacenan las imagenes en Firebase Storage
 * @type {string}
 */
const parent = "images";

/**
 * Devuelve por Response una lista de todas las imágenes que se han subido a Firebase Storage
 * @param {Request} _req Peticion del cliente - No se utiliza
 * @param {Response} res Respuesta del servidor
 * 
 * @see https://firebase.google.com/docs/storage/web/list-files
 */
const getImages = async (_req, res) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, parent);
    listAll(storageRef).then((data) => {
        const listFiles = [];
        data.items.forEach((item) => {
            listFiles.push(item._location.path_)
        });
        res.json(listFiles);
    });
}

/**
 * Devuelve por Response la URL de una imagen que se ha subido a Firebase Storage.
 * La imagen se especifica a traves del parametro Request.params.name
 * @param {Request}  req Peticion del cliente
 * @param {Object}   req.params Lista de parametros de la peticion
 * @param {string}   req.params.nombre Ruta de la imagen en Firebase Storage
 * @param {Response} res Respuesta del servidor
 * 
 * @see https://firebase.google.com/docs/storage/web/download-files
 */
const downloadImage = async (req, res) => {
    const storage = getStorage();
    const storageRef = ref(storage, parent + "/" + req.params.nombre);
    getDownloadURL(storageRef)
        .then((url) => {
            res.text(url);
        })
        .catch((error) => {
            res.send(error);
        });
}

/**
 * Sube una imagen a Firebase Storage.
 * La imagen se envia en base64 a traves del Request.body
 * @param {Request}  req Peticion del cliente
 * @param {string}   req.body Objeto JSON string con la imagen en base64
 * @param {Response} res Respuesta del servidor
 * 
 * @see https://firebase.google.com/docs/storage/web/upload-files
 */
const postImage = async (req, res) => {
    if (req.body && req.body.length > 0) {
        const body = JSON.parse(JSON.parse(req.body)).image;
        const fecha = new Date();
        const name = fecha.toDateString() + " | " + fecha.toTimeString() + ".jpg";
        const path = parent + "/" + name;

        const storage = getStorage(app);
        const storageRef = ref(storage, path);
        uploadString(storageRef, body, 'data_url').then((snapshot) => {
            res.send(snapshot.metadata.name);
        }).catch((error) => {
            res.send(error);
        });
    } else {
        res.status(500)
        res.send("No image data");
    }
}

export const imageController = { getImages, postImage, downloadImage };