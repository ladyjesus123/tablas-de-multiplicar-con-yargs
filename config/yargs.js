const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true
            })
            .option('1', {
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false
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