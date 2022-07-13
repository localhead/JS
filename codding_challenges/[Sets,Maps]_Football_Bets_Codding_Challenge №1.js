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

// 1) Creating one player array for each team ('players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2 goalkeeper
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4)
const players1Final = [...players1, 'Thiago', 'Sane', 'Peresic'];
console.log(players1Final);

// 5)
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log('5)', team1, draw, team2);

// 6)
const printGoals = function (...players) {
  console.log(`6) ${players.length} goals were scored`);
};

printGoals('Reus', 'Muller', 'Gotze');

// 7)
team1 < team2 && console.log('Bayern Munich is more likely to win');
team1 > team2 && console.log('Borrusia Dortmund is more likely to win');
