const array02 = [200, -254, 566, 252, 7, -222];
const owners = ["Zack", "Albert", "Bill", "Cylian", "Martha"];
console.log(owners.sort());

// Sorting arrays in accending order
array02.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

console.log(array02);

// Sorting arrays in decending order
array02.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
array02.sort((a, b) => a - b);
console.log(array02);
