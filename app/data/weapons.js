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
      scissors: {
        weaponName: "scissors",
        darkColor: "#eab308",
        lightColor: "#a16207",
        defeats: ["paper", "lizard", "water"]
      },
      rock: {
        weaponName: "rock",
        darkColor: "#ef4444",
        lightColor: "#b91c1c",
        defeats: ["scissors", "lizard", "fire"]
      },
      paper: {
        weaponName: "paper",
        darkColor: "#3b82f6",
        lightColor: "#1d4ed8",
        defeats: ["rock", "spock", "water"]
      },
      lizard: {
        weaponName: "lizard",
        darkColor: "#a855f7",
        lightColor: "#7e22ce",
        defeats: ["spock", "paper", "water"]
      },
      spock: {
        weaponName: "spock",
        darkColor: "#14b8a6",
        lightColor: "#0f766e",
        defeats: ["scissors", "rock", "fire"]
      },
      fire: {
        weaponName: "fire",
        darkColor: "#f97316",
        lightColor: "#c2410c",
        defeats: ["scissors", "paper", "lizard"]
      },
      water: {
        weaponName: "water",
        darkColor: "#0ea5e9",
        lightColor: "#0369a1",
        defeats: ["rock", "fire", "spock"]
      },
    },
  ];
  