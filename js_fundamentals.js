"use strict";
/* 
Полезности

alt + arrow down/up - двигает строку вниз / вверх
alt + shift + a + выделение кода - коментарий
ctrl + / - comment
ctrl + d + Клик на тексте = изменение текста 
во всех местах в коде
win + ; = emodji shortcut

*/

/* 
Выражения 
Функции
Объекты
Все сущности в JS это Объекты!

Объект это набор свойств

Имя:Значение
Пример Объекта
{
    visible: true,   <- Ключ это visible. Значение это true
    colorDepth: 24,
    title: 'My Image',
    orientation: {    <- В данном случае у свойства значением является целый объект.
        angle: 0,
        type: 'landscape'
    },
    pixelDepth: 24,
    width: 1440
}
Массив в ДЖ - Это объект
Функция в ДЖ - Это объект 
Число в ДЖ - Ведут себя как объекты, но это примитивы
Строка в ДЖ - Ведут себя как объекты, но это примитивы 

в js 7 примитивов: число, строка, булево, андефайнд, нул, символ и большой инт
в js прикольно то, что тип имеет ЗНАЧЕНИЕ переменной, а не переменная! поэтому он сам может определять тип переменной.
*/

/*
console.log('Hello')
console.dir('Hello')
console.table('Hello')
 console - это объект. log - это метод. '.' - точка это доступ к свойству объекта. С помощью точки мы получаем доступ к методу объекта
('Hello') - это вызов метода. С аргументом внутри */

/* dir - отображает все свойства объекта

table - отображает все свойства объекта в табличном виде */

//Если в хроме вбить в консоли console и нажать enter то можно увидеть все свойства этого объекта

/* Название переменных в JS

Переменные которые не меняются в течение работы приложений
PascalCase  Пример: DB_PASSWORD , DB_USER... 

Все остальные переменные
camelCase   Пример:  */
/* 


Объявление переменных. Три ключевых слова
let , const , var
В чем разница между ними?

let a - переменная значение которой можно переприсваивать.
let a 
a = 20
let b
b = false

const c = 10

c = 20

Будет ошибка
TypeError:
Assignment to
constant variable */

/* 
Объявление и присваивание

console;log (a) - Будет ошибка (ReferenceError: is ont defined)

let a
console.log(a) - Будет ошибка (Undefined )

a = true

console.log(a) - Будеть просто (true) 

let myName

myName = 'Mark'

console.log (myName) */

/* Про типы переменных

Тип переменной определяется типом присваемого значения
!! Двойниые кавычки или одинарные - Разницы нет. Но нужно использовать только один тип

6 Приимитивных типов
String
Boolean
number
null
undefined
symbol

1 Ссылочный тип это объекты. Массивы, структуры и тд.

Можно иметь много ссылок в коде, которые будут ссылаться на один и тот же объект.
object
Например:

const objectA = {
    a: 10,
    b: true,
}

const objectB = objectA
objectB.a = 20

В objectA можно также добавить новое свойство. Оно добавиться автоматически в objectA 
objectB.c = 'AAA' */

/* Динамическая типизация.
Это свойство в джаваскрипте. В ДжаваС нет нужды указвать тип переменой. Ни string, int, char и тд.

function a(){
    console.log('Fuck You!')
}

a()
a = 10
a() // TypeError: a is not a function

В данном случае будет ошибка тк значение переменной - а было изменено 
Вывод - использовать const везде, где это возможно.


const a = () => {
    console.log('Thank You!')
}

a()
a = 10 // TypeError: Assignment to constant variable.
a()
*/

/* 
Правила работы с переменными:
Все переменные объявлять перед их использованием
Стараться использовать const везде где можно */

//Начало примера

/*

const myCity = {
    city: 'Moscow'
}
console.log(myCity)

myCity.popular = true
myCity.country = 'Russia'
console.log(myCity)


myCity.gay = true
console.log(myCity)


delete myCity.gay
console.log(myCity)


// В скобках если название свойства является той или иной переменной
myCity['trash'] = true
console.log(myCity)

// Попробовать удалить trash

delete myCity.trash

const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'

console.log(myCity)

*/

//Конец примера

//Вложенные объекты
//Начало примера

/* const myCity = {
    city:'Moscow',
    info: {
        isgood: true,
        country: 'Russia'
    }
}
console.log(myCity)
console.log(myCity.info.isgood)

delete myCity.info.isgood
console.log (myCity)
 */
//Конец примера

/* 
//Начало примера
const name = 'Bill'
const age = '23'

const userProfile = {
    age,
    name,
    Agreement: false
}

console.log (userProfile)
//Конец примера
 */

/* 
Глобальные объекты

window (для браузеров ), global <-  (для nodejs)

так как командаconsole находиться внутри global, console также можно вывести через
window.console.log(10)

в браузере ввести window, чтобы увидеть различные параметры окна браузера
в ноуджс ввести global, чтобы увидеть свойства 

globalThis - универсальная команда для браузера и ноуджс */

/* Про Методы

Метод - это свойство объекта, значение которого функция. 
 

// Начало примера
const myCity = {
    city: 'Moscow',
    cityGreeting: function() {
        console.log('Hello!')
    }
}

myCity.cityGreeting()

//Конец примера
*/

/* 
про JSON
JSON - Javascript Object Notation
Это формат обмена данными между компами в интернете

Пример кода JSON
{
    "userId" : 1,
    "id": 1,
    "title": "Home page",
    "status": {
        "completed": false
    }
}

Конвертация JSON в объект джаваскрипт
Делается это через этот метод
JSON.parse()

Конвертация В JSON
JSON.stringify()

//начало примера
Вбивать в браузере
const post = {
    title: 'My Post',
    likesQ: 5
}

JSON.stringify (post)

const postStringified = JSON.stringify(post)
JSON.parse(postStringified)
//Конец примера */

// Про Мутации в JS
// В этом примере видно, что в объекте происходит изменение оригинального объекта.
/* 

const person0 = {
    name: 'Jack',
    age: 25
}

const person1 = person0

person1.age = '28'
person1.name = 'Bill'
person1.city = 'London'

console.log(person1)

// Как этого измежать?
// 1 Вариант

const person0 = {
    name: 'Jack',
    age: 25
}

const person1 = Object.assign({}, person0)

person1.age = '28'
person1.name = 'Bill'
person1.city = 'London'

console.log(person0)
console.log(person1)
 */
