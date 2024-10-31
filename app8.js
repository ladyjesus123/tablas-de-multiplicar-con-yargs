const {crearArchivo} = require('./helpers/multiplicar3')

console.clear();

//captura el tercer argumento node app8 --base=5

const [, , arg3='basea=5'] = process.argv;//captura todos los comandos que se ejecutan en la consola
const [ , base=5] = arg3.split('='); //se puede comprobar sin argumentos app8


crearArchivo(base)//
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))
