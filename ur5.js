//1
let a=prompt('vvedite a'), b=prompt('vvedite b'), c=prompt('vvedite c'), d=prompt('vvedite d');
a=Number(a);
b=Number(b);
c=Number(c);
d=Number(d);
const max = (a >= b) ? a : ((b >= c) ? b : ((c >= d) ? c : d));
alert(max);
alert(4 / (1 / a + 1 / b + 1 / c +1 / d));

//2
let a=prompt('vvedite a'), b=prompt('vvedite b'), c=prompt('vvedite c');
a=Number(a);
b=Number(b);
c=Number(c);

if((a + b) >= c && (a + c) >= b && (c + b) >= a ){
	alert('treugolnik vozmozhen');
}else alert('nevozmozhno');

//3
let x = prompt("enter x: "),y = prompt("enter y: ");
x = Number(x);
y = Number(y);
if(x % y === 0) alert(x + "/" + y + " delitsya nacelo i ravno " + x/y);
else alert("nacelo ne delitsya");

//4
let x = prompt("enter x: ");
x = Number(x);
if(x >= 2 && x <= 2 ** 41){
alert("Kb= " + x / 1024 + "\nMb= " + x / 1048576);
if(x / 1073741824 >= 1 && x / 1073741824 <= 1000 ) alert("\nGb= " + x / 1073741824);
}
else alert("chislobait nepravilnoe");

//5
let x = prompt("enter x: "),y = prompt("enter y: "),z = prompt("enter z: ");
x = Number(x);
y = Number(y);
z = Number(z);
if((x + y) >= z && (x + z) >= y && (z + y) >= x ){
alert((((x + y + z) / 2) * ((x + y + z) / 2 - x) * ((x + y + z) / 2 - y) * ((x + y + z) / 2 - z))**(1/2));
}
else alert("net treugolnika");

//6
let x = prompt("enter x: ");
x = Number(x);
if(x % 4 === 0){
alert("god visokosnii");
}
else alert("ne visokosnii")

 