//2 Вариант. Данный вариант позволяет избежать сохранения ссылок на вложенные объекты в новом объекте на новом объекте

/*
const person2 = {
    name: 'Bill',
    age: '25',
    info: {
        isgood: true,
        country: 'Russia'
    }
}

const person3 = JSON.parse(JSON.stringify(person2))

person3.name = 'Alice'
person3.age = '30'
person3.info.isgood = 'false'
person3.info.country = 'USA'

console.log(person2)
console.log(person3)

*/

// Про Функции
// Это блок кода, который можно выполнять многократно
/*
let a = 5
let b = 7

function ft_sum(a, b) {
    const c = a + b
    console.log(c)
}
ft_sum(a ,b)




let y = 10
let x = 35

function ft_multiply_return(a , b) {
    const c = a * b
    return c
}
c = ft_multiply_return(x, y)
console.log(c)
*/

/* 
// Передача значения по ссылке

const personOne = {
    name: 'Bob', 
    age: 65
}


function increasePersonAge(person) {
    person.age += 1
    return person
}
increasePersonAge(personOne)

console.log(personOne)
// Произошла мутация(изменение) внешнего объекта внутри функции
 */

// Внутри функции не рекомендуется мутировать внешние объекты
// Лучше создавать копию этого объекта внутри функции
/* 
const person0 = {
    name: 'John',
    city: 'Moscow'
}

function personNew(person) {
    const personUpdate = Object.assign({}, person)
    personUpdate.city = 'London'
    personUpdate.name = 'Paul'
    return personUpdate
}

const person1 = personNew(person0)
console.log(person1) 
*/

// Про Callback функции
// Пример
/* 
function callMe() {}

function fnWithCallback(callBackFn) {
    callbackFunction()
}

fnWithCallback(callMe)
 */

/* 
function printMyName() {
    console.log('Hello')
}

console.log('Wait for it...')

setTimeout(printMyName, 2000) */

// Правила работы с функциями
// Называй функции исходя из выполняющих задач
// Одна функция должна выполнять одну задачу
// Не рекомендуется менять внешние относительно функции переменные

// Про Области видимости
// ну я тут даже код писать не буду. суть в том что объявленные внутри функции переменные или функции
// не будут видны в других функциях или основной программе

// Пример
/* 
let a 
let b

function myFn () {
    let b
    a = true
    b = 10
    console.log(b)
}

myFn()

console.log(a)
console.log(b) */

// Строгий режим - режим для дж которая просит джей эс анализировать код более пристально
// 'use strict'
// Например не позволит использовать не объявленные переменные

// Операторы
// Это просто встроенная в JS функция.

// Бывают:
/* 
Арфиметичекие: + - * / 
Сравнения: === !== <= >=
Логические ! && ||
Присваивания: = 
Текстовые: typeof, instanceof, new, delete 


Унарные операторы:
а++
+а
delete Obj.a
typeof a
new Object()

Бинарные операторы:
a = 5
a + b
a += 5
a === b
a && b
*/

/* 
Boolean(undefined) // false
Boolean(' ') // false
Boolean('0') // true
Boolean('5.5') //true

// Тайпоф помогает определять тип переменной
typeof 10 // number
typeof 10 === 'number' // true

let a
typeof a // undefined

!10 // false
!0 //true
!'abc'  //false
!'' // true
!undefined // true

!!10 // true
!!0 //false
!!'abc'  // true
!!'' // false
!!undefined // false
 */

//Оператор разделения объекта на свойства
/* 
const button = {
    width: 22,
    text: 'Buy',
    color: 'blue' 
}

const redButton = {
    ...button,
    color: 'red'
    // ...button, - если записать это после - то red перезапишется на blue
}

console.log(redButton)
 */

/* 
const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'Yellow',
    width: 100,
    height: 300
}

const newButton = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(newButton)
*/

// Конкатенация строк
// Шаблонные строки
/* 
const h = 'hello'
const w = 'world'
const m = 'man!'
let numb = 10

const Greetings = `${h} ${w} ${m} ${numb}`
console.log(Greetings)
*/

// Функциональные выражения. Функции которые без имени

/* let a
let b

a = 10
b = 11

function(a, b) {
    let c
    b = a + 1
    c = a + b
    return c
}

console.log(c) */

// Другой пример
/* let a
let b
let res

a = 10
b = 11

const myFunction = function(a, b) {
    let c
    b = a + 1
    c = a + b
    return c
}

res = myFunction(a, b)

console.log(res)

setTimeout(function() {
    console.log('Hello Fuckers!')
}, 2000) */

// Стрелочные функции. Нет слова function. Начинаются сразу с параметров
// Стрелочные функции это выражения. Они анонимны

// Пример 1
/* (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}


// Пример 2
const myFn = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

const r = myFn(5, 3)
console.log(r)

//Пример 3
setTimeout(() => {
    console.log('Hello Fuckers!')
}, 2000)
 */

// Значение параметров функции по умолчанию
// Пример
/* function multByFactor (value, multi = 1) {
    return value * multi
}

multByFactor(10, 2) */

// Пример
/* 
const newPost = (post, addedAt = Date()) => ({
    ...post,
    date: addedAt
})

const firstPost = {
    id: 1,
    author: 'Me'
}

newPost(firstPost)
console.dir(newPost(firstPost)) */

// Про Обработку ошибок

// Пример с ошибкой
/* 
const fnWithError = () => {
    throw new Error('Some error')
}
fnWithError()
console.log('Continue...') */

// Поимка ошибок
/* try {
    // Выполнение блока кода
} catch (error) {
    // Этот блок выполняется в случае возникновения ошибок в блоке try
} */

// Ловим ошибку в примере с ошибкой выше
/* 
const fnWithError = () => {
    throw new Error('Some error')
}

try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...') */

// Про инструкции
// Пример инструкции это - объявление переменной let, const, if, else и тд.
// Выражения всегда возвращают значение, а инструкция выполняет действия. Каждую инструкцию нужно завершать точкой с запятой
// Инструкция не может быть трансформирована в выражение, А выражение в инструкцию могут. Инструкции не могут быть использованы как аргументы в вызове функций.

// Пример
/* 
let a;
const b = 5;

if (a > b) {
    console.log('a is bigger than b');
}

for (let i = 0; i++; i < 5) {
    console.log(i);
} */

