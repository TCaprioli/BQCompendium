// 1 x Alchemist
// 1 x Armor Smith
// 2 x Burglar
// 2 x City Guard
// 2 x Hawker
// 2 x Hired Thug
// 2 x Marketeer
// 3 x Sales clerk
// 1 x Scribe
// 1 x Smuggler
// 2 x Swindler
// 1 x Weapon Smith

const EmployeeKeys = <const>[
  "alchemist",
  "armorSmith",
  "burglar",
  "cityGuard",
  "hawker",
  "hiredThug",
  "marketeer",
  "salesClerk",
  "scribe",
  "smuggler",
  "swindler",
  "weaponSmith",
];

type GameStage =
  | "supply"
  | "display"
  | "shopping"
  | "adventure"
  | "storage"
  | "special";

type Employee = {
  name: string;
  cost: number;
  abilityTiming: GameStage;
  ability: string;
  quantity: number;
};

type EmployeeList = Record<typeof EmployeeKeys[number], Employee>;

export const employees: EmployeeList = {
  smuggler: {
    name: "Smuggler",
    cost: 5,
    abilityTiming: "supply",
    ability:
      "At the end of the Supply Step, draw 3 cards from the item deck and discard 2 item cards from your hand. Then, discard this card.",
    quantity: 1,
  },
  weaponSmith: {
    name: "Weaponsmith",
    cost: 10,
    abilityTiming: "adventure",
    ability:
      "If your hero has a fighter or rogue icon, it gains +1 attack and +1 defense.",
    quantity: 1,
  },
  armorSmith: {
    name: "Armorsmith",
    cost: 10,
    abilityTiming: "adventure",
    ability:
      "If your hero has a cleric or fighter icon, it gains +1 attack and +1 defense.",
    quantity: 1,
  },
  alchemist: {
    name: "Alchemist",
    cost: 10,
    abilityTiming: "adventure",
    ability:
      "If your hero has a mage or rogue icon, it gains +1 attack and +1 defense.",
    quantity: 1,
  },
  scribe: {
    name: "Scribe",
    cost: 10,
    abilityTiming: "adventure",
    ability:
      "If your hero has a mage or cleric icon, it gains +1 attack and +1 defense.",
    quantity: 1,
  },
  hawker: {
    name: "Hawker",
    cost: 10,
    abilityTiming: "shopping",
    ability:
      "You may sell 1 item in your display to a hero in your shop. Then, discard this card.",
    quantity: 2,
  },
  marketeer: {
    name: "Marketeer",
    cost: 0,
    abilityTiming: "display",
    ability:
      "After displays are revealed, you may add 1 item from your hand to your display. Then, discard this card.",
    quantity: 2,
  },
  burglar: {
    name: "Burglar",
    cost: 5,
    abilityTiming: "storage",
    ability:
      "At the start of the Storage Step, look at the item cards in another player's shop and steal 1 of those cards. Then, discard this card.",
    quantity: 2,
  },
  hiredThug: {
    name: "Hired Thug",
    cost: 0,
    abilityTiming: "storage",
    ability:
      "At the start of the Storage Step, discard 1 hero card of your choice and replace it as though it were defeated. Then, discard this card.",
    quantity: 2,
  },
  swindler: {
    name: "Swindler",
    cost: 5,
    abilityTiming: "shopping",
    ability:
      "Take up to 15 tokens from a hero in your shop. Then, discard this card.",
    quantity: 2,
  },
  cityGuard: {
    name: "City Guard",
    cost: 0,
    abilityTiming: "special",
    ability:
      "Prevent the ability of the current Monster card from affecting you. Then, discard this card.",
    quantity: 2,
  },
  salesClerk: {
    name: "Sales Clerk",
    cost: 5,
    abilityTiming: "shopping",
    ability:
      "While selling items to a hero in your shop, you may raise or lower the price of 1 item card by 5 tokens.",
    quantity: 3,
  },
};
