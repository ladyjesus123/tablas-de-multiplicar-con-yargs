'use strict'
/*
sentencia FOR
for(sentencia incial, sentenciaevaluacion, sentenciaIncremento)
*/

let base = 5//crear variable con la tabla base que se va a trabajar

//se creo una funcion flecha  con el argumento "base" con valor por default 5 
const table = (base = 5) => {
    let resultado = ''//va acumulando
    console.log(`--------tabla del ${base}---------`)//lo que va a ir imprimiendo
for (let i = 1; i <= 10; i++) {
    resultado = resultado + ` ${base} x ${i} = ${i}  ${base*i}\n`;// captura los datos y los muestra
    }//el ciclo for para que llegue a la tabla del 10
    return resultado;//retorna el resultado
}
console.log(table(base));//se llama la funcion
console.log(table(10));
console.log(table(20));
console.log(table());
console.log(table(100));//ejercicio video

