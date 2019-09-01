const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// Creamos una función que recibirá la dirección y devolverá el clima:
const getInfo = async(direccion) => {
    // Gestionamos los errores en caso de que no exista una dirección:
    try {
        // ahora creamos una constante con las coordenadas:
        const coords = await lugar.getLugarLatLng(direccion);
        // Y otro con la temperatura:
        const temp = await clima.getClima(coords.lat, coords.lng);
        // Devolvemos el clima:
        return `El clima de ${direccion} es de ${temp}.`;
    } catch (error) {
        // Y devolvemos un fallo si no existe la dirección:
        return `No se pudo determinar el clima de ${direccion}`;
    }


}

// Arrancamos la función y le pasamos la dirección de yargs:
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);