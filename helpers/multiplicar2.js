//Ejercicio conversion de funcion a promesas/ se utiliza el archivo app5.js

const fs = require('fs')

//se utiliza el module.exports para dar permiso a este archivo de exportar crearArchivo hasta el final de este archivo
//promesa como se va a resolver  resolve todo bien reject hay error
const crearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
        console.log('====================');
        console.log(' TABLA DEL: ', base);
        console.log('====================');
        
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;            
        }

        console.log(salida);

        fs.writeFileSync(`tala -${base}.text`,salida);
        resolve(`tabla-${base}.text`)
    })
}

module.exports = {crearArchivo}