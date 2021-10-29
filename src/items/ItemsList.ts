// 1 x Ancient Relic
// 1 x Ascetic Beads
// 3 x Backpack
// 1 x Bag of Holding
// 3 x Battle Axe
// 1 x Berserker Axe
// 1 x Blasting Rod
// 2 x Buckler
// 1 x Cat Familiar
// 2 x Chain Vestment
// 1 x "Cool" Goggles
// 2 x Crossbow
// 2 x Cursed Elixir
// 3 x Cutlass
// 2 x Demon Charm
// 1 x Fake Potion
// 1 x Fancy Hat
// 3 x Fine Cloak
// 3 x Fire Scroll
// 1 x Flintlock Pistol
// 2 x Full Plate
// 2 x Guan Dao
// 2 x Healing Potion
// 3 x Heavy Boots
// 3 x Heavy Mace
// 3 x Heavy Shield
// 1 x Holy Sword
// 3 x Holy Symbol
// 1 x Holy Water
// 2 x Ice Scroll
// 1 x Invisibility Cloak
// 3 x Iron Knife
// 1 x Katana
// 3 x Leather Coat
// 1 x Longbow
// 1 x "Magic" Helmet
// 1 x Magic Lamp
// 2 x Magic Ring
// 2 x Magic Wand
// 2 x Might Elixir
// 2 x Nunchucks
// 2 x Rapier
// 2 x Sacred Elixir
// 3 x Scale Mail
// 2 x Shadow Elixir
// 3 x Shortbow
// 2 x Spiked Gauntlets
// 3 x Staff
// 3 x Steel Sword
// 1 x Tome of Battle
// 1 x Tome of Peace
// 4 x Torch
// 3 x Warhammer
// 3 x Wineskin
// 2 x Wizard Hat
// 2 x Wizard Robes

import { HeroClass } from "../heros/herosLists";

const ItemKeys = <const>[
  "ancientRelic",
  "asceticBeads",
  "backpack",
  "bagOfHolding",
  "battleAxe",
  "berserkerAxe",
  "blastingRod",
  "buckler",
  "catFamiliar",
  "chainVestment",
  "coolGoggles",
  "crossbow",
  "cursedElixir",
  "cutlass",
  "demonCharm",
  "fakePotion",
  "fancyHat",
  "fineCloak",
  "fireScroll",
  "flintlockPistol",
  "fullPlate",
  "guanDao",
  "healingPotion",
  "heavyBoots",
  "heavyMace",
  "heavyShield",
  "holySword",
  "holySymbol",
  "holyWater",
  "iceScroll",
  "invisibilityCloak",
  "ironKnife",
  "katana",
  "leatherCoat",
  "longbow",
  "magicHelmet",
  "magicLamp",
  "magicRing",
  "magicWand",
  "mightyElixir",
  "nunchucks",
  "rapier",
  "sacredElixir",
  "scaleMail",
  "shadowElixir",
  "shortBow",
  "spikedGauntlets",
  "staff",
  "steelSword",
  "tomeOfBattle",
  "tomeOfPeace",
  "torch",
  "warhammer",
  "wineskin",
  "wizardHat",
  "wizardRobes",
];

type Item = {
  name: string;
  class: HeroClass[];
  price: number;
  appeal: number;
  attack?: number;
  defense?: number;
  ability?: string;
  quantity: number;
};

type ItemList = Record<typeof ItemKeys[number], Item>;

