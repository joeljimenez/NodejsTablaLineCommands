const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10,
    }
};
const argv = require('yargs')
    .command('list', 'Imprime la Ayuda de los comandos', opts)
    .command('new', 'Imprime la Ayuda de los comandos', opts)
    .help()
    .argv;




module.exports = {
    argv
}