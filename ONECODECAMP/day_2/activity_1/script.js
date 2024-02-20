// Use arrow functions to calculate the square of a given number and log the result
// to the console.

const square = (number) => console.log(number * number);
square(3);

// Use template literals to create a welcome message that includes the name and
// age of a person.

const human ={
    firstName: "Mackinley",
    lastName: "de la Cruz",
    age: 3
};
const message = `Welcome and Happy Birthday ${human.firstName}. You are ${human.age} now`;
console.log(message);

// Use destructuring to extract the first and last name from a person object and log
// them to the console.

const {firstName, lastName} = human;
console.log(firstName);
console.log(lastName);


// Use the spread operator to merge two arrays into a single array

const landAnimals = ["dog", "cat ", "mouse"];
const seaCreatures = ["sirena", "shokoy", "whale"];

const animals = [...landAnimals, ...seaCreatures];
console.log(animals);


// Use default parameters to create a function that calculates the area of a
// rectangle. If no arguments are provided, assume a default length and width of 1.

const rectangleArea = (length = 5, width = 7) => {
   console.log(length * width)
}
rectangleArea();


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    introduce() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  const user1 = new Person("Mackinley", 33);
  user1.introduce();