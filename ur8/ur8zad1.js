const getArgumentsSum = function () { //1 вычисление суммы всех аргументов
   let a = 0;
   for (let i = 0; i < arguments.length; i++) {
      a += arguments[i];
   }
   return a;
}
console.log(getArgumentsSum(1, 2, 3, 5));



const getRandomNumberFromTo = function (from, to) { //2 вычисление случайного числа от до
   return Math.round(Math.random() * (to - from) + from);
}
console.log(getRandomNumberFromTo(3, 10));



const getDotDistanse = function (a, b) { //3 Расстояние между двумя объектами-точками
   return Math.sqrt((Math.abs(a.x - b.x)) ** 2 + (Math.abs(a.y - b.y)) ** 2);
};
const a = {
   x: 2,
   y: 0
},
   b = {
      x: 2,
      y: 0
   };
console.log(getDotDistanse(a, b));



const getRGB = function () { //4 Генерацию случайного цвета в формате RGB()
   console.log("rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")")
};
getRGB();


const isPrimeNumber = function (x) { //5 Проверка простоты введенного числа
   let a = 0;
   for (let i = 1; i <= x + 1 / 2; i++) {
      if (x % i === 0) a++;
   }
   if (a > 2) alert("chislo " + x + " sostavnoe");
   else alert("chislo " + x + " prostoe");
}
isPrimeNumber(Math.round(Math.random() * 100));