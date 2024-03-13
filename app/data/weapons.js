//! Not activly in use. Used sometimes for testing


// old database, colors only:
export const weapons = [
  {
    scissors: ["#eab308", "#a16207"],
    rock: ["#ef4444", "#b91c1c"],
    paper: ["#3b82f6", "#1d4ed8"],
    lizard: ["#a855f7", "#7e22ce"],
    spock: ["#14b8a6", "#0f766e"],
    fire: ["#f97316", "#c2410c"],
    water: ["#0ea5e9", "#0369a1"],
  },
];

// Used as a tester to check if the data is working:
export const weaponsInfo = [
  {
    weaponName: 'scissors',
    lightColor: '#eab308',
    darkColor: '#a16207',
    win: ['paper', 'lizard', 'fire', "air"],
    loss: ['rock', 'spock', 'water', "earth"]
  },
  {
    weaponName: 'rock',
    lightColor: '#ef4444',
    darkColor: '#b91c1c',
    win: ['scissors', 'lizard', 'fire', "earth"],
    loss: ['paper', 'spock', 'water', "air"]
  },
  {
    weaponName: 'paper',
    lightColor: '#3b82f6',
    darkColor: '#1d4ed8',
    win: ['rock', 'spock', 'water', "air"],
    loss: ['scissors', 'lizard', 'fire', "earth"]
  },
  {
    weaponName: 'lizard',
    lightColor: '#a855f7',
    darkColor: '#7e22ce',
    win: ['spock', 'paper', 'water', "earth"],
    loss: ['rock', 'scissors', 'fire', "air"]
  },
  {
    weaponName: 'spock',
    lightColor: '#14b8a6',
    darkColor: '#0f766e',
    win: ['scissors', 'rock', 'water', "air"],
    loss: ['paper', 'lizard', 'fire', "earth"]
  },
  {
    weaponName: 'fire',
    lightColor: '#f97316',
    darkColor: '#c2410c',
    win: ['spock', 'paper', 'lizard', "air"],
    loss: ['rock', 'scissors', 'water', "earth"]
  },
  {
    weaponName: 'water',
    lightColor: '#0ea5e9',
    darkColor: '#0369a1',
    win: ['rock', 'fire', 'scissors', "earth"],
    loss: ['spock', 'lizard', 'paper', "air"]
  },
  {
    weaponName: 'earth',
    lightColor: '#824d27',
    darkColor: '#351f10',
    win: ['scissors', 'fire', 'paper', "spock"],
    loss: ['rock', 'lizard', 'air', "water"]
  },
  {
    weaponName: 'air',
    lightColor: '#e5f7fc',
    darkColor: '#9facaf',
    win: ['rock', 'water', 'lizard', "earth"],
    loss: ['paper', 'scissors', 'spock', "fire"]
  },

];
