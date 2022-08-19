// 01 Getting Started

// allows you to use website as mobile apps. Fast and Smoothly.
// before that it was request from browser to server, then the server sent new info back
// it took some time
// however with JS we can manipulate the things that user sees on browser
// without requesting new html page in order to show something new to user

// Why we need React for JS when we can use just JS?
// It just a framework/lib which allows you to get rid of much repetitave work in JS
/* 




*/
// 02 JavaScript Refresher
// Something about classes
// ES6 verison of writing of classes
class infoHuman {
  constructor() {
    this.gender = "female";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Human extends infoHuman {
  constructor() {
    super();
    this.name = "Max";
  }

  printName() {
    console.log(this.name);
  }
}

// ES6/Babel verison of writing of classes
const humanOne = new Human();
humanOne.name = "Bill";
humanOne.printName();
humanOne.printGender();

class someClass1 {
  name = "Bulat";

  printToConsole = () => {
    console.log(this.name);
  };
}

class someClass2 extends someClass1 {
  name = "Albert";
  gender = "male";
  printToConsole = () => {
    console.log(this.gender, this.name);
  };
}

const person0 = new someClass2();
console.log(person0.printToConsole());
/* 




*/
// 017 The Spread & Rest Operator
// The Spread
const numbers0 = [1, 2, 6, 4, 8, 7];
const numbers1 = [...numbers0, 11];

console.log(numbers1); // [ 1, 2,  6, 4,  8, 7, 11]

const personObj0 = {
  name: "Adam",
};

const personObj1 = {
  ...personObj0,
  age: "22",
};

console.log(personObj1); // { name: 'Adam', age: '22' }

// the Rest

const doFilter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(doFilter(1, 2, 8, 1)); // [ 1, 1 ]
/* 




*/
// 018 Destructuring

const numbers2 = [77, 3, 66, 4, 5];

[num1, , num2] = numbers2;

console.log(num1, num2); // 1 2
/* 




*/
// 019 Reference and Primitive Types Refresher
// arrays and objects are reference types!!!
// use dectructuring(...) inside of a new array/obj in order to create a new copy
/* 





*/
// React is all about the components
// cuz all UI is about components
/* 





*/
// To create React use "Create React App"
// https://github.com/facebook/create-react-app

// сначала скачать nodeJS (npm)

// npm install - watches all the json packeges you need to start the project
// somekind of update

// Создание нового приложения
// npx create-react-app my-app
// cd my-app
// npm start

// npm start
// Starts the development server.

// npm run build
// Bundles the app into static files for production.

// npm test
// Starts the test runner.

// npm run eject
// Removes this tool and copies build dependencies, configuration files and scripts into the app directory.
// If you do this, you can’t go back!