// Про Массивы
// Это объект с цифровыми именами свойств.

/*
const myArray0 = [1, 2, 3, 8, 7]

const myArray1 = new Array(1, 2, 3)
console.table(myArray0)

myArray0[myArray0.length - 3] = 77
console.table(myArray0) 
*/

// Про Методы Массивов - push, shift, forEach, pop, unshift, map

/* 
// Добавим элемент в КОНЕЦ МАССИВА.
myArray0.push('aaa')
//console.table(myArray0)

// Удалить Конечный элемент
myArray0.pop()
//console.table(myArray0)

// Добавить элемент в НАЧАЛО МАССИВА
myArray0.unshift(true)

// удалить НАЧАЛЬНЫЙ элемент
myArray0.shift(true)

// Перебор элемента массива и применяется функция. Ничего не возвращает
myArray0.forEach(el => console.log(el * 2)) 
//console.table(myArray0)

// Перебор элемента массива и применяется функция. Возвращает новый массив
const resArray0 = myArray0.map(el => {
    return el * 3
})
console.table(resArray0)

// Узнаем индекс массива
console.log(myArray0.indexOf('Steven'))

// Узнаем есть ли такой элемент в массиве
console.log(myArray0.includes('Steven'))

// Удаленные элементы можно сохранять в константы
const removedElement = myArray0.pop()
*/

// Про деструктуризацию. Можно создавать новые переменные и давать им значений. по сути вытаскивает переменную из объекта с его значением.

// Пример 1
/* 
const userProfile = {
    info: 'bad',
    name: 'Bob',
    city: 'London',
}

const {name, info} = userProfile;

console.log(name);


// Пример 2
// тоже самое можно с массивами

const fruits = ['apple', 'orange']

const [fruitOne, fruitTwo] = fruits
console.log(fruitOne) */

// Пример 3. Более интересный
/* 
const userProfile = {
    name: 'John',
    age: '',
    city: 'Paris',
}

const userInfo = ({name, age, city}) => {
    if (!age) {
        return `User ${name} is probably dead. RIP`
    }
    return `User ${name} is ${age} years old and from ${city}`
}

userInfo(userProfile)
console.table(userInfo(userProfile))
 */

// Условные инструкции: if, else , switch, тернарный оператор
/* 
var a = 2
var b = -1

const sumPositiveNumbs = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if (a <= 0 || b <= 0) {
        return ('One of the arguments is not positive')
    }
    else {
        return a + b
    }
}

console.log(sumPositiveNumbs(a, b)) */

// Про Switch. Переключатель

/* 
const day = 12

switch (day) {
    case 12:
        console.log('День питания')
        break
    case 8:
        console.log('День питания')
        break
    case 11:
        console.log('День питания')
        break
    default:
        console.log('День работы')
}
 */

// Про тернарный оператор. Конструкция с тернарным оператором это выражение, которое возщвращает значение
// Условие (тут любое выражение) ? Выражение 1 (Если условние правдиво, тогда возвращается результат 1) : Выражение 2 (Если условие ложно, то возвращается результат 2)
// Пример
/* 
const value = true

value
    ? console.log('Условие истинно')
    : console.log('Условие ложно') */

// Пример

/* let value = 11
const res = value >= 0 ? value : -value
console.log(res) */

// Про циклы
/* for (let i = 0; i < 5; i++) {
    // something to do
} */

// Для перебора массивов лучше использовать forEach, map, reduce
/* 
const myArray = ['first', 'second', 'third']

myArray.forEach((elem, index) => {
    console.log(elem, index)
})
 */

/* 
// Про цикл For In 

const myObject = {
    name: 'Bill',
    city: 'London',
    age: '12',
}

for (const shit in myObject) {
    console.log(shit, myObject[shit])
}

// либо можно еще так

Object.values(myObject).forEach(value => {
    console.log(value)
})
 */

// Про модули.
// Модули позволяют структурировать код и позволяют избегать дублирования блоков кода

// синтаксис: export / import

/* 
//inside of file named: moduleOne.mjs 

const myName = () => {
    console.log('Error')
}

export default myName

//inside of file named: module2.js

import printMyName from './moduleOne.mjs' 

// потом нужно запускать написав в терминале node moduleTwo.js
*/

// импорт нескольких модулей
// inside of file named: moduleOne.mjs

/* 
const one = 1
const two = 2

export {
    one,
    two
}

//inside of file named: module2.js
// Имена переменных должны совпадать, но их можно переименовать

import {
    one as RenamedOne,
    two
} from './moduleOne.mjs'

console.log(RenamedOne)
consloe.log(two) */

// Правила работы с модулями: Модули должны быть многоцелевыми. Располагайте все экспорты внизу файла, а импорты вверху.
// По возможности делайте только export default. Только одну функцию внутри одного модуля

// Про Классы и прототипы
// Классы позволяют создовать прототипы для объектов

/* 
class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0  
    }

    upvote () {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First Comment')
console.log(firstComment)

firstComment instanceof Comment // true
firstComment instanceof Object  // true 
*/

// Про статические методы

/* class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0  
    }

    upvote () {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

// const a = new Comment('Text 1')
const a = Comment.mergeComments('First Comment', ' !!!  Second Command')
console.log(a)
*/

// Про расширение других классов

/* class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray (2, 5, 7) */

/* 













*/

/* 


// конвертация значений
// стринг в число.
console.log(Number('1991') + 9);
console.log(String(2000));

// приведение числа / type coercion
// js очень удобен тем, что знает что ты хочешь сделать
console.log('I am ' + 23 + 'years old');
console.log(23 - '10' + 9); // будет число
console.log('23' * '2'); // будет число

console.log('11' - '10' + 9 + '1'); // перевод в стринг

*/

// в чем разница между =, == и ===
// (=) - тут мы задаем значение

// (==) - тут мы сравниваем. НО строка '10' и число 10 в этом случае будут равны.
//        Всегда избегать этот тип сравнения. Иначе будут БАГИ!

// (===) - тут мы тоже сравниваем, НО теперь уже все строго. И значение и тип переменной должны быть одинаковыми.
//         строка '10' и число 10 в этом случае будут уже НЕравны.

/* // Попросить у юзера вести значение!
prompt('Было два козла. Сколько? .... на размышление дается 30 секунд. Время пошло.'); 

*/

