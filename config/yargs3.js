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
                demandOption: false,
                describe: 'muestra la tabla en la consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'muestra hasta que numero se va a multiplicar la base'
            })
            .option('lim', {
                alias: 'limite',
                type: 'number',
                demandOption: true,
                describe: 'muestra hasta que numero de tabla se hara'
            })

            .check((argv, options) => {
                if (isNaN( argv.b)) {
                    //NaN = Not a Number
                    throw 'la base tiene que ser un numero'
                }

                if (isNaN( argv.h)) {
                    //NaN = Not a Number
                    throw 'hasta, tiene que ser un numero'
                }

                if (isNaN( argv.lim)) {
                    //NaN = Not a Number
                    throw 'el limite tiene que ser un numero'
                }


                return true;//importante
            })
            .argv


module.exports = argv;