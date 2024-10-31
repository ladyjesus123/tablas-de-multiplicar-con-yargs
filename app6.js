//ejercicio conversion a funcion promesa a Async asincrona en multiplicar3.js

const {crearArchivo} = require('./helpers/multiplicar3')

console.clear();

const base = 222;

crearArchivo(base)

    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err=> console.log(err));



