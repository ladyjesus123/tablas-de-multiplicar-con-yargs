//separar l alogica de la aplicacion con el archivo principal del mismo 
//destructuracion

const {crearArchivo} = require('./helpers/multiplicar')

//se crea la carpeta helpers para crear toda la logica de la aplicacon dentro del archivo multiplicar.js

console.clear();

const base = 161;

crearArchivo(base);