// let add = a + b;

// function add (a, b) {
//     a + b;
// }

// add(1,1);

//parameters, arguments

//function expression
// let add = function (a,b) {
//     a + b;
// }


// function calculate(num1, num2, operation) {
//     return operation(num1, num2)
// }

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// let result1 = calculate(5, 3, add);
// let result2 = calculate(5, 3, subtract);

// console.log("Result in addition: ", result1);
// console.log("Result in subtraction: ", result2);

//callback function
// function greet(name, callback) {
//     console.log("Hello "+name);
//     callback()
// }

// function sayGoodbye() {
//     console.log("Good bye!")
// }

// greet("Joe", sayGoodbye)

//Activity

// Exercise 1: Function Basics
// Create a function called greet that takes a name as a parameter and logs a greeting
// message with the name to the console. Then, call the function with your name.

function greet(name) {
   return console.log("Good Morning "+name);
}

greet("Mackinley");

// Exercise 2: Function Expression
// Create a function expression named add that takes two numbers as parameters and
// returns their sum. Call the function to add 5 and 7, then log the result.

function add(a, b) {
    return console.log(a + b)
}

add(5, 7);

// Exercise 3: Is Even
// Write a function called isEven that takes a number as a parameter and returns true if it's
// even and false if it's odd. Test the function with various numbers.

function isEven(n) {
    if (n % 2 == 0) {
        console.log("True");
    }
    else console.log("False");
}

isEven(10)


// Exercise 4: Local vs. Global Scope
// Declare a global variable globalVar with a value. Then, create a function that declares a
// local variable with the same name globalVar. Log the values of both variables inside and
// outside the function. What do you observe?

let globalVar = 5;

function observe() {
    let globalVar = 10;
    console.log(globalVar)
}

console.log(globalVar);
observe();


// Exercise 5: Function Hoisting
// Write a function named hoistedFunction and call it before the function declaration in your
// code. Does it work? Explain the behavior..

hoistedFunction();
function hoistedFunction() {
    console.log("Hoisted")
}


// Exercise 6: Higher-Order Function
// Create a higher-order function called mathOperation that takes two numbers and a
// callback function as parameters. The callback function should perform a mathematical
// operation. Use this higher-order function to add, subtract, multiply, and divide two
// numbers.

function mathOperations (num1, num2, operation) {
        return operation(num1, num2)
}

function add(c, d) {
    return c + d
}

function subtract(c, d) {
    return c - d
}

function multiply(c, d) {
    return c * d
}

function divide(c, d) {
    return c / d
}

let result1 = mathOperations(5, 4, add);
let result2 = mathOperations(5, 4, subtract);
let result3 = mathOperations(5, 4, multiply);
let result4 = mathOperations(16, 4, divide);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

// Exercise 7: Closure
// Create a function counter that returns a function. The returned function should increment
// a counter variable every time it's called. Use this to create two counters and observe if
// they share the same state.

function counter() {
    let incre = 0;
    return function () {
      incre++;
      console.log(incre);
    };
  }
  
  let counter1 = counter();
  let counter2 = counter();

  counter1();
  counter1();
  counter1();
  counter2();

//   Exercise 8: Function as a Parameter
// Write a function called applyFunction that takes a function and an array as parameters. It
// should apply the given function to each element of the array and return a new array with
// the results.

function applyFunction(funcparam, arrayparam) {
        return arrayparam.map(funcparam)
}

function added(e) {
    return e + 1
}

let array1 = [1, 2, 3, 4];
let resultArray = applyFunction(added, array1);
console.log(resultArray);


// Exercise 9: Callback Functions
// Create a function getUserData that simulates fetching user data from a server. It should
// accept a callback function as a parameter. Call the callback function with a user object
// once the data is retrieved

function getUserData(callback) {
    setTimeout(function () {
      let userData = {
        userId: 123456789,
        username: "mackinley_delacruz",
        email: "yahoo@gmail.com.com",
      };
      callback(userData);
    }, 1000);
  }
  
  function displayUserData(user) {
    console.log("User Data:", user);
  }
  
  getUserData(displayUserData);

