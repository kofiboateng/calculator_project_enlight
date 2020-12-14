// // // CONCEPTS

// // // 0) Logging
// console.log("Hello World");

// // // 1.1) Writing to a webpage

// document.write("<h1>Kelvin</h1>");

// // // 1.2) Write to a webpage at a certain ID
// let description = document.getElementById("description");
// console.log(description)
// description.innerHTML = "I'm a singer"

// // // 2) Variables — an item of data with a name and a value 

// let name  = "Samay";
// console.log(name);

// // // 3) Functions w/ paramaters — a set of instructions
// function sayHello(name, age) {
//   console.log("Hello ")
// }

// sayHello("Alex", 25);
// // // 4) Numbers & Operators

// let number1 = 2 
// let number2 = 5
// console.log(number1 + number2)
// description.innerHTML = description.innerHTML + number1 * number2


// // // 5) Event Listeners
// document.addEventListener("click", sayHello);


// // ——————————————————————————————————————————————————————
// // CALCULATOR DEMO

// // 1) get elements by IDs

let number1Input = document.getElementById("number1");
let number2Input = document.getElementById("number2");

let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

let answer = document.getElementById("answer")

// // 2) add event listeners to IDs

add.addEventListener("click", addNumbers);
subtract.addEventListener("click", subtractNumbers);
multiply.addEventListener("click", divideNumbers);
multiply.addEventListener("click", multiplyNumbers);

// // 2) create operator functions
function addNumbers(e) {
  let sum = parseInt(number1Input.value) + parseInt(number2Input.value);
  Answer.innerHTML = sum;
}
function subtractNumbers(e) {
  let difference = parseInt(number1Input.value) - parseInt(number2Input.value);
  Answer.innerHTML = difference;
}
function multiplyNumbers(e) {
  let product = parseInt(number1Input.value) * parseInt(number2Input.value);
  Answer.innerHTML = product;
}
function divideNumbers(e) {
  let quotient = parseInt(number1Input.value) / parseInt(number2Input.value);
  Answer.innerHTML = quotient;
}




