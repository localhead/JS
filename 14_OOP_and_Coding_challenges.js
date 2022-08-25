"use strict";

// 14 Object - Oriented Programming

/* 
oop helps to organize code
About classes:
Classes allows to generate objects. 
Before we used to make an object literals

OOP has 4 fundamental principles:
Abstraction: Ignoring details that does not matter.

Encapsulation: Keeping properties and methods private inside of class.

Inheritance: Making all properties and methods 
of a certain class available to a child class.

Polymorphism: A child class can overwrite a
method it inherited from a parent class.
*/
/* 



*/
//  3 Ways of creating prototypical inheretance in JS

// 1. Constructor functions
// technique to create object in a function
// this is how Arrays Maps and Sets are implemented

// 2. ES6 classes
// syntatic sugar -
// Do not behave like classical OOP

// 3. Object.create
/* 



*/
// 208 Constructor Functions and the new Operator

// the blueprint
const Person = function (name, birth) {
  this.NamePerson = name;
  this.birthDay = birth;
  console.log(this);
};

console.log(Person);

// 1. New {} is created
// 2. function is called. this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const bill = new Person("Bill", 1996);
console.log(bill);

const max = new Person("Max", 1985);
const jane = new Person("Jane", 1998);

// check if max is created from Person prototype
console.log(max instanceof Person);
/* 



*/
// 209 Prototypes
// we have Person blueprint. But we dont want to place method inside of it
// Instead we will place method in the prototype of it.
// After this all the created objects from that blueprint will have access
// to that method. So this is actually the inheretance
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthDay);
};

// And all the objects that are created from Person will now have an access to
// calcAge method
bill.calcAge();
jane.calcAge();

// take a look on where they are stored
console.log(bill.__proto__);
// this __proto__ thing is created automaically when we create obj with 'new'
// and it inherits everything what we store in Person.prototype
console.log(bill.__proto__ === Person.prototype); // true

// actually Person.prototype is aprototype of every obj created from 'new'
console.log(Person.prototype.isPrototypeOf(bill)); // true
console.log(Person.prototype.isPrototypeOf(jane)); // true

// We can add props to blueprint
Person.prototype.species = "Human";
// and all the childs will inherit it
console.log(bill.species);
console.log(jane.species);

// we can check if some prop was inherit from parent, or its own child's prop
console.log(bill.hasOwnProperty("NamePerson")); // true
console.log(bill.hasOwnProperty("species")); // false
/* 



*/
// 210 Prototypal Inheritance and The Prototype Chain

const arr = [1, 2, 3, 7, 5, 4, 8, 3, 5]; // same as 'new Array === []'
console.log(arr.__proto__); // you will see all build-in the methods for arrays in JS engine
console.log(arr.__proto__ === Array.prototype); // true

// But what if we will add custom method for all the arrays? not only map(),push(),
// etc but something own

Array.prototype.customUnique = function () {
  // getting rid of all repeting elements
  return [...new Set(this)];
};

console.log(arr.customUnique());
// but its better not to touch built-in objs...
/* 



*/
//212 Coding Challenge #1

const Car = function (name, speed) {
  this.carName = name;
  this.carSpeed = speed;
};

const bmw320d = new Car("bmw320d", 120);
const mercedesE300 = new Car("Mercedes E300", 150);

Car.prototype.accelerate = function (amount) {
  return (this.carSpeed += amount);
};

Car.prototype.brake = function (amount) {
  return (this.carSpeed -= amount);
};

console.log(bmw320d.accelerate(15));
console.log(bmw320d.accelerate(25));
console.log(bmw320d.brake(75));

console.log(mercedesE300.accelerate(15));
/* 




*/
// 213 ES6 Classes
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(`${this.firstName} is ${2022 - this.birthYear} old`);
  }
}

const mike = new PersonCl("Mike", 1995);

console.log(mike.__proto__ === PersonCl.prototype); // true

mike.calcAge();

// Classes are not hoisted. Mesans that they cannot be used before they are declared
// Classes are first class citizens
/* 


*/
// 214 Setters and Getters

