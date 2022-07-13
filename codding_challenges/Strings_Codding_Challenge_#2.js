// Strings Codding Challenge #2

// Вот эту хрень:
const initialStr =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Нужно Залогить вот так:

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// Функция . стрелочная.
// обрежет строкую на 3 символа слева. сделает апперкейс

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of initialStr.split("+")) {
  // flight - обрежет строчку через +
  // в цикле уже будет работать с отдельно взятой строкой до +
  console.log(flight);

  // дальше нам уже нужно будеть сплитнуть строку
  // но сохранить строки в отдельные переменные (они тоже строки)
  const [type, from, to, time] = flight.split(";");
  //console.log(type);

  // Дальше просто сохраняем все это в одну строку.
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replaceAll(":", "h")})`;
  console.log(output);
}
