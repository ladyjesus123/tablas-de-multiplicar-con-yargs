//jercicio utilizando una funcion async

const fs = require('fs')

const crearArchivo = async(base = 5) => {//async-try-catch
    try {

        console.log('====================');
        console.log(' TABLA DEL: ', base);
        console.log('====================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;            
        }

        console.log(salida);

        fs.writeFileSync(`tala -${base}.text`,salida);
        
        return`tabla-${base}.text`;
        
    } catch (err) {
        throw err
    }
}

module.exports = {crearArchivo}