/* 


// еще раз Про функции

// Начало тут

// [         Первый Вид          ]


// С именем. Стандартная. называется - Function Declaration. 
// Этот тип функции можно использовать до того, как они определены в коде!!!

const name = 'Bob';
const resGreet = ftGreetings(name);
console.log(resGreet);

function ftGreetings (personName) {
    return `hello ${personName}!!!`
}




// [         Второй Вид          ]
// Функция без имени. называется -  Function Expression. Этот тип функций "вверх не смотрят".
// Но заставляют писать функции сверху а потом использовать их ниже.

const year = 2022;
let birth = 1994;

const calcAge = function (year, birth) {
    return `Person is ${year - birth} years old`; 
}

const res = calcAge(year, birth);
console.log(res);



// [         Третий Вид          ]
// Стрелочные функции. Arrow functions

let birthYear = 1997;
let firstName = 'Aydar'

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement} years`;
}

const retirementRes = yearsUntilRetirement(birthYear, firstName);
console.log(retirementRes);


//Конец тут 

*/

/* 




*/
/* !!!    08 How JavaScript Works Behind the Scenes    !!!*/
/* 
How Js works underneath the hood
*/

/* 
JS is a High-Level. Object-Orientated, Multi-Paradigm Programming Language.
*/

/*

HERE are  SOME TERMS THAT ARE RELATED TO JS:

High Level - You do not have to take care of memory allocation. Like in C. 
The downside of that is that JS programs is never gonna be optimazed as well as C program.

Garbage-collected - You do not have to take care about garbage / unused memory. JS engine makes it for you.

Interpreted or just-in-time compiled - .......

Multi-Paradigm - You can use for codding either

Procedural (organazing programs in a linear way, with some functions in between) 
/ Object-oriented 
/ Functional programming paradigms.


Prototype-based object-oriented - all objects in JS are objects. 

First-class functions - functions are treated just like regular variables. We can pass functions in another functions

Dynamic - We do not have to define string, ints, chars etc. JS defines the type after we give variable the value

Single-threaded - defines how JS handles multiple tasks happening at the same time.
JS runs in one single thread. So it can only do one thing at a time

Non-blocking event loop

*/

/* 
Движок Хрома - называется V8
В нем так же есть и куча и стек 

JS uses Just-in-Time compilation 

*/

// var  в blocked scope (там где if) выходит за рамки этой области видимости
/* 






*/
/* this keyword*/
/*

В стрелочных функциях this будет ссылаться на фунцию в которую эта 
стрелочная функция вложена 

*/
/* 
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

// Наследование методов
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

*/

//  this usage

/* 
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2022 - this.year);
    // pre ES6 solution for moving this inside inner scope
    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    // solution where we use arrows because they take this from a parrent scope
    const isMillenialArrow = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
    isMillenialArrow();
  },
};
jonas.calcAge(); 
*/
/* 






// 09 Data Structures, Modern Operators and Strings [ES6 feature]
*/
// Destructuring arrays // изменение значений в массивах

