



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

  export const weaponsInfo = [

    {
      weaponName: "scissors",
      lightColor: "#eab308",
      darkColor: "#a16207",
      win: ["paper", "lizard", "water"],
    },
    {
      weaponName: "rock",
      lightColor: "#ef4444",
      darkColor: "#b91c1c",
      win: ["scissors", "lizard", "fire"]
    },
    {
      weaponName: "paper",
      lightColor: "#3b82f6",
      darkColor: "#1d4ed8",
      win: ["rock", "spock", "water"]
    },
    {
      weaponName: "lizard",
      lightColor: "#a855f7",
      darkColor: "#7e22ce",
      win: ["spock", "paper", "water"]
    },
    {
      weaponName: "spock",
      lightColor: "#14b8a6",
      darkColor: "#0f766e",
      win: ["scissors", "rock", "fire"]
    },
    {
      weaponName: "fire",
      lightColor: "#f97316",
      darkColor: "#c2410c",
      win: ["scissors", "paper", "lizard"]
    },
    {
      weaponName: "water",
      lightColor: "#0ea5e9",
      darkColor: "#0369a1",
      win: ["rock", "fire", "spock"]
    },
  ];
  

// {"_id":{"$oid":"65e6e4cc8729d93fff8ff273"},"weaponName":"scissors","lightColor":"#eab308","darkColor":"#a16207","win":["paper","lizard","water"]}