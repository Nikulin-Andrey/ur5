const container = document.getElementById('container');

function renderTable(items) {
    container.innerHTML = `
    <tr class="thead-light">
      <th scope="col" data-attribute="name" style="cursor: pointer">Имя</th>
      <th scope="col" data-attribute="age" style="cursor: pointer">Возраст</th>
      <th scope="col" data-attribute="position" style="cursor: pointer">Должность</th>
      <th scope="col" data-attribute="salary" style="cursor: pointer">Зарплата</th>
      <th scope="col" data-attribute="nameOfCeo" style="cursor: pointer">Имя начальника</th>
    </tr>
    `;

    items.forEach((item) => {
        container.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.position}</td>
            <td>${item.salary}</td>
            <td>${item.nameOfCeo }</td>
        </tr>
        `);
    });

}

function onDataLoaded(all) {
    const lines = all.split('\n');
    const names = lines.shift().trim().split(', ');
    const items = lines.map((line) => {
        return line.split(', ').reduce((result, value, index) => ({
            ...result,
            [names[index]]:value
        }), {});
    });
    items.forEach((item) => {
        item.age = Number(item.age);
        item.salary = Number(item.salary);
    })
    renderTable(items);

    container.addEventListener('click', function(e){
        if(e.target.hasAttribute('data-attribute')){
            items.sort((a,b) => a[e.target.getAttribute('data-attribute')] > b[e.target.getAttribute('data-attribute')] ? 1 : -1)
            renderTable(items);
        }
    });
}

function loadFile(fileName) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.csv', true);
    xhr.onload = function () {
        onDataLoaded(this.responseText);

    } 
    xhr.send(null);
}
loadFile();