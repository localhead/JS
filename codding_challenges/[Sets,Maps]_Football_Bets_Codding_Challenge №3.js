'use strict';

const gameEvents = new Map([
  [14, 'Goal'],
  [17, 'Substitution'],
  [20, 'Goal'],
  [25, 'Yellow Card'],
  [47, 'Goal'],
  [65, 'Red Card'],
  [70, 'Yellow Card'],
  [72, 'Substitution'],
  [85, 'Substitution'],
  [88, 'Substitution'],
  [90, 'Goal'],
]);

//  1) Create an array 'events' of the
//  different game events that happend (no duplicates)

//  convert map to array , with duplicates.
//  Should be something like ['Goal', 'Yellow Card', 'Goal', ect ]

const arraySet = new Set();

for (const [key, value] of gameEvents) {
  arraySet.add(value);
}

console.log(arraySet);
const cleanArray = [...arraySet];
console.log(cleanArray);

//  2) Remove unfair yellow card at 70'th minute from game event log

for (const [key, value] of gameEvents) {
  if (key !== 70) console.log(`${key}: ${value}`);
}

// gameEvents.delete(64);

//  3) Evalute the average game event time and log

// 4) log this : [first half] 14: goal!

for (const [key, value] of gameEvents) {
  if (key <= 45) console.log(`[First half] ${key}: ${value}`);
  else console.log(`[Second half] ${key}: ${value}`);
}
