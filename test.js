//    MAP method in Arrays
const Array00 = [200, -254, 566, 252, 7, -222];
const balance = Array00.reduce(function (accumulator, curElem, array) {
  console.log(accumulator);
  return accumulator + curElem;
}, 0);
