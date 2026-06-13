const monsterList = document.getElementById("monster-list");
const monsterSearch = document.getElementById("monster-search");

let allMonsters = [];

async function getMonsters() {
  try {
    const response = await fetch("/api/monsters");

    if (!response.ok) {
      throw new Error("Failed to fetch monsters");
    }

    const monsters = await response.json();

    allMonsters = monsters;
    displayMonsters(allMonsters);
  } catch (error) {
    monsterList.innerHTML = "<p>Something went wrong loading the monsters.</p>";
    console.error(error);
  }
}

function formatWeakness(weakness) {
  if (!weakness || weakness.length === 0) {
    return "Unknown";
  }

  return weakness.join(", ");
}

function monsterMatchesSearch(monster, searchTerm) {
  const term = searchTerm.toLowerCase();

  const elementWeakness = monster.elementWeakness || monster.element_weakness || [];
  const statusWeakness = monster.statusWeakness || monster.status_weakness || [];
  const weaponWeakness = monster.weaponWeakness || monster.weapon_weakness || [];

  return (
    monster.name.toLowerCase().includes(term) ||
    monster.type.toLowerCase().includes(term) ||
    monster.description.toLowerCase().includes(term) ||
    elementWeakness.join(" ").toLowerCase().includes(term) ||
    statusWeakness.join(" ").toLowerCase().includes(term) ||
    weaponWeakness.join(" ").toLowerCase().includes(term)
  );
}

function displayMonsters(monsters) {
  monsterList.innerHTML = "";

  if (monsters.length === 0) {
    monsterList.innerHTML = "<p>No monsters found.</p>";
    return;
  }

  monsters.forEach((monster) => {
    const article = document.createElement("article");
    article.classList.add("monster-card");

    const elementWeakness = monster.elementWeakness || monster.element_weakness || [];
    const statusWeakness = monster.statusWeakness || monster.status_weakness || [];
    const weaponWeakness = monster.weaponWeakness || monster.weapon_weakness || [];

    article.innerHTML = `
      <img 
        src="${monster.image}" 
        alt="${monster.name}" 
        class="monster-image"
      >

      <h2>${monster.name}</h2>
      <p><strong>Type:</strong> ${monster.type}</p>
      <p><strong>Element Weakness:</strong> ${formatWeakness(elementWeakness)}</p>
      <p><strong>Status Weakness:</strong> ${formatWeakness(statusWeakness)}</p>
      <p><strong>Weapon Weakness:</strong> ${formatWeakness(weaponWeakness)}</p>
      <p>${monster.description}</p>
      <a href="/monsters/${monster.id}" role="button">View Details</a>
    `;

    monsterList.appendChild(article);
  });
}

monsterSearch.addEventListener("input", () => {
  const searchTerm = monsterSearch.value.trim();

  if (searchTerm === "") {
    displayMonsters(allMonsters);
    return;
  }

  const filteredMonsters = allMonsters.filter((monster) =>
    monsterMatchesSearch(monster, searchTerm)
  );

  displayMonsters(filteredMonsters);
});

getMonsters();