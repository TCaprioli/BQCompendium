import { employees } from "./employees/employeesList";
import { heros } from "./heros/herosLists";
import { items } from "./items/ItemsList";
import { monsters } from "./monsters/monstersList";
import express from "express";

const compendium = { monsters, items, heros, employees };

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => res.json(compendium));
app.get("/monsters", (req, res) => res.json(compendium.monsters));
app.get("/items", (req, res) => res.json(compendium.items));
app.get("/heros", (req, res) => res.json(compendium.heros));
app.get("/employees", (req, res) => res.json(compendium.employees));

app.listen(4000, () => {
  console.log("connected...");
});
