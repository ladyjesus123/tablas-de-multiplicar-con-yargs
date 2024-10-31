const fs = require('fs')//libreria file string
//funcion tipo flecha deu n parametro
const crearArchivo = (base = 5) => {


        console.log('====================');
        console.log(' TABLA DEL: ', base);
        console.log('====================');
        
        let salida = '';//inicio de salida dentro de la funcion

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;            
        }

        console.log(salida);

        fs.writeFileSync(`tabla -${base}.text`,salida);
        console.log(`tabla -${base}.text creado`);

    }

module.exports = {
    crearArchivo
}   // con este codigo se va a poder usar esta funcion crearArchivo