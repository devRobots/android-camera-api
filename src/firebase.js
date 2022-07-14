/**
 * Modulo de configuracion de Applicacion Firebase
 * @module Firebase
 * 
 * @requires firebase/app
 * 
 * @version 1.0
 * @author Yesid Rosas Toro <ysrosast@gmail.com>
 * 
 * @see https://firebase.google.com/docs/web/setup
 */
import { initializeApp } from "firebase/app";

/**
 * Configuraciones de la aplicacion Firebase
 * @type {Object}
 * 
 * @property {string} apiKey Clave de la API de Firebase
 * @property {string} authDomain Dominio de autenticacion de Firebase
 * @property {string} projectId Identificador del proyecto de Firebase
 * @property {string} storageBucket Nombre del bucket de almacenamiento de Firebase
 * @property {string} messagingSenderId Identificador del remitente de mensajes de Firebase
 * @property {string} appId Identificador de la aplicacion de Firebase
 * @property {string} measurementId Identificador de la aplicacion de Firebase
 */
const firebaseConfig = {
  apiKey: "AIzaSyAu6W2Pjq6oPO4hvBct4PIYvXdDsFTmFaQ",
  authDomain: "android-camera-api.firebaseapp.com",
  projectId: "android-camera-api",
  storageBucket: "android-camera-api.appspot.com",
  messagingSenderId: "1022298318348",
  appId: "1:1022298318348:web:a592e5ef40a42da5adf029",
  measurementId: "G-Q3LDYC4MSZ"
};

/**
 * Inicializa la aplicacion Firebase
 * @type {FirebaseApp}
 */
const app = initializeApp(firebaseConfig);

export default app;