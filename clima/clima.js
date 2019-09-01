// cargamos el modulo axios:
const axios = require('axios');

// creamos la función con una promesa para recuperar el clima y le pasamos la latitud y longitud:
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=a617c7fdc1f9164e64caaad8f8d09a92&lat=${lat}&lon=${lng}&units=metric`);
    return resp.data.main.temp;
}

// Exportamos el modulo getClima:
module.exports = {
    getClima
}