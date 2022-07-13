'use strict';

/*
underscore_case;
 first_name;
Some_Variable;
    calculate_AGE;
delayed_departure
*/

// изначально - это строка
// переделать в массив из этих строчек
// переформатированные слова перекинуть в новый массив
const initialStr =
  'underscore_case\n first_name\nSome_Variable\n    calculate_AGE\ndelayed_departure\n';

const camelCaseFun = function (initialStr) {
  // строку в массив
  const strArrInit = initialStr.split('\n');

  // массив для уборки пробелов
  const strArrTrim = [];
  for (const n of strArrInit) {
    // n[0] - обращение посимвольно
    strArrTrim.push(n.trim());
  }
  strArrTrim.pop();
  console.log(strArrTrim);

  // массив для лоурекейса первого символа
  const strArrTrLowerF = [];
  for (const n of strArrTrim) {
    strArrTrLowerF.push(n[0].toLowerCase() + n.slice(1));
  }
  console.log(strArrTrLowerF);

  // массив финал
  const strArrF = [];
  for (const n of strArrTrLowerF) {
    strArrF.push(n.split('_'));
  }
  console.log(strArrF);

  const arrayA = [];
  for (const n of strArrF) {
    arrayA.push(n[0]);
    arrayA.push(n[1][0].toUpperCase() + n[1].toLowerCase().slice(1) + '\n');
  }
  const b = arrayA[arrayA.length - 1].slice(
    0,
    arrayA[arrayA.length - 1].lastIndexOf('\n')
  );
  arrayA.pop();
  arrayA.push(b);

  const postFinStr = arrayA.join('');

  console.log(postFinStr);
};

const camelCaseFunJonas = function (initialStr) {
  const rows = initialStr.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'F'.repeat(i + 1)}`);
  }
};
//camelCaseFun(initialStr);
camelCaseFunJonas(initialStr);
