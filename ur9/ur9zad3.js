//3.Написать скрипт, который выведет домен 1-го уровня той страницы, на которой запущен.
let arr = window.location.hostname.split(".");
console.log(arr[arr.length - 1]);