'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Reus',
      'Brandt',
      'Gotze',
    ],
  ],
  score: '3:2',
  scored: ['Lewandowski', 'Reus', 'Gotze', 'Lewandowski', 'Muller'],
  date: '14.10.2022',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const scoredLoop = [...game.scored];
console.log(scoredLoop); // [ 'Lewandowski', 'Reus', 'Gotze', 'Lewandowski', 'Muller' ]
for (const [i, name] of scoredLoop.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}

// 2
let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd;
}
average /= Object.values(game.odds).length;
console.log(average);

// 3

const numberTseam = Object.values(game.odds);
