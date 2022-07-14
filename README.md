# Android Camera API

![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=devRobots_android-camera-api&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=devRobots_android-camera-api)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=devRobots_android-camera-api&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=devRobots_android-camera-api)

Este proyecto es una API parte de la prueba de seleccion de la empresa Componente Serviex

Para este proyecto se desarrollo el backend en `Node.js` con ayuda del framework `Express.js`

## Resumen

Esta interfaz se encarga de gestionar (subir, listar y descargar) imagenes en un servidor de archivos Firebase Storage.

La API se encuentra actualmente disponible en el servicio Heroku y es accesible desde el enlace [Image API](https://android-camera-api.herokuapp.com/)

## Conjunto de Instrucciones

1. **Subir una imagen** `POST: /api/images`

    Permite cargar una imagen en el servidor
    
    > Sebe enviar la imagen codificada base64 en el cuerpo de la peticion  

2. **Listar todas las imagenes** `GET: /api/images`

    Permite obtener un listado de todas las imagenes que hay en el servidor
    
3. **Descargar una imagen** `GET: /api/images/:fileName`

    Permite descargar una imagen del servidor
    
    > El parametro `:fileName` debe contener el nombre de la imagen a descargar

## Instrucciones de Ejecucion

### Scripts NPM:

* Iniciar el servidor 
    ```bash
    npm start
    ```

* Generar la documentacion jsdoc 
    ```bash
    npm run doc
    ```
