const fs = require('fs');
var colors = require('colors');

let data = '';


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Solo se permite numeros es incorrecto ${base}`.warn);
            return;
        }
        if (!Number(limite)) {
            reject(`Solo se permite numeros es incorrecto ${base}`);
            return;
        }

        let data = `Tabla de Multiplicar del ${base}\n\n`;
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${ base * index}\n`;
        }

        if (data != '') {
            resolve(data);
        } else {
            reject('NO se pudo listar la tabla');
        }
    });
}

let calcularTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Solo se permite numeros es incorrecto ${base}`);
            return;
        }
        if (!Number(limite)) {
            reject(`Solo se permite numeros es incorrecto ${base}`);
            return;
        }
        let data = `Tabla de Multiplicar del ${base}\n\n`;
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${ base * index}\n`;
        }

        //metodo para guardar un archivo
        fs.writeFile(`tablas/Tabla ${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tablas/Tabla ${base}.txt`);
            }

        });
    });
}

module.exports = {
    calcularTabla,
    listarTabla
}