const account = {
  name: "Bill",
  movements: [250, 654, 555, 849, 465],

  // when this is called. its just  returns something
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // set always has to have only one argument!
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 465
account.latest = 500;
console.log(account); // [...,...,...,500]

class Class0 {
  constructor(fullName, birth) {
    this.fullName = fullName;
    this.birthYear = birth;
  }

  // instanse method
  // this will be added to prototype and will be inherited by childs
  calcAge() {
    console.log(`${this.firstName} is ${2022 - this.birthYear} old`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else console.log("fuuuuuck");
  }

  get fullName() {
    return this._fullName;
  }

  // static method that will not be in prototype and will not be inherited
  static hey() {
    console.log("hello!");
  }
}

const jim = new Class0("Jim Pavlov", 1997);
console.log(jim);
/* 




*/
// Object.create

const PersonProto = {
  calcAge() {
    this.age = 2022 - this.birthYear;
  },

  init(name, birth) {
    this.name = name;
    this.birth = birth;
  },
};

const harry = Object.create(PersonProto);

harry.birthYear = 1996;
harry.calcAge();
harry.init("Harry", 1994);

console.log(harry);
/* 



*/
// 217 Coding Challenge #2

class TheCar {
  constructor(model, speed) {
    this.modal = model;
    this.speed = speed;
  }
  get speedUS() {
    return (this.speed = this.speed / 1.6);
  }

  set JustSpeed(speed) {
    this.speedUS1 = speed * 1.6;
  }
}

const bmw = new TheCar("BMW", 100);
bmw.JustSpeed = 14;
console.log(bmw);
/* 



*/
// 218 Inheritance Between _Classes__ Constructor Functions

// Parent obj
const Person1 = function (name, birth) {
  this.firstName = name;
  this.birthYear = birth;
};

Person1.prototype.calcAge = function () {
  this.ageCalc = 2022 - this.birthYear;
  console.log(
    `This age - ${this.ageCalc} calced from Person1 Contructor function`
  );
};

const ron = new Person1("Ron", 1996);
ron.calcAge();
console.log(ron);

// Child obj. It inherits methods of Parent. calcAge for instance
const Student = function (name, birth, course) {
  // this props has Person1, so its better to glue them
  //this.firstName = name;
  //this.birthYear = birth;
  // Lets now glue Person1 and Student. we need to define 'this'
  // cuz this points to nowhere in function constructor
  Person1.call(this, name, birth);
  this.course = course;
};

// Here is where we link prototypes. So Person1 will be the proto of Student
// and Student will inherit everything from Person1

Student.prototype = Object.create(Person1.prototype);

Student.prototype.greet = function (pharse) {
  console.log(
    `Hello! my name is ${this.firstName}, I am ${(this.age =
      2022 - this.birthYear)} old and study at ${this.course} course ${pharse}`
  );
};

const kelly = new Student("Kelly", 2001, "Marketing");
kelly.greet("Fuck yeah!");
kelly.calcAge();
console.log(kelly);

console.log(kelly instanceof Student); // true
console.log(kelly instanceof Person1); // false but logically should be true

// lets fix that false of instance of Person in kelly
//Student.prototype.constructor = Student;
/* 




*/
// // 217 Coding Challenge #3

const TheCar1 = function (model, speed) {
  this.model = model;
  this.speed = speed;
};

TheCar1.prototype.showInfo = function () {
  console.log(
    `Car is ${this.model} / Total Speed is ${
      this.speed
    } km/h / Battery charge is ${this.charge === undefined ? "" : this.charge}%`
  );
};

TheCar1.prototype.accelerate = function (amount) {
  console.log(`${this.model} is accelerated to ${(this.speed += amount)} km/h`);
};

TheCar1.prototype.brake = function (amount) {
  console.log(`${this.model} is slowed down to ${(this.speed -= amount)} km/h`);
};

const Electric = function (model, speed, charge) {
  TheCar1.call(this, model, speed);
  this.charge = charge;
};

Electric.prototype = Object.create(TheCar1.prototype);

Electric.prototype.carCharge = function (amount) {
  console.log(
    `Car charged by ${amount}%. Total Charge is ${(this.charge += amount)}% now`
  );
};

const tesla = new Electric("Tesla Model S", 180, 35);
tesla.carCharge(15);
tesla.accelerate(10);
tesla.accelerate(15);
tesla.brake(50);
tesla.showInfo();
/* 




*/
// 220 Inheritance Between _Classes__ ES6 Classes

class PersonCl1 {
  constructor(name, birth) {
    this.firstName = name;
    this.birthYear = birth;
  }

  get age() {
    this.age = 2022 - this.birthYear;
  }

  showInfo() {
    console.log(
      `Person's name is ${this.firstName} / and birth year is ${this.birthYear}`
    );
  }
}

class StudentCl1 extends PersonCl1 {
  constructor(name, birth, course) {
    super(name, birth);
    this.course = course;
  }
}

const lana = new StudentCl1("Lana", 2003, "Computer Science");
console.log(lana);
/* 



*/
//  221 Inheritance Between _Classes__ Object.create

const PersonProto1 = {
  calcCock(cockDm) {
    this.cock = cockDm;
  },

  init(name, birth) {
    this.name = name;
    this.birth = birth;
  },
};

// Creating new obj which will inherit methods of PersonProto1
const StudentProto = Object.create(PersonProto1);

// Adding method to child
StudentProto.course = function (course) {
  this.course = course;
};

// Vince will access all the child and parent methods now
const Vince = Object.create(StudentProto);
Vince.calcCock(18);
Vince.course("Math");
Vince.init("Vince", 1997);
console.log(Vince);
/* 




*/
// 222 Another Class Example
// Incapsulation and Data Privacy
// We need it in order to save data inside of a class from accident manipulation from outside
// When we expose only a small interface, consisting of a few public methods - we can change incapsulated methods with more confident
// Its better to make everything incapsulated, and then decide which of them will be public.

// Its weird but devs agreed that if u want to show in your code that some prop or method should not be access from outside
// you just should add underscore before the name: movements(not private) becomes _movements(private)
class Account {
  // Public fields
  // locale = navigator.language;

  // Private fields. Cannot be accesible from outside.
  #movements = [];
  #pin;

  constructor(name, currency, pin) {
    this.owner = name;
    this.currency = currency;
    // Protected props
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
  }

  // Public interface of this Object
  deposit(amount) {
    this.#movements.push(amount);
    return this; // this is for chaining. so we could use methods
  }

  widthdraw(amount) {
    this.deposit(-amount);
    return this;
  }

  // This method should not be the part of public API
  // Private method that cannot be seen
  #approveLoan(amount) {
    return true;
  }

  requestLoan(amount) {
    if (this.#approveLoan(amount)) {
      this.deposit(amount);
      console.log("Loan Approved!");
    }
    return this;
  }
}

const account1 = new Account("Bob", "Dollar", 1111);
account1.deposit(250);
account1.widthdraw(140);

//  Private field '#movements' must be declared in an enclosing class
console.log(account1.#movements);
//  SyntaxError: Private field '#approveLoan' must be declared in an enclosing class
console.log(account1.#approveLoan());
/* 




*/
// 225 Chaining Methods in classes. Add return this; under every method of class and thats it
account1.deposit(250).deposit(500).widthdraw(144).requestLoan(444);
/* 




*/
// Coding challenge #4

class TheGasCarCl {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  accelerate(amount) {
    this.speed += amount;

    return this;
  }

  brake(amount) {
    this.speed -= amount;

    return this;
  }

  Info() {
    console.log(`Car is ${this.model} / Speed is ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends TheGasCarCl {
  // this prop will not accessed from parent class
  #charge;

  constructor(model, speed, charge) {
    super(model, speed);
    this.#charge = charge;
  }

  chargeB(amount) {
    this.#charge += amount;
    return this;
  }

  // We can change #charge only in this child class
  logCharge() {
    console.log("Charge is " + this.#charge);
    return this;
  }
}

const tesla3 = new EVCl("Tesla Model 3", 150, 75);

tesla3
  .accelerate(10)
  .chargeB(-15)
  .Info()
  .logCharge()
  .accelerate(20)
  .chargeB(-25)
  .Info()
  .logCharge()
  .brake(20)
  .chargeB(8)
  .Info()
  .logCharge();
