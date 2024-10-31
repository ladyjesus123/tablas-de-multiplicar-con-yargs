const { crearArchivo } = require('./helpers/multiplicar6');
const colors = require('colors');
const argv = require('./config/yargs3');

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h, argv.lim)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
