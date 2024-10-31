const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe:'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                //default: false se quita, esta en app14.js
                describe: 'muestra la tabla en la consola'
            })
            
            .check((argv, options) => {
                if (isNaN(argv.b)) {
                    //NaN = Not a Number
                    throw 'la base tiene que ser un numero'
                }
                return true;//importante
            })
            .argv


module.exports = argv;