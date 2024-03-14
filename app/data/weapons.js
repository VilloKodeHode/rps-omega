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
    loss: ['rock', 'spock', 'water', "earth"],
    winText: {paper:"Scissors cuts Paper", lizard: "Scissors decapitates Lizard", fire:"Scissors absorbs heat from Fire", air:"Scissors cuts Air molecules"},
  },
  {
    weaponName: 'rock',
    lightColor: '#ef4444',
    darkColor: '#b91c1c',
    win: ['scissors', 'lizard', 'fire', "earth"],
    loss: ['paper', 'spock', 'water', "air"],
    winText: {scissors:"Rock dulls Scissors", lizard: "Rock crushes Lizard", fire:"Rock absorbs heat from Fire", earth:"Rock lays firmly on Earth"},
  },
  {
    weaponName: 'paper',
    lightColor: '#3b82f6',
    darkColor: '#1d4ed8',
    win: ['rock', 'spock', 'water', "air"],
    loss: ['scissors', 'lizard', 'fire', "earth"],
    winText: {rock:"Paper covers Rock", spock: "Paper disproves Spock", water:"Paper absorbs Water", air:"Paper flyes gracefully in the Air"},
  },
  {
    weaponName: 'lizard',
    lightColor: '#a855f7',
    darkColor: '#7e22ce',
    win: ['spock', 'paper', 'water', "earth"],
    loss: ['rock', 'scissors', 'fire', "air"],
    winText: {spock:"Lizard poisons Spock", paper: "Lizard eats Paper", water:"Lizard swims in Water", earth:"Lizard crawls happily on the Earth"},
  },
  {
    weaponName: 'spock',
    lightColor: '#14b8a6',
    darkColor: '#0f766e',
    win: ['scissors', 'rock', 'water', "air"],
    loss: ['paper', 'lizard', 'fire', "earth"],
    winText: {scissors:"Spock smashes Scissors", rock: "Spock vapourizes Rock", water:"Spock walks on Water", air:"Spock breathes in Air"},

  },
  {
    weaponName: 'fire',
    lightColor: '#f97316',
    darkColor: '#c2410c',
    win: ['spock', 'paper', 'lizard', "air"],
    loss: ['rock', 'scissors', 'water', "earth"],
    winText: {spock:"Fire burns Spock", paper: "Fire destroys Paper", lizard:"Fire kills Lizard", air:"Fire consumes and becomes larger by Air"},
  },
  {
    weaponName: 'water',
    lightColor: '#0ea5e9',
    darkColor: '#0369a1',
    win: ['rock', 'fire', 'scissors', "earth"],
    loss: ['spock', 'lizard', 'paper', "air"],
    winText: {rock:"Water engulfs Rock", fire: "Water extinishes Fire", scissors:"Water rusts Scissors", earth:"Water makes mud out of Earth"},
  },
  {
    weaponName: 'earth',
    lightColor: '#824d27',
    darkColor: '#351f10',
    win: ['scissors', 'fire', 'paper', "spock"],
    loss: ['rock', 'lizard', 'air', "water"],
    winText: {scissors:"Earth dulls Scissors", fire: "Earth extinishes Fire", paper:"Earth dirties Paper", spock:"Earth swallows Spock"},
  },
  {
    weaponName: 'air',
    lightColor: '#e5f7fc',
    darkColor: '#9facaf',
    win: ['rock', 'water', 'lizard', "earth"],
    loss: ['paper', 'scissors', 'spock', "fire"],
    winText: {rock:"Air tilts over Rock", water: "Air blows waves in Water", lizard:"Air blows away Lizard", earth:"Air blows dust on Earth"},
  },

];
