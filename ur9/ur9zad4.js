//4.Вывести в консоль количество квадратов 60*60 пикселей, которые полностью поместятся в области просмотра страницы в виде сетки.
const S = window.screen.width * window.screen.height,
  a = 60;
console.log(`На экран поместится ${S / a ** 2} квадратов 60*60 пикселей`);