/* 
const restaurant = {
    name: 'McDonalds',
    location: 'Plochad Pushkina 5A',
    categories: ['Beaf', 'Chicken', 'Vegetarian', 'Seafood'],
    drinks: ['Latte', 'Juice', 'Cola'],
    mainMenu: ['BigMac', 'BigTasty', 'MacChicken'],
  
    orderMethod: function (drinkIndex, mainIndex) {
      return [this.drinks[drinkIndex], this.mainMenu[mainIndex]];
    },
  };
  
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [beaf, , veg] = restaurant.categories;
console.log(beaf, veg);

// меняем местами
[beaf, veg] = [veg, beaf];
console.log(beaf, veg);

const [starter, main] = restaurant.orderMethod(2, 0);
console.log(starter, main);

// Nested Destructuring
const nested = [2, 3, [4, 5]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 'asa'] = [8, 9];
console.log(p, q, r); 
*/
/* 






*/
// Destructuring objects // изменение значений в объектах
const restaurant = {
  restName: "McDonalds",
  location: "Plochad Pushkina 5A",
  categories: ["Beaf", "Chicken", "Vegetarian", "Seafood"],
  drinks: ["Latte", "Juice", "Cola"],
  mainMenu: ["BigMac", "BigTasty", "MacChicken"],

  openHours: {
    monday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 10,
      close: 22,
    },
    sunday: {
      open: 0,
      close: 24,
    },
  },
  orderMethod: function (drinkIndex, mainIndex) {
    return [this.drinks[drinkIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    drinkIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.mainMenu[mainIndex]} and ${this.drinks[drinkIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ingOne, ingTwo, ingThree) {
    console.log(`Here is your pasta with ${ingOne}, ${ingTwo} and ${ingThree}`);
  },
  orderDrinks: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Butovo 7a",
  mainIndex: 2,
  drinkIndex: 2,
});

const { restName, openHours, categories } = restaurant;
//console.log(restName, openHours, categories);

const {
  restName: restaurantName,
  openHours: hours,
  categories: tags,
} = restaurant;
//console.log(restaurantName, hours, tags);

// Default values when the data in objects are unknown. Notice 'menu'
const { menu = [], drinks: drinksMenu = [] } = restaurant;
console.log(menu, drinksMenu);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects

const {
  friday: { open: openHour, close },
} = openHours;
console.log(openHour, close);
/* 








*/
// Spread operator + restaurant object to use that I made above
// Using of spread operator make sence only when we use commas "," to separate values (!!!!!)
/* 
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const GoodNewArr = [1, 2, ...arr];
console.log(GoodNewArr);

const newMenu = [...restaurant.mainMenu, 'Hamburger'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// Join arrays, two or more
const mainMenuJoin = [...restaurant.mainMenu, ...restaurant.drinks];
console.log(mainMenuJoin);

// Iterables are arrays, strings, maps, sest, but NOT objects
const str = 'Meow';
const letters = [...str, '', 'S.!!!'];

// ввод числа с экрана в браузере
// real-world example

const ingredients = [
  prompt("Let's make pasta! IngOne?"),
  prompt("Let's make pasta! IngTwo?"),
  prompt("Let's make pasta! IngThree?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// making new objects and copy everything from restaurant object inside of it
const newRestaurant = {
  foundingYear: 1998,
  ...restaurant,
  founder: 'Vladimir Putin',
};
console.log(newRestaurant);
 */
/* 








*/
/* 
// The rest operator
//  SPREAD, because on RIGHT side of '='
const arr = [1, 2, ...[3, 4]];

//  REST, because on LEFT side of '='.
//  Rest takes multiple values and pick them into the array
const [x, y, ...other] = [1, 2, 3, 4, 5];
console.log(x, y, other);

const [food1, , food2, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.drinks,
];
console.log(food1, food2, otherFood);

// for objects
const { sat, ...restDays } = restaurant.openHours;
console.log(restDays);

// for functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

const numbArr = [23, 32, 75];
add(...numbArr);

restaurant.orderDrinks('Cola', 'Latte', 'Pepsi', 'Fanta', 'Tea');
*/
/* 







*/
// Short Circuiting (&& and OR)
// при или, перебор значений в цепи будет происходить до первого трушного значения,
// после чего дальше поиск происходить не будет
console.log("---- OR -----");
console.log(undefined || 0 || "" || "Hello" || 23 || null);

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// если numGuests был бы равен 23 (трушное значение), тогда guests2 имел бы значнеие 23
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND -----");
console.log(0 && "Jonas"); // 0

console.log(7 && "Jonas"); // Jonas

console.log("Hello" && 23 && null && "jonas"); // null

// aproach one
if (restaurant.orderDrinks) {
  restaurant.orderDrinks("Cola", "Latte");
}

// aproach two
restaurant.orderDrinks && restaurant.orderDrinks("Pepsi", "Fanta", "Nestea");
/* 







*/

/* 
// The Nullish Coalescing Operator
console.log('---- Nullish -----');
restaurant.numGuests = 0;

const guests3 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests3);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
/* 






*/
// Logical Assignment Operators [ES6 feature]
console.log("---- Logical Assignment Operators -----");

const rest1 = {
  name: "Burger King",
  numGuests: 20,
};

const rest2 = {
  name: "KFC",
  owner: "Warren Buffet",
  numGuests: 0,
};

// Будет хреново работать при numGuests = 0. Не будет менять
rest2.numGuests = rest2.numGuests || 10;
console.log(rest2);

// same as above
rest2.numGuests ||= 10;
console.log(rest2);

rest1.numGuests = 0;
rest2.numGuests ??= 10;

// Если существует имя - то мы может его заменить.
rest2.owner = rest2.owner && "<Name hidden>";
// same as above
rest2.owner &&= "<Name hidden>";
/* 






*/
// The for of Loop [ES6 feature]
// Перебор элементов в частях объекта
const menuLoop = [...restaurant.drinks, ...restaurant.mainMenu];
for (const item of menuLoop) console.log(item);

for (const item of menuLoop.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// same as above
for (const [i, elem] of menuLoop.entries()) {
  console.log(`${i + 1}: ${elem}`);
}
/* 








*/

// Enhanced Object literals
const subscriptionType = {
  premium: "1000$",
  basic: "500$",
  free: "0$",
};

const objExample1 = {
  categories: ["Hentai", "Redheads", "Blondes"],
  videoQuality: ["240p", "480p", "720p"],
  subscriptionType,

  // alternitive way of  declaring methods
  downloadVideo(categorieIndex = 1, videoQualityIndex = 2) {
    console.log(
      `${this.categories[categorieIndex]} video is downloading at ${this.videoQuality[videoQualityIndex]} quality video`
    );
  },
};

objExample1.downloadVideo(2, 2);
console.log(objExample1);

// wow....

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[1]]: {
    open: 14,
    close: 21,
  },
  [weekdays[2]]: {
    open: 11,
    close: 14,
  },
};
console.log(openingHours);

/* 








*/
// Optional Chaining (Оператор опциональной последовательности)
console.log("----Optional Chaining ----");
console.log(restaurant.openHours.monday.open);
// Проверим сцуществует ли такое свойство
//console.log(restaurant.openHours?.thusday?.open);

const days = ["monday", "tue", "wed", "thu", "friday", "sat", "sunday"];

for (const day of days) {
  //console.log(day);
  const open = restaurant.openHours[day]?.open ?? "closed";
  // ?? - этот оператор покажет 0, если открытие в 0.
  // А не 'closed' как при случае с ||

  //console.log(`On ${day}, we are open at ${open}`);
}

// проверка наличия метода в объекте
console.log(restaurant.order?.(0, 1) ?? "Method does not exist!");
console.log(restaurant.orderPasta?.(0, 1, 1) ?? "Method does not exist!");

// arrays
const users = [{ name: "Jonas", email: "hello@mail.com" }];
console.log(users[0]?.email ?? "User array is empty");
/* 












*/
// looping objects, Object keys, Values
console.log("----Looping objects, Object keys, Values----");
const properties = Object.keys(openHours);
console.log(properties); // [ 'monday', 'friday', 'sunday' ]

let openStr = `We are open ${properties.length} days a week: `;

for (const day of Object.keys(openHours)) {
  openStr += `${day},`;
}

console.log(openStr); // We are open 3 days a week: monday,friday,sunday,

// property values
const values = Object.values(openHours);
console.log(values); // { open: 12, close: 22 }

