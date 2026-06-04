const monsterList = document.getElementById("monster-list");

async function getMonsters() {
  try {
    const response = await fetch("/api/monsters");

    if (!response.ok) {
      throw new Error("Failed to fetch monsters");
    }

    const monsters = await response.json();
    displayMonsters(monsters);
  } catch (error) {
    monsterList.innerHTML = "<p>Something went wrong loading the monsters.</p>";
    console.error(error);
  }
}

function displayMonsters(monsters) {
  monsterList.innerHTML = "";

  monsters.forEach((monster) => {
    const article = document.createElement("article");
    article.classList.add("monster-card");

    article.innerHTML = `
      <h2>${monster.name}</h2>
      <p><strong>Type:</strong> ${monster.type}</p>
      <p>${monster.description}</p>
      <a href="/monsters/${monster.id}" role="button">View Details</a>
    `;

    monsterList.appendChild(article);
  });
}

getMonsters();