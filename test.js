//    MAP method in Arrays
const Array00 = [200, -254, 566, 252, 7, -222];
const total = Array00.filter((mov) => mov > 0)
  .map((value, index, array) => {
    console.log(array);
    return Math.trunc(value * 1.1);
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(total);
