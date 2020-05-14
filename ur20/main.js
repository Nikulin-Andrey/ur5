const long = [], lati = [];

function getGeo() {
    return new Promise(function (resolve, reject) {
        const geo = window.navigator.geolocation.getCurrentPosition(function (pos) {
            resolve(pos);
        }, function (err) {
            reject(err);
        })
    });
}
function loadJSON(path) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.onload = () => resolve(JSON.parse(xhr.responseText));
        xhr.onerror = (err) => reject(err);
        xhr.send(null);
    })
}

function getDistance(longitude, latitude) {
    const distance = 2 * 6372795 * Math.asin(Math.sqrt(Math.sin(Math.abs(latitude[0] * 0.0175 - latitude[1] * 0.0175) / 2) ** 2 + Math.cos(latitude[0] * 0.0175) * Math.cos(latitude[1] * 0.0175) * Math.sin(Math.abs(longitude[0] * 0.0175 - longitude[1] * 0.0175) / 2) ** 2));
    const container = document.getElementById('container');
    container.insertAdjacentHTML('afterbegin', `<h2>Расстояние между точками = ${distance.toFixed(2)} метров`);
    console.log(distance);
}

function renderTable({ latitude, longitude }, name) {
    const tbody = document.getElementById('table').lastElementChild;
    tbody.insertAdjacentHTML('beforeend', `
    <tr>
        <td>${name}</td>
        <td>${longitude}</td>
        <td>${latitude}</td>
    </tr>   
    `);
    long.push(longitude);
    lati.push(latitude);
    if (long.length === 2 && lati.length === 2) {
        getDistance(long, lati);
    }
}

function initGeo() {
    getGeo().then(function (result) {
        console.log(result);
        renderTable(result.coords, 'Geo');
    }).catch(function (err) {
        console.error(err);
    });

}


async function initJSON() {
    const result = await loadJSON('https://freegeoip.app/json/');
    console.log(result);
    renderTable(result, 'API');
    renderWeatherTable(result);
}

async function renderWeatherTable({ latitude, longitude }) {
    const items = await loadJSON(`https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`);
    const weather_table = document.getElementById('wtable');
    weather_table.parentElement.insertAdjacentHTML('beforeend', `
    <thead>
        <th>Город</th>
        <th>Погода</th>
        <th>Температура</th>
        <th>Скорость ветра</th>
        <th>Атмосферное давление</th>
        <th>Влажность</th>
    </thead>
    `);
    for(let i = 0; i < 5; i++) {
        const weather = await loadJSON(`https://www.metaweather.com/api/location/${items[i].woeid}/`);
        
        console.log(weather);
        weather_table.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${weather.title}</td>
            <td>${weather.consolidated_weather[0].weather_state_name}</td>
            <td>${weather.consolidated_weather[0].max_temp.toFixed(2)} градусов по цельсию</td>
            <td>${weather.consolidated_weather[0].wind_speed.toFixed(2)} км/ч</td>
            <td>${weather.consolidated_weather[0].air_pressure} бар</td>
            <td>${weather.consolidated_weather[0].humidity}%</td>
        </tr>
        `);
    }
}

initJSON();
initGeo();