'use strict';

// Learn more about this
// bind method
// hoisting
// Immediately Invoked Function Expressions
// callback functions
// Destructuring Arrays
// Destructuring Objects
// Enhanced Object Literals
// Closures

let str = 'Hello';
let strRand;
let length;
let numbRand = 1;
let newStr;
let i = 0;

//Длинна строки
length = str.length;
// Также можно посчитать длинну слова в конкретном элементе массива
length = newStr[i].length;

// Перевод строки в нижний регистр
let strLower = str.toLowerCase();
// Строка в массив
let strArray = strLower.split('');
// Реверс массива
let strRev = strArray.reverse();
// Склейка массива в строку
let strJoin = strRev.join('');

// Все тоже самое одной строкой
str = str.split('').reverse().join('');

// Допустим есть число и его нужно добавить в строку как символ.
strRand = strRand + (numbRand + '');

// Число (num) (например: 9119) в массив (arrayNum) ([9, 1, 1, 9])
const arrayNum = Array.from(String(num), Number);

// Строку из чисел в массив из Строк этих же чисел
var arrayOfNumbers = arrayOfStrings.map(Number);

// Строку из чисел в число
let resNumb = Number(stringNumbers);

// Минимальное и Максимальное значения в массиве из цифр ([2, 4, 6, -1])
const min = Math.min(...str);
const max = Math.max(...str);

// конвертация значений
// стринг в число.
// js очень удобен тем, что знает что ты хочешь сделать
console.log(Number('1991') + 9);
console.log(String(2000));

// Создание рандомного числа
let dice = Math.random() * 6;
// округляем рандомное число
dice = Math.trunc(Math.random() * 6);
console.log(dice);

// This creates a new array inside of an objects
new Array(4).fill(0);

// Убрать пустотые места внутри
const arrFilterEmpty = str.filter(function (el) {
  return el != '';
});
