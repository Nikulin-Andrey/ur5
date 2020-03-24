//1 Пользователь вводит строку с текстом. Посчитать и вывести на экран количество согласных, гласных букв(латинских) в тексте, а также не-букв.
let glas = "aeiou",
  sogl = "bcdfghjklmnpqrstvwxyz",
  str = prompt("enter string"),
  a = 0,
  b = 0,
  c = 0;
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < glas.length; j++) {
    if (str[i] === glas[j]) {
      a++;
    }
  }
  for (let k = 0; k < sogl.length; k++) {
    if (str[i] === sogl[k]) {
      b++;
    }
  }
}
c = str.length - a - b;
alert(`glasnih ${a} soglasnih ${b} ostalnih ${c}`);



//2 Пользователь вводит число. Определить и вывести, является ли число простым или составным
let x = prompt("enter x: "), i, a = 0;
x = Number(x);
i = Number(i);
a = Number(a);
for (i = 1; i <= x + 1 / 2; i++) {
  if (x % i === 0) a++;
}
if (a > 2) alert("chislo sostavnoe");
else alert("chislo prostoe");


//5 Пользователь вводит с клавиатуры число, знак арифметической операции и ещё одно число. Вывести результат введенной операции с введенными числами.
const a = Number(prompt("vvedite chislo")),
  b = prompt("vvedite znak"),
  c = Number(prompt("vvedite chislo"));
if (b === "+") {
  alert(`${a} + ${c} = ${a + c}`);
} else
  if (b === "-") {
    alert(`${a} - ${c} = ${a - c}`);
  } else
    if (b === "*") {
      alert(`${a} * ${c} = ${a * c}`);
    } else
      if (b === "/") {
        alert(`${a} / ${c} = ${a / c}`);
      } else
        if (b === "%") {
          alert(`${a} % ${c} = ${a % c}`);
        } else {
          alert("ne tot znak");
        }


//6 Пользователь вводит число K.  Вывести K-е число Фибоначчи.
let a = 1, b = 1, c = 0, k = Number(prompt("vvedite k"));
for (let i = 0; i < k - 2; i++) {
  c = a + b;
  a = b;
  b = c;
}
alert(c);
// ряд я начал с 1 1 2 3 5 ...



//7 Пользователь вводит кол-во секунд (не больше 86 399). Вывести отформатированное значение: часы:минуты:секунды. Например, 47843 = 13:17:23
let a = Number(prompt("vvedite sekundi <= 86399"));
if (a <= 86399) {
  alert(`${(a - a % 3600) / 3600}:${(a % 3600 - a % 60) / 60}:${a % 60}`);
} else {
  alert("ne to chislo");
}
