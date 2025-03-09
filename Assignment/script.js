// Write a **script** that declares variables using `let`, `const`, and `var`.

console.log("Variables using let, const, and var");
var my_name = "Sherif";
let my_age = 19;
const pi = 3.14;


// Perform **basic operations** using arithmetic and logical operators.

let x = 5, y = 2;

console.log("Basic operations using arithmetic operators");
console.log(x + y); // 7
console.log(x - y); // 3
console.log(x * y); // 10
console.log(x / y); // 2.5
console.log(x % y); // 1
console.log(x ** y); // 25 (5²)
console.log("\n");

console.log("Basic operations using Comparison Operators");
console.log(7 == "7"); // true
console.log(7 === "7"); // false
console.log(7 != "7"); // false
console.log(7 !== "7"); // true
console.log(5 > 7); // false
console.log(5 < 7); // true
console.log(5 >= 7); // false
console.log(7 <= 7); // true
console.log("\n");

console.log("Basic operations using Logical Operators");
console.log(1 < 2 && 2 < 3); // true
console.log(1 < 2 && 2 > 3); // false
console.log(1 < 2 || 2 > 3); // true
console.log(1 > 2 || 2 > 3); // false
console.log(!(1 > 2)); // true
console.log("\n");


// Practice **type conversion** (e.g., converting a number to a string).

console.log("Type conversion");
let num = 5;
let num_to_str = String(num);
console.log(num_to_str); // "5"
console.log(typeof num_to_str); // "string"
console.log("\n");
