const fs = require('fs');

const base = 160
let salida = '';//para poder acumular la tabla de multiplicar

console.clear();
console.log('==============');
console.log(`  tabla del ${base}      `);
console.log('==============');

for (let i = 1; i <= 10; i++) {
    salida +=  `${base} x ${i} = ${base * i}\n`;
}

console.log(salida);
//crear un archivo para crear un archivo de salida

fs.writeFileSync(`tabla-${base}.txt`, salida)
    console.log(`tabla -${base}.txt creado con writeFileSync`);