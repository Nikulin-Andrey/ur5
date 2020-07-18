let allDistance = 0;
let allWait = 0;

class App {
    constructor(elem) {
        this.elem = elem;
        this.map = null;
        this.stayContainer = [];
    }

    async start() {
        const data = (await axios.get('data.json')).data;
        this.stayContainer = data;


        ymaps.ready(() => this.initMap());
    }

    initMap() {
        this.map = new ymaps.Map("map", {
            center: [this.stayContainer[0].latitude, this.stayContainer[0].longitude],
            zoom: 7
        });
        const lines = new ymaps.Polyline([
            [this.stayContainer[0].latitude, this.stayContainer[0].longitude],
            [this.stayContainer[1].latitude, this.stayContainer[1].longitude],
            [this.stayContainer[2].latitude, this.stayContainer[2].longitude],
            [this.stayContainer[3].latitude, this.stayContainer[3].longitude]
        ]);
        this.map.geoObjects.add(lines);
        this.stayContainer.forEach((stay, i) => {
            const point = new ymaps.Placemark([stay.latitude, stay.longitude]);
            if (i > 0) {
                allDistance += ymaps.coordSystem.geo.getDistance([stay.latitude, stay.longitude], [this.stayContainer[i - 1].latitude, this.stayContainer[i - 1].longitude]);
            }
            allWait += stay.wait;
            this.map.geoObjects.add(point);
            point.events.add('click', () => this.showInfo(stay));
        })
    }

    showInfo(stay) {
        const infoContainer = this.elem.querySelector('#info');
        infoContainer.innerHTML = `
            <h3>Остановка ${stay.wait} часа</h3>
        `;
    }

    getTime() {
        const result = document.querySelector('#time');
        const speed = document.querySelector('#speed');
        const allTime = ((allDistance / 1000) / Number(speed.value) + allWait).toFixed(3);
        result.innerHTML = `
            <h4>Чтобы преодолеть весь путь со скорость ${speed.value}, вы потратите ${allTime} часов</h4>
        `;
    }
}

const app = new App(document.getElementById('app'));
app.start();
const btn = document.getElementById('go');
btn.addEventListener('click', app.getTime);