// Entire object
const entries = Object.entries(openHours);
console.log(entries); // [ 'monday', { open: 12, close: 22 } ]

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open at ${open} and closed at ${close}`);
  //On monday we are open at 12 and closed at 22
}
/* 











*/
// Sets

const ordersSet = new Set([
  "Pizza",
  "Big Mac",
  "Cola",
  "Pizza",
  "Big Mac",
  "Cola",
  "Pizza",
  "Big Mac",
  "Cola",
]);

console.log(new Set("Jonas"));
console.log(ordersSet.size);

// Check if set has exact element
ordersSet.has("Bread");

// Adding element to set
ordersSet.add("Cofe");

// deletting element from set
ordersSet.delete("Big Mac");

// clear whole set
//ordersSet.clear();

for (const order of ordersSet) console.log(order);

// there is no way of getting values out from the sets
// cuz if all values are unique  and their order does not matter
// there is no point of getting data drom the set
// all we need to know if there is the value we need in the set

// Removing duplicate values from the sets
const staff = ["Waiter", "Waiter", "Chef", "Chef", "Manager"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

/* 







*/
// Maps Fundamentals
const restMap = new Map();
restMap.set("name", "Mcdonalds");
restMap.set(1, "Moscow");
restMap.set(2, "New-York");
restMap
  .set("categories", ["Drinks", "Main", "Secondary", "Snacks"])
  .set("open", 11)
  .set("closed", 23)
  .set(true, "We are open!")
  .set(false, "We are closed");

// Сбор инфы с карты
restMap.get(1);
restMap.get(true);
console.log(restMap.get(false));

const time = 21;
const res = restMap.get(
  time > restMap.get("open") && time < restMap.get("closed")
);

console.log(time);

// Deleting elements from map
restMap.delete(2);

//  Getting the size
console.log(restMap.size);

/* 
















*/
// 118 Maps_ Iteration

const question = new Map([
  ["question", "What is the best football club?"],
  [1, "MU"],
  [2, "Barcelona"],
  [3, "Real Madrid"],
  ["correct", 3],
  [true, "correct!"],
  [false, "try again!"],
]);

const hoursMap = new Map(Object.entries(openHours));
console.log(openHours);

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('Your answer'));

//console.log(answer);

//console.log(question.get(question.get('correct') === answer));

// Converting Map to Array
console.log(...question);
/* 



*/
// What type of data structures to use and in which case
// какие структуры данных использовать и когда
/* 


*/
// simple list of values = ARRAY
// Key / value Pair = MAPS or OBJECTS
// Maps are just a better OBJECTS.
// When you have functions as values = OBJECTS

// When you are working with unique values
// and high performance is a priority = SETS
/* 









*/
// Working with strings

const airline = "Aeroflot Russia";
const plane = "Boieng 777";

// find position of char
console.log(airline[0]);
// strlen
console.log(airline.length);

// index of char in str
console.log(airline.indexOf("f"));

// last index of char in str
console.log(airline.lastIndexOf("o"));

// slice string method.
console.log(airline.slice(4)); // flot Russia
console.log(airline.slice(4, 8)); // flot

// extracting first words
console.log(airline.slice(0, airline.indexOf(" ")));
// extracting last words
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// extracting from the end
console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  const letter = seat.slice(-1);
  if (letter === "B" || letter === "E") console.log("Middle seat");
  else console.log("Good seat. Not middle");
  // B and E are middle seats
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

//  Behind the scene, Js convert every string to objects so you could you methods on them
//  Just like this:

console.log(new String("jonas"));
console.log(typeof new String("Jonas")); //objects

// And when the procesing is done JS returns new primitive string
/* 








*/
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = "BuLaT";

const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengeCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengeCorrect);

// Check E-mail
const email = "fasfas@gmail.com";
const logedEmail = "FasfAs@Gmail.com    \n";

const lowerEmail = logedEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// replaceing
const priceUS = "288,34 Dollars";
const priceEU = priceUS.replace("Dollars", "Euros").replace(",", ":");
console.log(priceEU);

// replacing all apperances of words
const sentence = "All passangers have to go to door A56. Boarding door is A56!";
console.log(sentence.replaceAll("door", "gate"));

// Booleans
const planeA = "A320neo";
console.log(planeA.includes("A320")); // true
console.log(planeA.startsWith("A340")); // false

// Practise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (
    baggage.includes("bomb") ||
    baggage.includes("knife") ||
    baggage.includes("gun")
  ) {
    console.log("You can not go to the plane");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("laptop, soap, bomb");
checkBaggage("knife, Socks, pen");
checkBaggage("Snacks, gun");
/* 







*/

const capitalizeName = function (item) {
  const names = item.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  return namesUpper.join(" ");
};

const passangers = "john and jessica davis";
console.log(capitalizeName(passangers));

// padding
const message = "Go to work!";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("Jonas".padStart(25, "+").padEnd(35, "-"));

// Real world padding usege

const maskCreditCard = function (number) {
  const str = String(number);
  return str.slice(-4).padStart(str.length, "-");
};

const creditCard = 5544730068597548;
const resCardMask = maskCreditCard(creditCard);
console.log(resCardMask);

//  Repeat
const message2 = "Bad weather .. Delayed";
console.log(message2.repeat(5));
/* 






*/
//10 A Closer Look at Functions

const bookings = [];

const createBooking = function (
  flightNum,
  passengersNum = 4,
  price = passengersNum * 2.12
) {
  const booking = {
    flightNum,
    passengersNum,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 3, 43);

/* 


*/
// callback
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...rest] = str.split(" ");
  console.log(first);
  console.log(rest);
  return [first.toUpperCase(), ...rest].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Before transform: ${str}`);
  console.log(`Result is: ${fn(str)}`);

  console.log(`Transformed by function: ${fn.name}`);
};

transformer("JS is the best!", upperFirstWord);
transformer("JS is the best!", oneWord);
/* 





*/

// functions returning other functions
/* 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const hey = greet('Hey');
hey('Bob');
*/

/* 
const greetArrow = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greetArrow('Hi')('Bill'); 
*/

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat of ${this.airline} flight ${this.iataCode}: ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
    console.log(this.bookings);
  },
};

lufthansa.book(239, "Bill Clinton");

const euroWings = {
  airline: "Lufthansa",
  iataCode: "EW",
  bookings: [],
};

// CALL METHOD
// we can copy methods from objects in variables.
// But it will be saved as a regular function call.
// That means that 'this' inside of copied method will point to undefinded
const book = lufthansa.book;

// чтобы метод в котором есть this можно было ипользовать в других объектах
// надо использовать метод call
book.call(euroWings, 23, "Sarah Connor");
console.log(euroWings);
book.call(lufthansa, 23, "Mario Balotelli");
console.log(lufthansa);

// APPLY METHOD (not used so often)
const flightPerson1 = [583, "Lionel Messi"];
book.apply(euroWings, flightPerson1);

// instead it is better to use spread operator
const flightPerson2 = [583, "Cristiano Ronaldo"];
book.call(euroWings, ...flightPerson2);
console.log(euroWings);
/* 




*/
// bind method
// вернет новую функцию

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);

bookEW(23, "Stever Gerrard");

// Можно задавать стандартные значения для аргументов
const bookEWwithDefaultNum = book.bind(lufthansa, 23);
bookEWwithDefaultNum("Kylian Mbappé");

// bind with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;

  console.log(this.planes);
};
console.log(lufthansa.buyPlane());

/* 
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); 
*/

// Partial App

