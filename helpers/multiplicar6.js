const fs = require('fs')
const colors = require('colors')
const PDFDocument = require('pdfkit');

/*mandamos a la funcion crearArchivo 4 parametros ahora: 
base= numero base de la tabla multiplicar
listar= que es tipo booleano
hasta= que es hasta que numero multiplica la base 
limite= hasta que tabla se crearan se exportara en el archivo txt
*/
const crearArchivo = async (base = 5, listar = false, hasta, limite) => {
    try {
        let salida = '';

        // Genera cada tabla desde la base  hasta el limite que queremos
        for (let b = base; b <= limite; b++) {
            salida += `====================\n`;
            salida += `LADY CASTIBLANCO\n`;
            salida += `   TABLA DEL ${b}\n`;
            salida += `====================\n`;

            for (let i = 1; i <= hasta; i++) {
                salida += `${b} x ${i} = ${b * i}\n`;
            }
            salida += '\n'; // Agrega espacio entre tablas
        }

        //muestra en la consola si listar es verdadero si no da error 
        if (listar) {
            console.log('====================');
            console.log(`   TABLAS DESDE ${base} HASTA ${limite}`);
            console.log('====================');

            console.log(salida);
        }

        // como son dos variables se debe usar la variable que hay en app17 que se llama nombreArchivo
        //const nombreArchivo = `tabla_del_${base}_al_${limite}.txt`;
        //fs.writeFileSync(nombreArchivo, salida);

        // llamamos al archivo PDF en la carpeta salida
        const nombreArchivo = `./salida/tablas-del-${base}-al-${limite}-limite-${hasta}.pdf`;/*aqui estoy definiendo el nombre del archivo 
        en la ruta que puso el ingeniero en el video*/
        const doc = new PDFDocument();// creamos una variable constante llamada doc para crear un nuevo pdf
        doc.pipe(fs.createWriteStream(nombreArchivo)); //este codigo es para que lo que escribo en doc se guarde en elarchivo pdf por medio de pipe
        //y el fs.createWriteStream crea el archivo en el computador y da la ruta donde node debe guardarlo
        // Agregar contenido al PDF
        doc.fontSize(16).text(salida);//con doc.fontsize puedo cambiar el tamanio de la letra y .text coloca todo en el documento osea lo que se devuelva en salida
        // Finalizar y guardar el PDF
        doc.end(); //este comando cierra el archivo pdf y lo guarda con todos los cambios que hicimos 


        return nombreArchivo;
    } catch (err) {
        throw err;
    }
};

module.exports = { crearArchivo };