const fs = require ('fs');//requaire colocar paquetes o archivos, fs crea archivos

const base = 500//variable
let salida = '';//acumula la tabla empieza vacia

console.clear();//limpia pantalla
console.log('==============');
console.log(`  tabla del ${base}      `);
console.log('==============');

for (let i = 1; i <= 10; i++) {
    salida +=  `${base} x ${i} = ${base * i}\n`;
}

console.log(salida);//crear un archivo para crear un archivo de salida

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;

    console.log(`tabla -${base}.txt creado con writeFile`);
}
)//fs biblioteca .writefile metodo .txt para que salga como archivo de texto



