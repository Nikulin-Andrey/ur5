//1.Пользователь вводит строку. Найти и вывести самое длинное слово в этой строке. Вывести количество гласных (латинских) в этой строке (прописных и строчных вместе)
let str = prompt("enter string"),
  b = 0,
  c = 0,
  a = 0,
  z = 0,
  glas = "aeiouAEIOU";
for (let i = 0; i < str.length; i++) {
  a++;
  if (str[i] === " " || i === str.length - 1) {
    if (a > b) {
      b = a;
      c = i - b + 1;
    }
    a = 0;
  }
  for (let j = 0; j < glas.length; j++) {
    if (str[i] === glas[j]) {
      z++;
    }
  }
}
console.log(str.substr(c, b));
console.log(`glasnih ${z}`);




//2.Вывести в консоль или в окно количество минут, которое осталось до конца того дня, в котором запущен скрипт
let now = new Date(), end = new Date(), a = 0;
end.setHours(23);
end.setMinutes(59);
end.setSeconds(59);
a = (end - now) / 1000;

alert(a / 60);
alert(`${(a - a % 3600) / 3600}:${(a % 3600 - a % 60) / 60}:${a % 60}`);



//3.Создать массив из объектов-людей. Каждому задать случайную дату рождения от 1 января 1980 до 31 декабря 1995 (в виде объекта Date), имя, а также зарплату (от 0 до 500). Имена выбираются случайно из другого массива имён. Количество людей вводится с клавиатуры. Вывести всех людей в консоль, вывести средний возраст людей и имя человека с самой большой зарплатой в списке.
const n = prompt("enter number of people");
const people = [],
  namem = ['Dasha', 'Dzhenifer', 'taisa', 'Sonya', 'Andrey'];
let a = 0,
  b = -Infinity,
  c = 0;
for (let i = 0; i < n; i++) {
  people.push({
    d: new Date(1980 + Math.round(Math.random() * 15), Math.round(Math.random() * 30 + 1), Math.round(Math.random() * 30 + 1)),
    name: namem[Math.round(Math.random() * 4)],
    pay: Math.round(Math.random() * 500)
  });
  console.log(people[i].name + " " + people[i].d.toLocaleDateString() + " Pay:" + people[i].pay);
  a += people[i].pay;
  if (people[i].pay > b) {
    b = people[i].pay;
    c = i;
  }
}
console.log("\nsredn zarplata: " + a / n);
console.log("bigest zarplata u " + people[c].name + ": " + people[c].pay);