export const items: ItemList = {
  backpack: {
    name: "Backpack",
    class: ["cleric", "fighter", "mage", "rogue"],
    price: 5,
    appeal: 0,
    ability:
      "During the Supply Step, if you choose to draft this card, you may reveal it to draw 1 card from the item deck and add that card to your shop.",
    quantity: 3,
  },
  bagOfHolding: {
    name: "Bag of Holding",
    class: ["cleric", "fighter", "mage", "rogue"],
    price: 10,
    appeal: 1,
    ability:
      "During the Supply Step, if you choose to draft this card, you may reveal it to draw 2 card from the item deck and add that card to your shop.",
    quantity: 1,
  },
  iceScroll: {
    name: "Ice Scroll",
    class: ["mage"],
    price: 5,
    appeal: 2,
    defense: 2,
    quantity: 2,
  },
  demonCharm: {
    name: "Demon Charm",
    class: ["mage"],
    price: 20,
    appeal: 2,
    attack: 2,
    defense: 1,
    quantity: 2,
  },
  magicRing: {
    name: "Magic Ring",
    class: ["mage", "rogue"],
    price: 10,
    appeal: 3,
    attack: 1,
    defense: 2,
    quantity: 2,
  },
  heavyMace: {
    name: "Heavy Mace",
    class: ["cleric"],
    price: 10,
    appeal: 1,
    attack: 2,
    quantity: 3,
  },
  scaleMail: {
    name: "Scale Mail",
    class: ["fighter"],
    price: 15,
    appeal: 1,
    defense: 2,
    quantity: 3,
  },
  ironKnife: {
    name: "Iron Knife",
    class: ["rogue"],
    price: 5,
    appeal: 1,
    attack: 1,
    quantity: 3,
  },
  guanDao: {
    name: "Guan Dao",
    class: ["fighter"],
    price: 15,
    appeal: 2,
    attack: 5,
    defense: 1,
    quantity: 2,
  },
  torch: {
    name: "Torch",
    class: ["cleric", "fighter", "mage", "rogue"],
    price: 5,
    appeal: 0,
    attack: 1,
    quantity: 4,
  },
  leatherCoat: {
    name: "Leather Coat",
    class: ["rogue"],
    price: 5,
    appeal: 2,
    defense: 2,
    quantity: 3,
  },
  shortBow: {
    name: "Short bow",
    class: ["rogue", "fighter"],
    price: 15,
    appeal: 2,
    attack: 1,
    defense: 1,
    quantity: 3,
  },
  mightyElixir: {
    name: "Mighty Elixir",
    class: ["cleric", "fighter", "mage", "rogue"],
    price: 10,
    appeal: 1,
    attack: 1,
    ability: "If this hero has a fighter icon, it gains +1 attack.",
    quantity: 2,
  },
  tomeOfPeace: {
    name: "Tome of Peace",
    class: ["mage", "cleric"],
    price: 15,
    appeal: 2,
    defense: 3,
    quantity: 1,
  },
  holyWater: {
    name: "Holy Water",
    class: ["cleric"],
    price: 25,
    appeal: 3,
    attack: 4,
    quantity: 1,
  },
  wineskin: {
    name: "Wine Skin",
    class: ["cleric", "fighter", "mage", "rogue"],
    price: 10,
    appeal: 0,
    defense: -1,
    quantity: 3,
  },
  spikedGauntlets: {
    name: "Spiked Gauntlets",
    class: ["fighter"],
    price: 10,
    appeal: 3,
    attack: 1,
    defense: 2,
    quantity: 2,
  },
  fireScroll: {
    name: "Fire Scroll",
    class: ["mage"],
    price: 5,
    appeal: 2,
    attack: 2,
    quantity: 3,
  },
  staff: {
    name: "Staff",
    class: ["mage", "cleric"],
    price: 5,
    appeal: 1,
    attack: 1,
    defense: 1,
    quantity: 3,
  },
  heavyBoots: {
    name: "Heavy Boots",
    class: ["cleric", "fighter", "mage", "rogue"],
    price: 5,
    appeal: 0,
    defense: 1,
    quantity: 3,
  },
  holySymbol: {
    name: "Holy Symbol",
    class: ["cleric"],
    price: 15,
    appeal: 3,
    attack: 1,
    defense: 2,
    quantity: 3,
  },
  warhammer: {
    name: "Warhammer",
    class: ["cleric"],
    price: 15,
    appeal: 2,
    attack: 2,
    defense: 1,
    quantity: 3,
  },
  battleAxe: {
    name: "Battle Axe",
    class: ["fighter"],
    price: 5,
    appeal: 1,
    attack: 2,
    quantity: 3,
  },
  magicWand: {
    name: "Magic Wand",
    class: ["mage"],
    price: 10,
    appeal: 1,
    attack: 1,
    defense: 1,
    quantity: 2,
  },
  nunchucks: {
    name: "Nunchucks",
    class: ["cleric"],
    price: 5,
    appeal: 1,
    attack: 1,
    quantity: 2,
  },
  buckler: {
    name: "Buckler",
    class: ["rogue", "fighter"],
    price: 5,
    appeal: 1,
    defense: 1,
    quantity: 2,
  },
  fullPlate: {
    name: "Full Plate",
    class: ["fighter", "cleric"],
    price: 20,
    appeal: 3,
    defense: 3,
    quantity: 2,
  },
  tomeOfBattle: {
    name: "Tome of Battle",
    class: ["mage", "cleric"],
    price: 15,
    appeal: 2,
    attack: 3,
    quantity: 1,
  },
  flintlockPistol: {
    name: "Flintlock Pistol",
    class: ["rogue"],
    price: 20,
    appeal: 4,
    attack: 4,
    quantity: 1,
  },
  heavyShield: {
    name: "Heavy Shield",
    class: ["fighter", "cleric"],
    price: 10,
    appeal: 1,
    defense: 2,
    quantity: 3,
  },
  fineCloak: {
    name: "Fine Cloak",
    class: ["mage", "rogue"],
    price: 10,
    appeal: 1,
    defense: 1,
    quantity: 3,
  },
  rapier: {
    name: "Rapier",
    class: ["rogue"],
    price: 20,
    appeal: 2,
    attack: 2,
    defense: 2,
    quantity: 2,
  },
  wizardHat: {
    name: "Wizard Hat",
    class: ["mage"],
    price: 5,
    appeal: 1,
    defense: 1,
    quantity: 2,
  },
  wizardRobes: {
    name: "Wizard Robes",
    class: ["mage"],
    price: 10,
    appeal: 2,
    defense: 2,
    quantity: 2,
  },
  cursedElixir: {
    name: "Cursed Elixir",
    class: ["mage", "rogue", "fighter", "cleric"],
    price: 5,
    appeal: 1,
    attack: 2,
    ability: "If this hero does not have a mage icon, it gains -1 defense.",
    quantity: 2,
  },
  sacredElixir: {
    name: "Sacred Elixir",
    class: ["mage", "rogue", "fighter", "cleric"],
    price: 10,
    appeal: 1,
    defense: 1,
    ability: "If this hero has a cleric icon, it gains +1 defense",
    quantity: 2,
  },
  fakePotion: {
    name: "Fake Potion",
    class: ["mage", "rogue", "fighter", "cleric"],
    price: 10,
    appeal: 0,
    ability: "If this hero is defeated, you lose 1 ⭐.",
    quantity: 1,
  },
  steelSword: {
    name: "Steel Sword",
    class: ["fighter"],
    price: 10,
    appeal: 2,
    attack: 1,
    defense: 1,
    quantity: 2,
  },
  chainVestment: {
    name: "Chain Vestment",
    class: ["cleric"],
    price: 10,
    appeal: 2,
    defense: 2,
    quantity: 2,
  },
  shadowElixir: {
    name: "Shadow Elixir",
    class: ["mage", "rogue", "fighter", "cleric"],
    price: 5,
    appeal: 1,
    defense: 1,
    ability: "If this hero has a rogue icon, it gains +1 attack.",
    quantity: 2,
  },
  crossbow: {
    name: "Crossbow",
    class: ["rogue"],
    price: 20,
    appeal: 3,
    attack: 3,
    quantity: 2,
  },
  cutlass: {
    name: "Cutlass",
    class: ["rogue"],
    price: 10,
    appeal: 1,
    attack: 1,
    defense: 1,
    quantity: 3,
  },
  healingPotion: {
    name: "Healing Potion",
    class: ["mage", "rogue", "fighter", "cleric"],
    price: 10,
    appeal: 0,
    ability:
      "If this hero is defeated, shuffle it into the hero deck instead of discarding it.",
    quantity: 2,
  },
  coolGoggles: {
    name: "'Cool' Goggles",
    class: ["mage", "rogue"],
    price: 20,
    appeal: 2,
    defense: 0,
    quantity: 1,
  },
  blastingRod: {
    name: "Blasting Rod",
    class: ["mage"],
    price: 15,
    appeal: 3,
    attack: 3,
    quantity: 1,
  },
  longbow: {
    name: "Longbow",
    class: ["rogue", "fighter"],
    price: 20,
    appeal: 3,
    attack: 2,
    defense: 2,
    quantity: 1,
  },
  ancientRelic: {
    name: "Ancient Relic",
    class: ["mage", "cleric"],
    price: 20,
    appeal: 3,
    attack: 2,
    defense: 2,
    quantity: 1,
  },
  magicHelmet: {
    name: "'Magic' Helmet",
    class: ["fighter", "cleric"],
    price: 20,
    appeal: 2,
    defense: 0,
    quantity: 1,
  },
  invisibilityCloak: {
    name: "Invisibility Cloak",
    class: ["rogue"],
    price: 15,
    appeal: 0,
    defense: 5,
    ability: "This item cannot be placed on display",
    quantity: 1,
  },
  fancyHat: {
    name: "Fancy Hat",
    class: ["mage", "rogue", "fighter", "cleric"],
    price: 15,
    appeal: 1,
    ability:
      "At the end of the Adventure Step, if this hero survived, gain 1 ⭐.",
    quantity: 1,
  },
  holySword: {
    name: "Holy Sword",
    class: ["fighter", "cleric"],
    price: 25,
    appeal: 4,
    attack: 3,
    defense: 3,
    quantity: 1,
  },
  berserkerAxe: {
    name: "Berserker Axe",
    class: ["fighter"],
    price: 15,
    appeal: 4,
    attack: 4,
    defense: -1,
    quantity: 1,
  },
  katana: {
    name: "Katana",
    class: ["fighter"],
    price: 20,
    appeal: 3,
    attack: 3,
    defense: 1,
    ability: "While this item is on display, increase its price by 10 tokens.",
    quantity: 1,
  },
  asceticBeads: {
    name: "Ascetic Beads",
    class: ["cleric"],
    price: 10,
    appeal: 4,
    attack: 1,
    defense: 1,
    ability:
      "If no other items are equipped, the hero gains +2 attack and +2 defence.",
    quantity: 1,
  },
  magicLamp: {
    name: "Magic Lamp",
    class: ["mage", "rogue"],
    price: 25,
    appeal: 4,
    attack: 3,
    defense: 3,
    quantity: 1,
  },
  catFamiliar: {
    name: "Cat Familiar",
    class: ["mage"],
    price: 15,
    appeal: 4,
    attack: 1,
    defense: 2,
    ability:
      "While equipped, this item is not discarded until the hero is discarded.",
    quantity: 1,
  },
};