const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 200));

const addVA = addTax.bind(null, 0.23);
console.log(addVA);
/* 






*/
// Immediately Invoked Function Expressions (IIFE)
// Функция которая ипользуется только один раз, в тот момент когда ее вызвали и все
// Нужна будет при использовании асинк - авейт
// Она создает скоуп со своими переменными к которым нельзя будет добраться.
// Защитить их, чтобы они не были случайно перезаписаны.
// По сути это просто прием разработки, а не фитча ДЖЭйЭС

// вот так выглядит IIFE
(function () {
  console.log("Runs only once ");
})();

// в виде стрелочной функции

(() => console.log("Arrow IIFE"))();
/* 




*/
// Closures - hardest JS thing (feature)
// Closure is not a thing someone will make on purpose.
// It is kinda happens automaticly.
// It is a fancy property of the fucntions in JS
// We just need to recognize these kinds of situations

// this function will create a closure
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount}`);
  };
};

// to runBooking we will save the function that returns
// secureBookig function.
const runBooking = secureBooking();

runBooking(); // 1 passenger
runBooking(); // 2 passenger
runBooking(); // 3 passenger

// The strange thing is thats
// expected output should have been looking like this:
// 1 passenger
// 1 passenger
// 1 passenger
// but runBooking somehow manages to remember the variables
// inside of secureBooking function

// Closure makes the function remember all the variables
// that existed at the function's birth place.

// To sum it up: Closures allows you to remember
// variables inside of the functions

//  WE SHOULD NOT CREATE CLOSURES MANUALY.
/* 











*/
// [11]   Working With Arrays
// Simple array Methods
let array11_0 = ["f", "u", "c", "k", "u"];

// Slice (does not mutate original array)
array11_0.slice(2); // [ "c", "k", "u"];
array11_0.slice(2, 4); // [ "c", "k" ];
array11_0.slice(-1); // [ "k" ];

// Splice (does mutate original array)
array11_0.splice(2);
console.log(array11_0); // ["f", "u"]
array11_0.splice(-1);
console.log(array11_0); // = ["f", "u", "c", "k"];

// reverse (does mutate original array)
let array11_1 = ["a", "b", "c", "d", "e"];
array11_1.reverse(); // reverse

// concat (does not mutate original arrays)
let letters = array11_0.concat(array11_1);
console.log(letters); // ["f", "u", "c", "k", "u", "a", "b", "c", "d", "e"];

// we can doo concat with destructuring (does not mutate original arrays)
letters = [...array11_0, ...array11_1]; // ["f", "u", "c", "k", "u", "a", "b", "c", "d", "e"];

// Join (?)
letters.join(" - "); // makes a string from an array
/* 





*/
// At Method (came from es2022)

const arr12_0 = [23, 5, 88, 666];
arr12_0[0]; // 23
arr12_0.at(0); // 23

// getting the last element
arr12_0[arr12_0[arr12_0.length - 1]]; // 666

arr12_0.slice(-1)[0]; // 666

arr12_0.at(-1); // 666

// at method also works on strings
const str12 = "bulat".at(-1); // 't'
/* 




*/
//Looping Arrays_ forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, key] of movements.entries()) {
  if (key > 0) {
    console.log(`Movement ${i + 1}: You have ${key}`);
  } else {
    console.log(`Movement ${i + 1}: You lost ${Math.abs(key)}`);
  }
}

// The same result as above but with forEach
movements.forEach(function (key) {
  if (key > 0) {
    console.log(`You have ${movements}`);
  } else {
    console.log(`You lost ${Math.abs(movements)}`);
  }
});
/* 

*/
// from Arrays_Codding Challenge #1
const juliaDogsA = [3, 5, 2, 12, 7];
const kateDogsA = [4, 1, 15, 8, 3];

const checkDogs = function (arrJulia, arrKate) {
  const juliaCats = arrJulia.slice(1, -1);
  const kateCats = arrKate;

  const runLog = function (array, whom) {
    array.forEach(function (age, i) {
      if (age > 3) {
        console.log(
          `${whom}'s Dog number ${i + 1} is an adult, and is ${age} years old`
        );
      } else {
        console.log(`${whom}'s Dog number ${i + 1} is still a puppy 🐶`);
      }
    });
  };
  runLog(juliaCats, "Julia");
  runLog(kateCats, "Kate");
};

checkDogs(juliaDogsA, kateDogsA);
/* 




*/
// 149 Data Transformations_ map, filter, reduce
//
//
//    MAP method in Arrays
const data = [200, 450, -400, 3000, -650, -130, 70, 1300];
const whatIsMap = data.map(function (arrayElem) {
  return Math.trunc(mov * 1.1);
});

// Itteration within the data
const dataDescription = data.map((arrayElem, arrayIndex, WholeArray) => {
  if (data > 0) {
    return `Number ${arrayIndex + 1}: You deposit is ${arrayElem}`;
  } else {
    return `Number ${arrayIndex + 1}: You withdraw is ${Math.abs(arrayElem)}`;
  }
});
/* 


*/
//    FILTER method in Arrays
const onlyPositiveValues = data.filter(function (mov) {
  return mov > 0;
});
console.log(onlyPositiveValues);
/* 



*/
// REDUSE method in Arrays.
// Allows you to Calculating Sum of all elements in array
const Array00 = [200, -254, 566, 252, 7, -222];
const balance = movements.reduce(function (
  accumulator,
  curElem,
  arrayInd,
  arrayItself
) {
  return accumulator + curElem;
},
0);

