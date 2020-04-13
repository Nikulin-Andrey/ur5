const N = prompt("Vvedite N: ");
const div = document.getElementById('container');
div.innerHTML = '<h1>Таблица умножения</h1>';
for (let i = 1; i <= N; i++) {
    div.insertAdjacentHTML("beforeend", `<h2>${i}:</h2>`);
    for (let j = 1; j <= 10; j++) {
        div.insertAdjacentHTML("beforeend", `<p>${i} * ${j} = ${i * j}<p>`);
    }
}
/*Если я неправильно понял задание, то может так праильно
for (let j = 1; j <= N; j++) {
    div.insertAdjacentHTML("beforeend", `<p>${N} * ${j} = ${N * j}<p>`);
}*/