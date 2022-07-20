// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

1. Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that
   are at least 18 years old)
3. Calculate the average human age of all adult dogs 
(you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const dogs0 = [5, 2, 4, 1, 15, 8, 3];
const dogs1 = [16, 6, 10, 5, 6, 1, 4];

const aaa = dogs0
  .map((item) => {
    if (item <= 2) return item * 2;
    else return 16 + item * 2;
  })
  .filter((item, a, b) => {
    console.log(item);
    return item >= 18;
  })
  .reduce((accum, arrElem, arrInd, arrayItself) => {
    return accum + arrElem / arrayItself.length;
  }, 0);

console.log("res" + aaa);
