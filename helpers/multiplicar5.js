const fs = require('fs')
const colors = require('colors')


const crearArchivo = async(base = 5, listar) => {
    try {

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }

            if (listar) {

                console.log('===================='.red);
                console.log(' TABLA DEL: '.rainbow, base);
                console.log('===================='.red);
                console.log(salida);
                
                        
            }
            fs.writeFileSync(`tabla-${base}.text`,salida);
        
            return`tabla-${base}.text`;
            
            
    } catch (err) {
        
        throw err
        }

}

module.exports = {crearArchivo}