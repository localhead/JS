"use strict";

const futureDate1 = new Date(2022, 7, 26, 15, 23);
const futureDate2 = new Date(1994, 10, 14, 15, 23);
const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

console.log(calcDaysPassed(futureDate2, futureDate1));
