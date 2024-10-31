//instalar paquetes 
//comando para instalar paquetes por defecto npm init
//Archivo Package.json punto inicio de proyectos node

//script base3 = node app9.js --base=3


//npm init
//npm install colors
//npm install yargs 
//npm install nodemon --save-dev


const {crearArchivo} = require('./helpers/multiplicar3');
const argv = require('yargs').argv; // requerimos yargs

console.clear();


console.log(process.argv);//para ver que se escribe en consola
console.log(argv);//del paquete yargs
console.log('base yargs: ', argv.base);//interno
