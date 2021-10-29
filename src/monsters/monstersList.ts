// I - Bandit Captain
// I - Garbage Troll
// I - Goblin Chief
// I - Restless Ghost
// II - Giant Spider
// II - Orc Warlord
// II - Shadow Knight
// II - Wicked Witch
// III - Demon Prince
// III - Huge Dragon
// III - Lich Tyrant
// III - Vampire Queen

const end = <const>"End";

const MonsterKeys = <const>[
  "banditCaptain",
  "garbageTroll",
  "goblinChief",
  "restlessGhost",
  "giantSpider",
  "orcWarlord",
  "shadowKnight",
  "wickedWitch",
  "demonPrince",
  "hugeDragon",
  "lichTyrant",
  "vampireQueen",
];

type Monster = {
  rank: number;
  name: string;
  strength: number;
  toughness: number;
  undefeatedReward: number;
  defeatedReward: number | typeof end;
  ability: {
    name: string;
    description: string;
  };
};

type MonsterList = Record<typeof MonsterKeys[number], Monster>;

export const monsters: MonsterList = {
  banditCaptain: {
    rank: 1,
    name: "Bandit Captain",
    strength: 3,
    toughness: 4,
    undefeatedReward: 10,
    defeatedReward: 20,
    ability: {
      name: "Extortion",
      description:
        "After the Adventure Step, the player (or players) with the most ⭐ must lose 10 tokens",
    },
  },
  garbageTroll: {
    rank: 1,
    name: "Garbage Troll",
    strength: 3,
    toughness: 4,
    undefeatedReward: 10,
    defeatedReward: 20,
    ability: {
      name: "Awful Stench",
      description:
        "The price of all item cards is reduced by 5 tokens (to a minimum of 5 tokens)",
    },
  },
  goblinChief: {
    rank: 1,
    name: "Goblin Chief",
    strength: 4,
    toughness: 3,
    undefeatedReward: 10,
    defeatedReward: 15,
    ability: {
      name: "Robbery",
      description: "At the start of the Supply Step, each hero loses 5 tokens",
    },
  },
  restlessGhost: {
    rank: 1,
    name: "Restless Ghost",
    strength: 4,
    toughness: 4,
    undefeatedReward: 10,
    defeatedReward: 20,
    ability: {
      name: "Poltergeist",
      description:
        "After the Adventure Step, each player must pass 1 random item card from their hand to the player on their right.",
    },
  },
  giantSpider: {
    rank: 2,
    name: "Giant Spider",
    strength: 5,
    toughness: 4,
    undefeatedReward: 15,
    defeatedReward: 25,
    ability: {
      name: "Sticky Webs",
      description:
        "At the start of the Supply Step, each player is dealt 1 fewer item card",
    },
  },
  shadowKnight: {
    rank: 2,
    name: "Shadow Knight",
    strength: 5,
    toughness: 5,
    undefeatedReward: 15,
    defeatedReward: 30,
    ability: {
      name: "Terrifying",
      description:
        "During the Upgrade Step, the player (or players) with the most ⭐ must skip their Upgrade Step.",
    },
  },
  orcWarlord: {
    rank: 2,
    name: "Orc Warlord",
    strength: 4,
    toughness: 5,
    undefeatedReward: 15,
    defeatedReward: 30,
    ability: {
      name: "Pillage",
      description:
        "After the Adventure Step the player (or players) with the most ⭐ must discard 2 random item cards.",
    },
  },
  wickedWitch: {
    rank: 2,
    name: "Wicked Witch",
    strength: 5,
    toughness: 4,
    undefeatedReward: 15,
    defeatedReward: 30,
    ability: {
      name: "Polymorph",
      description:
        "At the end of the Shopping Step, each player must discard 1 random item card from their display and replace it with 1 random item card from the deck.",
    },
  },
  demonPrince: {
    rank: 3,
    name: "Demon Prince",
    strength: 5,
    toughness: 6,
    undefeatedReward: 20,
    defeatedReward: end,
    ability: {
      name: "Corruption",
      description:
        "During the Supply Step, the player (or players) with the most ⭐ must draft their first card randomly.",
    },
  },
  lichTyrant: {
    rank: 3,
    name: "Lich Tyrant",
    strength: 6,
    toughness: 5,
    undefeatedReward: 20,
    defeatedReward: end,
    ability: {
      name: "Raise Dead",
      description:
        "This monster is treated as having the abilities of all other monsters that have been defeated during this game.",
    },
  },
  vampireQueen: {
    rank: 3,
    name: "Vampire Queen",
    strength: 6,
    toughness: 5,
    undefeatedReward: 20,
    defeatedReward: end,
    ability: {
      name: "Demand Tribute",
      description:
        "After the Adventure Step, the player (or players) with the most ⭐ must choose to either lose 15 tokens or discard all items in their shop.",
    },
  },
  hugeDragon: {
    rank: 3,
    name: "Huge Dragon",
    strength: 5,
    toughness: 6,
    undefeatedReward: 20,
    defeatedReward: end,
    ability: {
      name: "Lay Waste",
      description:
        "After the Adventure Step, each player must choose to either discard 1 upgrade card of their choice or 1 random employee card.",
    },
  },
};
