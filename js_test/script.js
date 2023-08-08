var name = "Test";
console.log(name);

var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
console.log(sum);

var name = "Ram";
var collegeName = "Test College";
// var intro = "My name is " + name + "." + " I study in " + collegeName + ".";
var intro = `My name is ${name}. I study in ${collegeName}.`;
document.write(intro);

var age = 20;
if (age > 18) {
  document.write("YOU CAN VOTE");
} else {
  document.write("YOU CANNOT VOTE");
}

for (let i = 1; i <= 10; i++) {
  document.write(i);
}

function add(x, y) {
  document.write(`<br/> Sum = ${x + y}`);
}

add(10, 15);
add(20, 20);
add(1, 2);

// function product(x, y) {
//   return x * y;
// }

const product = (x, y) => x * y;

var result = product(2, 5);
document.write(`product = ${result}`);
