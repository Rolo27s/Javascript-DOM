function getGeolocation(id) {
    const $id = document.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    const success = position => {
        let coords = position.coords;
        console.log(position);

        /* @latitud y longitud. Luego un numero entre 1 y 20 seguido de z (de zoom). 1 es lo más alejado posible y 20 lo más cercano posible. */
        $id.innerHTML = `
        <div>
            <p>Tu posición actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${Math.round(coords.accuracy)}</b> metros</li>
            </ul>
            
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener"}>Ver en Google Maps</a>
        </div>
        `;
    };

    const error = err => {
        $id.innerHTML = `<div><p><mark>Error: ${err.code}: ${err.message}</mark></p></div>`;
        console.log(`Error: ${err.code}: ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    // También existe el método watchPosition que irá actualizando la posición continuamente para revisar desplazamientos.
}

document.addEventListener("DOMContentLoaded", getGeolocation("geolocation"));