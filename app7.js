const {crearArchivo} = require('./helpers/multiplicar3')


console.clear()
//const base = 2
//crearArchivo(base)
//          .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//          .catch(err => console.log(err))

//--version esto es una bandera, es una instruccion o comando a ejecutar -v comodin version simplificada
//argv captura todos los procesos en la consola --base=88 captura la tabla del 88 con esta bandera es todo lo que escribimos en consola

console.log('process.argv: ', process.argv);// imprime los procesos que vienen en la consola

//prueba en console node app7 --base=5
//node.exe -> arg1
//app7     -> arg2
//--base=5 -> arg3

const [, , arg3='base=5'] = process.argv; //destructurar el tercer argumento
const[ , base=5] = arg3.split('=')// valga el valor arg3 por medio de split busca el = y luego captura
console.log(base);

//se puede comprobar sin argumentos node app7
//node app7 --9 limit=12 imprime las tablas del 9 al 12




