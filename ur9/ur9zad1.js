//1.Написать функцию, которая принимает массив объектов и название ключа, по которому нужно его отсортировать. Вернёт новый массив с отсортированными объектами. Вывести вместе старый и новый массивы.
const sortArrayObject = function(arr, a) {
 const sarr = [...arr];
  sarr.sort((a, b) => a.a - b.a);
  return sarr;
}
let arr = [];
for(let i = 0;i < Math.round(Math.random() * 10 + 3); i++){
 arr.push({
   a: Math.round(Math.random() * 100),
    b: Math.round(Math.random() * 100)
  })
}
const a = "a";
console.log(arr);
console.log(sortArrayObject(arr, "a"));