const container = document.getElementById('container');

function renderItems(itemList) {
    itemList.forEach(function(item){
        const itemContainer = document.getElementById(`item${item.id}`);
        itemContainer.innerHTML = `
        <h2 data-attribute="shop${item.id}">${item.name}</h2>
        <ul id="shops${item.id}"></ul>
        <p>Год основания: ${item.year}</p>
        <p>${item.description}</p>
        <hr/>
        `;
    })
    container.addEventListener('click', function(e){
        if(e.target.hasAttribute('data-attribute')){
            const file = itemList.find(item => "shop" + item.id === e.target.getAttribute('data-attribute'));
            console.log(file.way)
            loadFile(`data/${file.way}`, file.id);
        }
    });
}

function loadFile(fileName, callBack) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileName, true);
    xhr.onload = function() {
        const items = JSON.parse(this.responseText);
        console.log(items);
        if(typeof(callBack) === 'function'){
            callBack(items);
        } else {
            onDataLoaded(items, callBack);
        }
    }
    xhr.send(null);
}

function onDataLoaded(shops, id){
    const shopContainer = document.getElementById(`shops${id}`);
    shopContainer.innerHTML = '<h3>Магазины:</h3>'
    shops.forEach((shop) => {
        shopContainer.insertAdjacentHTML('beforeend', `
        <li>
            <p>Адресс: ${shop.adress}</p>
            <p>Среднее дневное число покупателей: ${shop.people}</p>
            <p>Площадь торгового зала: ${shop.area}</p>
            <p>Год открытия: ${shop.year}</p>
        </li>
        `);
    })
    const area = shops.reduce((result, value) => result + value.area, 0);
    shopContainer.insertAdjacentHTML('beforeend', `
    <ul>
        <li>Количество магазинов: ${shops.length}</li>
        <li>Сумарная площадь магазинов сети: ${area}</li>
        <li>Средняя площадь магазинов сети: ${area/shops.length}</li>
        <li>Сумарное дневное число покупателей: ${shops.reduce((result, value) => result + value.people, 0)}</li>
    </ul>
    `);
}
loadFile('data/items.json', renderItems);