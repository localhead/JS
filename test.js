// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1.
// taking inner arrays from objects & and creating one big array of these arrays.
// Then filter them for only positive values
// Then sum everything in this array by using reduce
const backDepositsSum = accounts
  .map((obj) => obj.movements) // the array of arrays
  .flat() //one big array
  .filter((elem) => elem > 0) // filter negative values
  .reduce((accum, arrVal) => accum + arrVal, 0); // sum everything up
console.log(backDepositsSum); // 25180
/* 


*/
// 2.
const numDepositsMore1000 = accounts
  .flatMap((obj) => obj.movements) // arrays of array into one array
  .filter((elem) => elem >= 1000).length; // filter into new array than, getting its length
console.log(numDepositsMore1000); // 5
/* 


*/
// 3. Creating new object by using reduce method
const sums = accounts
  .flatMap((obj) => obj.movements)
  .reduce(
    (accum, elem) => {
      elem > 0 ? (accum.deposits += elem) : (accum.withdrawals += elem);
      return accum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);
/* 



*/
// 4. Converting string 'this is a nice title' into 'This Is a Nice Title
const convertTitle = function (title) {
  const exception = ["a", "an", "the", "but", "and", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase() // lowercase whole string
    .split(" ") // to array
    .map(
      (
        elem // elem here stands for every element of an array. ["first", "second", etc] / elem[0] is 'f' or 's' or 't', etc
      ) =>
        exception.includes(elem) ? elem : elem[0].toUpperCase() + elem.slice(1)
    )
    .join(" ");
  return titleCase;
};
console.log(convertTitle("this is a nice title"));
