//Classes

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

//creating instances of the Car class
//instantiotion

const myCar = new Car("Toyota", 2022);
const anotherCar = new Car("Volkswagen", 2022);
console.log(myCar.name);
console.log(anotherCar.year);

//constructor function for creating a person object

function Person (name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    };
}

//creating instances of Person Object

const person1 = new Person("Joe", 18);
const person2 =  new Person("Aaron", 19);

person1.greet();
person2.greet();


//Concepts of OOP

//Encapsulation

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

const myAccount = new BankAccount("123456789", 1000);
myAccount.deposit(500);

console.log(myAccount.getAccountInfo());

myAccount.withdraw(1500);

console.log(myAccount.getAccountInfo());


//Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("AW aw!");
    }
}

const myDog = new Dog("Bantay");
myDog.eat();
myDog.bark();


//polymorphism

class Animal2 {
    makeSound() {
        return "This animal makes a noise";
    };
}

class Dog2 extends Animal2 {
    makeSound() {
        return super.makeSound() + ", the dog barks."
    };
}

const myDog2 = new Dog2();
console.log(myDog2.makeSound());


//Abstraction
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.make} ${this.model} is starting the engine`;
    }

    stop() {
        return `${this.Animalmake} ${this.model} is stopping the engine`;
    }

}

const myVehicle = new Vehicle("Toyota", "Camry");
console.log(myVehicle.start());

