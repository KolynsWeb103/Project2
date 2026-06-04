const monsterDetail = document.getElementById("monster-detail");

async function getMonsterDetail() {
  try {
    const pathParts = window.location.pathname.split("/");
    const monsterId = pathParts[pathParts.length - 1];

    const response = await fetch(`/api/monsters/${monsterId}`);

    if (!response.ok) {
      window.location.href = "/404.html";
      return;
    }

    const monster = await response.json();
    displayMonsterDetail(monster);
  } catch (error) {
    monsterDetail.innerHTML = "<p>Something went wrong loading this monster.</p>";
    console.error(error);
  }
}

function displayMonsterDetail(monster) {
  document.title = monster.name;

  monsterDetail.innerHTML = `
    <article class="detail-card">
      <img
        src="${monster.image}"
        alt="${monster.name}"
        class="detail-monster-image"
      >

      <h1>${monster.name}</h1>

      <p><strong>ID:</strong> ${monster.id}</p>
      <p><strong>Type:</strong> ${monster.type}</p>
      <p><strong>Description:</strong> ${monster.description}</p>

      <a href="/" role="button" class="secondary">Back to Bestiary</a>
    </article>
  `;
}

getMonsterDetail();