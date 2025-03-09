// Write a **script** that declares variables using `let`, `const`, and `var`.

var my_name = "Sherif";
let my_age = 19;
const pi = 3.14;


// Perform **basic operations** using arithmetic and logical operators.

let x = 5, y = 2;

console.log(x + y); // 7
console.log(x - y); // 3
console.log(x * y); // 10
console.log(x / y); // 2.5
console.log(x % y); // 1
console.log(x ** y); // 25 (5²)

console.log(7 == "7"); // true
console.log(7 === "7"); // false
console.log(7 != "7"); // false
console.log(7 !== "7"); // true
console.log(5 > 7); // false
console.log(5 < 7); // true
console.log(5 >= 7); // false
console.log(7 <= 7); // true

console.log(1 < 2 && 2 < 3); // true
console.log(1 < 2 && 2 > 3); // false
console.log(1 < 2 || 2 > 3); // true
console.log(1 > 2 || 2 > 3); // false
console.log(!(1 > 2)); // true


// Practice **type conversion** (e.g., converting a number to a string).

let num = 5;
let num_to_str = Number(num);
console.log(num_to_str); // 5
