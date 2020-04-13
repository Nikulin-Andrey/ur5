const all = [["Андрей", "Соня", "Богдан", "Антон", "Коля"], ["IPhone", "Door", "TV", "tesla", "MacBook"], ["Минск", "Нью-Йорк", "Париж", "Москва", "Брест"]];
const div = document.getElementById('container');
setInterval(() => {
    div.innerHTML = `
    <div>${all[0][Math.round(Math.random() * 4)]} из города ${all[2][Math.round(Math.random() * 4)]} купил ${Math.round(Math.random() * 4 + 1)}шт. товара ${all[1][Math.round(Math.random() * 4)]}</div>`;
    setTimeout(() => div.innerHTML = '', 4000);
}, 5000);