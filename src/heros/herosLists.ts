// 1 x Bard
// 2 x Cleric
// 1 x Demonslayer
// 2 x Fighter
// 2 x Mage
// 1 x Necromancer
// 1 x Nobleman
// 1 x Paladin
// 1 x Ranger
// 2 x Rogue
// 1 x Witch Hunter
// 1 x Young Hero

const HeroKeys = <const>[
  "bard",
  "cleric",
  "demonslayer",
  "fighter",
  "mage",
  "necromancer",
  "nobleman",
  "paladin",
  "ranger",
  "rogue",
  "witchHunter",
  "youngHero",
];

export type HeroClass = "mage" | "cleric" | "fighter" | "rogue";

type Hero = {
  class: HeroClass[];
  name: string;
  startingPurse: number;
  attack: number;
  defense: number;
  ability: {
    name: string;
    description: string;
  };
  quantity: number;
};

type HeroList = Record<typeof HeroKeys[number], Hero>;

export const heros: HeroList = {
  paladin: {
    class: ["cleric", "fighter"],
    name: "Paladin",
    startingPurse: 25,
    attack: 2,
    defense: 3,
    ability: {
      name: "Sheild Master",
      description:
        "After the Shopping Step, if this hero has a defense value of 6 or higher, gain 1 ⭐.",
    },
    quantity: 1,
  },
  necromancer: {
    class: ["mage", "cleric"],
    name: "Necromancer",
    startingPurse: 20,
    attack: 3,
    defense: 2,
    ability: {
      name: "Graveyard Shift",
      description:
        "After the Shopping Step, you may give 5 tokens to this hero to gain 1 employee card from the discard pile.",
    },
    quantity: 1,
  },
  bard: {
    class: ["mage", "rogue"],
    name: "Bard",
    startingPurse: 10,
    attack: 2,
    defense: 2,
    ability: {
      name: "Street Musician",
      description:
        "When this hero is drawn from the hero deck, each player must give 5 tokens to this hero, if able.",
    },
    quantity: 1,
  },
  demonslayer: {
    class: ["mage", "fighter"],
    name: "Demon Slayer",
    startingPurse: 25,
    attack: 3,
    defense: 2,
    ability: {
      name: "Blade Master",
      description:
        "After the Shopping Step, if this hero has an attack value of 6 of higher, gain 1 ⭐.",
    },
    quantity: 1,
  },
  fighter: {
    class: ["fighter"],
    name: "Fighter",
    startingPurse: 20,
    attack: 3,
    defense: 3,
    ability: {
      name: "Bravado",
      description:
        "At the end of the Adventure Step, if this hero successfully wounded the monster and survived, gain 1 ⭐.",
    },
    quantity: 2,
  },
  nobleman: {
    class: [],
    name: "Nobleman",
    startingPurse: 40,
    attack: 0,
    defense: 0,
    ability: {
      name: "Hubris",
      description:
        "This hero can enter any shop and equip any item, regardless of type.",
    },
    quantity: 1,
  },
  ranger: {
    class: ["rogue", "fighter"],
    name: "Ranger",
    startingPurse: 20,
    attack: 3,
    defense: 3,
    ability: {
      name: "Trophy Hunter",
      description:
        "At the end of the Adventure Step, if this hero successfully wounded the monster, place 10 tokens on this hero.",
    },
    quantity: 1,
  },
  youngHero: {
    class: ["cleric", "fighter", "mage", "rogue"],
    name: "Young Hero",
    startingPurse: 15,
    attack: 1,
    defense: 1,
    ability: {
      name: "Great Potential",
      description:
        "All attack and defense bonuses this hero gains from item cards are doubled.",
    },
    quantity: 1,
  },
  witchHunter: {
    class: ["rogue", "cleric"],
    name: "Witch Hunter",
    startingPurse: 25,
    attack: 3,
    defense: 2,
    ability: {
      name: "Inquisition",
      description:
        "When this hero enters your shop, you must discard all magic cards with at least 1 💛 from your hand and display.",
    },
    quantity: 1,
  },
  rogue: {
    class: ["rogue"],
    name: "Rogue",
    startingPurse: 25,
    attack: 2,
    defense: 2,
    ability: {
      name: "Pickpocket",
      description:
        "When this hero enters your shop, you may steal 5 tokens from another player and place it on this hero.",
    },
    quantity: 2,
  },
  mage: {
    class: ["mage"],
    name: "Mage",
    startingPurse: 20,
    attack: 3,
    defense: 2,
    ability: {
      name: "Barter",
      description:
        "When this hero enters your shop, draw 1 card from the item deck. Then, discard 1 card from your hand.",
    },
    quantity: 2,
  },
  cleric: {
    class: ["cleric"],
    name: "Cleric",
    startingPurse: 15,
    attack: 2,
    defense: 3,
    ability: {
      name: "Charity",
      description:
        "You may reduce the price of 1 item by up to 10 tokens while selling to this hero.",
    },
    quantity: 2,
  },
};
