// Exercise 1:
// Create a class Person with properties name and age. Implement a method “introduce” that logs "Hi, I'm {name} and I'm {age} years old."

class Person {
    constructor(name, age) {
        this.name = name;
        this.age =  age;
    };
    introduce(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`)
    }
}

const introduction = new Person("Mackinley", 75);
introduction.introduce();


// Exercise 2:
// Create a class Rectangle with properties width and height. Implement methods to calculate the area and perimeter of the rectangle.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    };
    calculateArea() {
        const result1 = this.width * this.height;
        console.log(`The area of the rectangle is ${result1}.`);
        return result1
    }
    calculatePerimeter() {
        const result2 = 2 * (this.width + this.height);
        console.log(`The perimeter of the rectangle is ${result2}.`);
        return result2;
    }

}

const calcArea = new Rectangle(2, 3);
calcArea.calculateArea();
calcArea.calculatePerimeter();

// Exercise 3:
// Create a base class Shape with a method calculateArea(). Create derived classes Circle and Rectangle that calculate their respective areas.

class Shape {
    calculateArea() {
        return"The area of the";
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        const area = Math.PI * Math.pow(this.radius, 2);
        console.log(`circle is ${area}.`);
        return area;
    }
}

class Rectangle2 extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        const area = this.width * this.height;
        console.log(`rectangle is ${area}.`);
        return area;
    }
}

const circle = new Circle(20);
circle.calculateArea();

const rectangle = new Rectangle2(7, 11);
rectangle.calculateArea();


// Exercise 4:
// Implement a class BankAccount with properties accountNumber and balance. Add methods to deposit, withdraw, and get the account info.

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if(amount <= this.balance) {
            this.balance -= amount;
        }else{
            console.log("Insufficient Balance")
        }
    }
    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
    }
}

const myAccount = new BankAccount("02020202", 50);
myAccount.deposit(45);
console.log(myAccount.getAccountInfo());

myAccount.withdraw(150);
console.log(myAccount.getAccountInfo());


// Exercise 5:
// Create a class Animal with properties name and species. Implement a method makeSound that logs the sound the animal makes.

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species; 
    }
    makeSound() {
        return `The ${this.name} says`;
    }

}

// Exercise 6:
// Extend the Animal class to create specific animal classes like Dog, Cat, and Bird. Implement their own makeSound methods.

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + ", aw aw.";
    }
}

class Cat extends Animal {
    makeSound() {
        return super.makeSound() + " meow meow.";
    }
}

class Bird extends Animal {
    makeSound() {
        return super.makeSound() + " tweet tweet.";
    }
}

const myDog = new Dog("Aso");
console.log(myDog.makeSound("dog"));
const myCat = new Cat("Pusa");
console.log(myCat.makeSound());
const myBird = new Bird("Ibon");
console.log(myBird.makeSound());



// Exercise 7:
// Implement a class Shape with properties color and name. Create classes Circle and Square that inherit from Shape and add their own properties.

class Shape2 {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}

class Circle2 extends Shape2 {
    constructor(color, name, radius) {
        super(color, name);
        this.radius = radius;
    }
}

class Square extends Shape2 {
    constructor(color, name, sideLength) {
        super(color, name);
        this.sideLength = sideLength;
    }
}

const firstCircle = new Circle2("red", "Circle", 5);
console.log(firstCircle);

const firstSquare = new Square("blue", "Square", 4);
console.log(firstSquare);

// Exercise 8:
// Create a class Person with properties name and age. Implement a method greet that logs a greeting message.

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `hello ${this.name}`;
    }
}

const secondPerson = new Person2("Yes you");
console.log(secondPerson.greet());

// Exercise 9:
// Implement a class Student that inherits from Person and adds a property studentID. Configure the “greet” method to include the student's ID

class Student extends Person2 {
    constructor(name, studentID) {
        super(name);
        this.studentID = studentID;
    }
    greet() {
        console.log(`Hello ${this.name}. Your student ID is ${this.studentID}`);
    }
}

const studentNew = new Student("Macky", "11111");
studentNew.greet();

