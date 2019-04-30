/*
Se colocan siempre al principio los require
const fs require('express')
const fs require('./express')
*/

/* console.log(require('./config/yargs').argv); */
const argv = require('./config/yargs').argv;

const { calcularTabla, listarTabla } = require('./multiplicar/multiplicar');



let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];

switch (comando) {
    case 'list':

        listarTabla(base, limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err));
        break;

    case 'new':

        calcularTabla(base, limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log(`Comando '${comando}' No es Reconocido`)
        break;
}