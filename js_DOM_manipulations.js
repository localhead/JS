// Манипуляции с DOM
/* Что такое DOM? document object model

ЭТО Структурированная репрезенатация хтмл документов. 
Это позволяет JS манипулировать ХТМЛ и ЦСС фалами

DOM это посредник между js и хтмл+цсс
DOM автоматически подгружается браузером, как только загружается хтмл файл.

DOM содержится в древоподобной структуре, в которой каждый хтмл эллемент - это объект

JS пожключается к DOM через объект который называется document. В самом верху дерева

DOM это часть Web API. но не часть JS. JS имеет доступ к этим API через браузер. 
и соответсвенно к DOM
(API - application programming interface)
*/
//
//

/* Что такое рефакторинг (refactoring) - это улучешние кода, 
при этом не меняя его функционала */
//
//
//
//
//     [Заметки]
//
//
/* 
Заметка №1
Если баттон с абсолютным позиционированием не реагирует на нажатие клика 
(когда хотим повесить на него эвентлисенер)
то нужно впихнуть этот баттон в элемент с position: relative. 
Тогда кнопка будет реагировать на нажатие
*/
//
//
//
//
//
//
//
//    [Guess My Number lesson]
//
//
//
//
/* Выбираем класс в хтмл. Потом в этом классе 
выбираем контент внутри класса (те текст) */

let b = document.querySelector('.message').textContent;
console.log(b);

/* меняем текст */

a = document.querySelector('.message').textContent = 'Правильна! Угадал!';
console.log(b);

/* Меняем стиль класса в CSS*/
document.querySelector('body').style.backgroundColor = '#60b347';

/* Добавляем/Убираем класс в CSS*/
const modal = document.querySelector('.modal');
modal.classList.add('hidden');
modal.classList.remove('hidden');

// Добавление класса при условии, что его нет
player0El.classList.toggle('player--passive');

/* 
Про Event Listener . В этом примере '.check' - это класс кнопки, которая будет тригериться
'click' - это действие которое, будет применяться к кнопке '.check' 
и которая будет запускать функцию, которая идеть вторым аргументом. 
В функции мы можем прописать 
все действия, которые мы хотим сделать после нажатия кнопки.
 
один Клик = проходка функции.
*/
document.querySelector('.check').addEventListener('click', function () {});

//
//
//
//
//
//    [Modal window lesson]
//
//
//
//
/* 
Так как у нас три класса с одинаковым названием в хтмл - нам квериселектор не подойдет.
Поэтому нам нужно выбрать квериселекторОлл
*/
const btnsOpenModal = document.querySelectorAll('.show-modal');

/* 
У нас три кнопки и чтобы каждая сработала - мы используем луп и вешаем евентХэндлер 
на каждый класс 
*/
for (let i = 0; i < btnsOpenModal.length; i++) {
  /* Манипуляции с классами */
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Btn Clicked');
    /* Так как в классе modal след словом идет еще и класс hidden мы можем его удалить*/
    modal.classList.remove('hidden');
  });
}

/* Лучше смотреть весь код если честно... */

const addHiddenModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Закрытие модального окна при клике на крестик,
// НО обратить внимание что функцию мы вызываем без ()
btnCloseModal.addEventListener('click', addHiddenModal);

// Про временные интервалы
/* setTimeout */

let a = setTimeout(bye, 3000);

console.log('Hello');

clearInterval(a);
// До функции bye теперь не дойдет

function bye() {
  console.log('Goodbye');
}

/* setInterval */

let count = 0;

let intId = setInterval(counter, 3000);

function counter() {
  console.log(count++);
}

// Paste the picture acordingly. Changing picture in JS
const diceEl = document.querySelector('.dice-img');
diceEl.src = `./img/dice/dice-${diceRand}.png`;

/* 




*/
