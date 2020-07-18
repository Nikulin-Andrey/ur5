//Создать конвертер курсов валют: текстовое поле, два выпадающих списка с выбором валюты Из и В. При изменении текста в текстовом поле, а также выборе новых валют происходит конвертация и результат конвертации виден под формой в тексте "1000 RUB = XX USD". Не менее 4-х валют.
const start = document.getElementById('in');
const end = document.getElementById('to');
const sum = document.getElementById('sum');
const container = document.getElementById('container');

const valutes = [73.98, "USDRUB", 2.45, "USDBLR", 0.91, "USDEUR", 1, "USDUSD", 0.41, "BLRUSD", 0.37, "BLREUR", 30.29, "BLRRUB", 1, "BLRBLR", 80.91, "EURRUB", 1.09, "EURUSD", 2.67, "EURBLR", 1, "EUREUR", 0.033, "RUBBLR", 0.014, "RUBUSD", 0.012, "RUBEUR", 1, "RUBRUB"];


start.addEventListener("change", printResult);
end.addEventListener("change", printResult);
sum.addEventListener("change", printResult);

function printResult() {
        const check = start.value + end.value;
        const course = valutes.findIndex((valut) => valut === check);
        container.innerText = `${sum.value} ${start.value} = ${(sum.value * valutes[course - 1]).toFixed(2)} ${end.value}`;
}