// Finding highest value in array with reduse
const maxNumb = movements.reduce(
  (accumulator, curElem, arrayInd, arrayItself) => {
    if (accumulator > curElem) return acc;
    else return curElem;
  },
  accumulator[0]
);
/* 



*/
// 155 The Magic of Chaining Methods
// Pipeline
const Array01 = [200, -254, 566, 252, 7, -222];
const total = Array00.filter((mov) => mov > 0)
  .map((value, index, array) => {
    console.log(array);
    return Math.trunc(value * 1.1);
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(total);
/* 




*/
// 157 The find Method
// this method allows you to find elements by condition. Returns only the first element, not the array!
const Array02 = [200, -254, 566, 252, 7, -222];
console.log(Array02.find((arrElem) => arrElem < 0));

person1 = {
  name: "Steve",
  age: 18,
};
person2 = {
  name: "Steve",
  age: 18,
};
const arrayPersons = [person1, person2];

console.log(arrayPersons.find((arrElem) => (arrElem.name = "Steve")));
/* 



*/
// 160 The findIndex Methods
const index = arrayPersons.findIndex((acc) => acc.name === "Steve"); // 0
/* 



*/
// 161 some and every Methods
// finding if there is something that passes the condition
// SOME - only one element should pass the condition
const someThingShouldPass = Array00.some((mov) => mov > 0); // true

// Separate callBack
const sepCallback = (mov) => mov > 0;

// EVERY - everythings should pass the condition
const everyThingShouldPass = Array00.some(sepCallback); // false
/* 



*/
/// 162 flat and flapMap

const array12_0 = [[1, 2, 3], [4, 5, 6], [7, 8], 9, 11];
console.log(array12_0.flat()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]

const array13_1 = [[[1, 2], 3], [4, [5, 6, 7]], 8, 9, 11];
console.log(array13_1.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
/* 



*/
/// 163 sorting arrays
const array02 = [200, -254, 566, 252, 7, -222];
const owners = ["Zack", "Albert", "Bill", "Cylian", "Martha"];
console.log(owners.sort());

// Sorting arrays in accending order [mutates original]
array02.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(array02);

// shorter version of accending sorting that came above:
array02.sort((a, b) => a - b);

// Sorting arrays in decending order [mutates original]
array02.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
// shorter version of decending sorting that came above:
array02.sort((a, b) => b - a);
console.log(array02);
/* 




*/
// 165 Programaticly creating and filling arrays 
const array03 = new Array(7); // [empty x 7]
// filling the array with things
const fromthisIndex = 3;
const tillThisIndex = 5;
array03.fill(1, fromthisIndex, tillThisIndex);

// thing that creates new array
const eweww = Array.from({ length: 7 }, () => 1); // [1,1,1,1,1,1,1]
const erere = Array.from,({length : 4}, (currentEl, itInd) => itInd + 1); // [1,2,3,4]
/* 




*/
// 166 Array Methods Practice 
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1.
// taking inner arrays from objects & and creating one big array of these arrays.
// Then filter them for only positive values
// Then sum everything in this array by using reduce
const backDepositsSum = accounts
  .map((obj) => obj.movements) // the array of arrays
  .flat() //one big array
  .filter((elem) => elem > 0) // filter negative values
  .reduce((accum, arrVal) => accum + arrVal, 0); // sum everything up
console.log(backDepositsSum); // 25180
/* 


*/
// 2.
const numDepositsMore1000 = accounts
  .flatMap((obj) => obj.movements) // arrays of array into one array
  .filter((elem) => elem >= 1000).length; // filter into new array than, getting its length
console.log(numDepositsMore1000); // 5
/* 


*/
// 3. Creating new object by using reduce method
const sums = accounts
  .flatMap((obj) => obj.movements)
  .reduce(
    (accum, elem) => {
      elem > 0 ? (accum.deposits += elem) : (accum.withdrawals += elem);
      return accum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);
/* 



*/
// 4. Converting string 'this is a nice title' into 'This Is a Nice Title
const convertTitle = function (title) {
  const exception = ["a", "an", "the", "but", "and", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase() // lowercase whole string
    .split(" ") // to array
    .map(
      (
        elem // elem here stands for every element of an array. ["first", "second", etc] / elem[0] is 'f' or 's' or 't', etc
      ) =>
        exception.includes(elem) ? elem : elem[0].toUpperCase() + elem.slice(1)
    )
    .join(" ");
  return titleCase;
};
console.log(convertTitle("this is a nice title"));
/* 











*/
//////// ---------- 12 NUMBERS, DATES, INTL AND TIMERS ---------- //////////
/* 




*/
// 170 Converting and checking numbers
console.log(23 === 23.0);

// base 10 - 0 to 9 1/10 = 0.1 .3/10 = 3.3333333
// binary base 2 - 0 and 1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // false
console.log(+"23"); // same as console.log(Number('23'))

// Pasing
console.log(Number.parseInt("25 This string that contains this Number: "));
console.log(Number.parseFloat("48 This string 44 that contains this Number: "));
// not a number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN(23 / 0));

// isFinite - is a best way of checking if value is a number. Infinity - is not a finate
console.log(Number.isFinite(20)); // true
/* 




*/
// 171 Math and Rounding
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //Nan

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.15926535

console.log(Math.trunc(Math.random() * 6) + 1); // 6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.round(23.3)); // 24
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2)); // 2.34 - but its a string
console.log(+(2.345).toFixed(2));
/* 



*/
// 172 Remainder Operator
console.log(5 % 2); // 1
console.log(4 % 2); // 0
/* 


*/
// 173 Numeric Separators
const diameterSolarSystemKm = 287_460_000_000; 
console.log(diameterSolarSystemKm) // same as 287460000000

const priceCents = 354_859
console.log(priceCents); // 354859

const transferFee1 = 15_00
console.log(transferFee1);

const transferFee2 = 1_500
console.log(transferFee2);
/* 


*/
// 174 BigInt

console.log(Number.MAX_SAFE_INTEGER);
console.log(56565656548484818288418184818484818484818n); // n transforms big number into BigInt
console.log(BigInt(4545485696525632145698856366547885696));

console.log(Math.sqrt(564n)) // math operators will not work with BigInt;
/* 




*/
// 175 Dates & Times
// Creating of dates

const now = new Date();
console.log(now); // 2022-07-25T18:04:02.408Z

// Parsing the strings 
console.log(new Date('Aug 02 2020 18:02:41'));

console.log(new Date(2037, 10, 19, 15 , 23, 5)); // 2037-11-19T12:23:05.000Z
console.log(new Date(0)) // date since the begining UNIX time (launch); // Thu Jan 01 1970 01:00:00

// working with dates
const futureTime = new Date(2037, 10, 19, 15 , 23)
console.log(futureTime.getFullYear()); // 2037
console.log(futureTime.getFullMouth()); // 10
console.log(futureTime.getFullDate()); // 19
console.log(futureTime.getFullDay()); // day of the week! 4
//etc for hours, minutes and seconds
console.log(futureTime.toISOString()) // 2037-11-19T12:23:05.000Z
console.log(futureTime.getTime()); // how much miliseconds has pasted since UNIX time launch

