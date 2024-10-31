//Ejercicio conversion a funcion promesa en multiplicar2.js / destructuracion

const {crearArchivo} = require('./helpers/multiplicar2')

console.clear();

const base = 31

//then = ejecuta resolve /catch = ejecuta reject

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))


//funcion().then cuando se cumple
//funcion().catch cuando hay error
