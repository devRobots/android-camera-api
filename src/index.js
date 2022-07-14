/**
 * Index file
 * 
 * @requires firebase/app
 * 
 * @version 1.0
 * @author Yesid Rosas Toro <ysrosast@gmail.com>
 */
import app from './app.js';

/**
 * @function main
 * @description Función principal que inicia el servidor
 */
const main=() => {
    app.listen(app.get("port"));
    console.log("Server on port " + app.get("port"));
};

main();