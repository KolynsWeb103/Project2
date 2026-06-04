const express = require("express");
const path = require("path");
const monsters = require("./data/monsters");

const app = express();
const PORT = 3000;

function createSlug(name) {
  return name
    .toLowerCase()
    .replaceAll(".", "")
    .replaceAll("'", "")
    .replaceAll(" ", "-");
}

const monstersWithIds = monsters.map((monster) => {
  return {
    id: createSlug(monster.name),
    ...monster
  };
});

app.use(express.static(path.join(__dirname, "../client")));

app.use(
  "/pico",
  express.static(path.join(__dirname, "node_modules/@picocss/pico/css"))
);

app.get("/api/monsters", (req, res) => {
  res.json(monstersWithIds);
});

app.get("/api/monsters/:id", (req, res) => {
  const monster = monstersWithIds.find((monster) => monster.id === req.params.id);

  if (!monster) {
    return res.status(404).json({ message: "Monster not found" });
  }

  res.json(monster);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/monsters/:id", (req, res) => {
  const monster = monstersWithIds.find((monster) => monster.id === req.params.id);

  if (!monster) {
    return res.status(404).sendFile(path.join(__dirname, "../client/public/404.html"));
  }

  res.sendFile(path.join(__dirname, "../client/detail.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../client/public/404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});