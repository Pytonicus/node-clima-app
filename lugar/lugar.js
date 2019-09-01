const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const direccionURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccionURL}`,
        headers: { 'X-RapidAPI-Key': '1f14a2a40amsh6e7f245e524a34dp12dde1jsnc6d380bafae4' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}

// Exportamos la función:
module.exports = {
    getLugarLatLng
}