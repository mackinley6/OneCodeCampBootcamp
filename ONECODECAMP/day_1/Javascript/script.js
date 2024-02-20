//  function greet(name) {
//    console.log("Hello, " +name)
// }

// greet = (name) => console.log(`hello ${name}`);

// greet("Mark");

// let name = "Mackinley";
// let age = 6;

// console.log("Hello, my name is " +name + ". I am" +age+ "years old");

// console.log(`My name is ${name} and I am ${age} years old`);

// let num =[1, 2, 3];
// let [first, second, third] = num;
// console.log(`${first}, ${second}, ${third}`);

// const numbers = {
//     firstNum: 1,
//     secondNum:2,
//     thirdNum: 3
// }

// const {firstNum, secondNum, thirdNum} = numbers;
// console.log(firstNum, secondNum, thirdNum);


//Spread operators

// function sum(x, y, z) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers));

//Rest Operators

// function myFunction(firstArg, ...restOfArgs) {
//     console.log(firstArg);
//     console.log(restOfArgs);
// }

// myFunction("one", "two", "three", "four");


//Another example of Spread

const grades = {
    math: 94,
    english: 81,
    science: 72,
    pe: 99

}

const gradesWithEC = {
    ...grades,
    extraCurricular: 85
}

console.log(gradesWithEC);

//default parameters
//Assign Value on parameter
function multiply(a, b=5) {
    return a * b;
}