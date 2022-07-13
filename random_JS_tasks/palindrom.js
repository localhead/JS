// Палиндром
// Написать функцию, которая проверяет является ли строка палиндромом, или нет. Вернуть false / true

// Мой подход:
// 0 Проверка на четное количество символов. Четное - дальше, Нечетное - выход
    
// 1 перевод строки в нижний регистр. тк Заглавная А и не заглавная а - разные буквы для системы, но не для человека   string.toLowerCase()
    
// 2 переводим строку в массив, поскольку с ними проще работать    string.split('')

// 3 реверсим получивнуюся строку     string.reverse();

// 4 Лепим массив обратно в строку     string.join('')
// 5 Сравниваем

// Первый вариант. Длинный 
/* 
function fnPalindromCheck (str){
    let length;
    length = str.length;
    if (length % 2 != 0) {
        return (false)
    }

    // 1
    let strLower = str.toLowerCase();
    // 2
    let strArray = strLower.split('');
    // 3 
    let strRev = strArray.reverse();
    // 4 
    let strJoin = strRev.join('');

    // 5
    if (strJoin == strLower){
        return true;
    }
    else
        return false;
}

let str = 'Pappap'

console.table(fnPalindromCheck(str))
 */






// Второй вариант. Короткий

const fnPalindromCheck = str => {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}

console.table(fnPalindromCheck('Abba'))

// Все работет. !но не работает с эмодзи и со спецсимволами