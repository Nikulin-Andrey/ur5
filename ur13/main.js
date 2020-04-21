const workers = [{
    name: "Nikulin",
    work: "dancer",
    date: "18.04.2015",
    salary: 2000
}, {
    name: "Petrov",
    work: "programer",
    date: "18.04.2010",
    salary: 5000
}, {
    name: "Ivanov",
    work: "QA",
    date: "18.04.2018",
    salary: 1500
}, {
    name: "Lukashenko",
    work: "Prezident",
    date: "18.04.1995",
    salary: 20000000
}, {
    name: "Kiseleva",
    work: "kept woman",
    date: "18.04.2015",
    salary: 2000
},];

function renderTable() {
    const container = document.getElementById('container');
    container.innerHTML = `
    <th>Имя</th>
    <th>Должность</th>
    <th>Дата начала работы <input type="button" id="sortD" value="Сортировка"></th>
    <th>Зарплата <input type="button" id="sortS" value="Сортировка"></th>
    `;
    workers.forEach((worker, index) => {
        container.insertAdjacentHTML('beforeend', `
        <tr id="worker${index}">
            <td>${worker.name}</td>
            <td>${worker.work}</td>
            <td>${worker.date}</td>
            <td>${worker.salary}</td>
            <td><button id="delete${index}">Удалить</button></td>
        </tr>
        `);
    })
};

function renderForm() {
    const form = document.getElementById('form');
    form.insertAdjacentHTML('beforeend', `
    <p>Введите имя</p>
    <p><input type=text id="name" value=""></p>
    <p>Введите должность</p>
    <p><input type=text id="work" value=""></p>
    <p>Введите дату начала работы</p>
    <p><input type=text id="date" value=""></p>
    <p>Введите зарплату</p>
    <p><input type=text id="salary" value=""></p>
    <p><input type=button id="add" value="Добавить сотрудника"></p>
    `);
    const add = document.getElementById('add');
    add.addEventListener('click', addWorker);
};

function addListner() {
    workers.forEach((worker, index) => {
        const del = document.getElementById(`delete${index}`);
        const tr = document.getElementById(`worker${index}`);
        del.addEventListener("click", () => {
            workers.splice(workers.findIndex(w => w.name === worker.name), 1);
            renderTable();
            addListner();
            addSort();
        });
    });
}

function addWorker() {
    const wname = document.getElementById('name');
    const wwork = document.getElementById('work');
    const wdate = document.getElementById('date');
    const wsalary = document.getElementById('salary');
    workers.push({
        name: wname.value,
        work: wwork.value,
        date: wdate.value,
        salary: wsalary.value
    });
    renderTable();
    addListner();
    addSort();
};

function addSort() {
    const sortSalary = document.getElementById('sortS');
    const sortDate = document.getElementById('sortD');
    let arr1 = [];
    let arr2 = [];
    sortSalary.addEventListener('click', () => {
        workers.sort((a, b) => a.salary - b.salary);
        renderTable();
        addListner();
        addSort();
    });
    sortSalary.addEventListener('dblclick', () => {
        workers.sort((a, b) => b.salary - a.salary);
        renderTable();
        addListner();
        addSort();
    });
    sortDate.addEventListener('click', () => {
        workers.sort((a, b) => {
            arr1 = a.date.split(".");
            arr2 = b.date.split(".");
            if(Number(arr1[2]) < Number(arr2[2])){
                return 1;
            }
            if(Number(arr1[2]) > Number(arr2[2])){
                return -1;
            }
            if(Number(arr1[2]) === Number(arr2[2])){
                if(Number(arr1[1]) < Number(arr2[1])){
                    return 1;
                }
                if(Number(arr1[1]) > Number(arr2[1])){
                    return -1;
                }
                if(Number(arr1[1]) === Number(arr2[1])){
                    if(Number(arr1[0]) < Number(arr2[0])){
                        return 1;
                    }
                    if(Number(arr1[0]) > Number(arr2[0])){
                        return -1;
                    }
                    return 0;
                }
            }
        });
        renderTable();
        addListner();
        addSort();
    });
    sortDate.addEventListener('dblclick', () => {
        workers.sort((a, b) => {
            arr1 = a.date.split(".");
            arr2 = b.date.split(".");
            if(Number(arr1[2]) < Number(arr2[2])){
                return -1;
            }
            if(Number(arr1[2]) > Number(arr2[2])){
                return 1;
            }
            if(Number(arr1[2]) === Number(arr2[2])){
                if(Number(arr1[1]) < Number(arr2[1])){
                    return -1;
                }
                if(Number(arr1[1]) > Number(arr2[1])){
                    return 1;
                }
                if(Number(arr1[1]) === Number(arr2[1])){
                    if(Number(arr1[0]) < Number(arr2[0])){
                        return -1;
                    }
                    if(Number(arr1[0]) > Number(arr2[0])){
                        return 1;
                    }
                    return 0;
                }
            }
        });
        renderTable();
        addListner();
        addSort();
    });
    
};

renderTable();
renderForm();
addListner();
addSort();