const container = document.getElementById('container');
const numberIn = document.getElementById('number');
const showBasket = document.getElementById('show_basket');
const itemsIn = JSON.parse(localStorage.getItem('itemsIn')) || [];

numberIn.innerText = itemsIn.length;

showBasket.addEventListener('click', renderBasket);

function renderBasket() {
    showBasket.nextElementSibling.firstElementChild.innerHTML = '';
    if (itemsIn.length === 0) {
        showBasket.nextElementSibling.firstElementChild.innerHTML = '<h4>Корзина пуста</h4>';
    } else {
        itemsIn.forEach((itemIn) => {
            showBasket.nextElementSibling.firstElementChild.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${itemIn.name}</td>
            <td>${itemIn.description}</td>
            <td><img src="${itemIn.img}" width="100"></td>
            <td>На складе: ${itemIn.number}штук</td>
        </tr>
        `);
        });
    }
    showBasket.nextElementSibling.firstElementChild.insertAdjacentHTML('beforeend', `
    <div id="basket_buttons" class="row">
        <button data-category="roll_up" type="button" class="btn btn-outline-primary">Свернуть</button>
        <button data-category="clear" type="button" class="btn btn-outline-primary">Очистить корзину</button>
    </div>    
    `);
    const buttons = document.getElementById('basket_buttons');
    buttons.addEventListener('click', function (e) {
        if (e.target.getAttribute('data-category') === 'roll_up') {
            showBasket.nextElementSibling.firstElementChild.innerHTML = '';
        } else {
            if (e.target.getAttribute('data-category') === 'clear') {
                localStorage.clear();
                itemsIn.length = 0;
                numberIn.innerText = itemsIn.length;
                renderBasket();
            }
        }
    })
}

function renderItems(items) {
    items.forEach(function (item) {
        container.insertAdjacentHTML('beforeend', `
        <div class="card">
            <img class="card-img-top" src="${item.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p>Количество на складе: ${item.number}</p>
            </div>

            <div class="card-footer">
                <button data-name="${item.name}" type="button" class="btn btn-outline-primary">В корзину</button>
            </div>
        `);
    });
    container.addEventListener('click', function (e) {
        if (e.target.hasAttribute('data-name')) {
            const item = items.find((item) => item.name === e.target.getAttribute('data-name'));
            itemsIn.push(item);
            numberIn.innerText = itemsIn.length;
            localStorage.setItem('itemsIn', JSON.stringify(itemsIn));
            console.log(item);
        }
    })
}

function loadFile() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = function () {
        const items = JSON.parse(this.responseText);
        console.log(items);
        renderItems(items);
    }
    xhr.send(null);
}

loadFile();