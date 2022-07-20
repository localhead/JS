/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages 
to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

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

const arrDogs = [dogs0, dogs1];

const dogsAge = dogs0.map(function (item) {
  if (item <= 2) return item * 2;
  if (item > 2) return item * 4 + 16;
});

const excludeDogs = dogsAge.filter(function (item) {
  return item > 18;
});

const averageDog = excludeDogs.reduce(function (accum, curElem, arrayInd) {
  console.log(accum);
  if (arrayInd == 4) return (accum + curElem) / excludeDogs.length;
  else return accum + curElem;
}, 0);

console.log(averageDog);
