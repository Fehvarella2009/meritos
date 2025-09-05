// Lista de jogadores do Real Value (com pontos)
const players = [
  { name: "FrostSnow", points: 19.3 },
  { name: "Joses", points: 2 },
  { name: "Sprout", points: 17 },
  { name: "Asky", points: 12 },
  { name: "Icefox", points: 3 },
  { name: "Mika", points: 4 },
  { name: "Sarvitar", points: 8 },
  { name: "Autobot", points: 9 },
  { name: "Ygor BB", points: 15 },
  { name: "Coragemthedog", points: 4 },
  { name: "Tiago70", points: 5 },
  { name: "LettyLetuce", points: 11 }
];

let alphabeticalView = false; // true = apenas exibir alfabeticamente

function renderScoreboard() {
  const tbody = document.querySelector("#scoreboard tbody");
  tbody.innerHTML = "";

  let displayPlayers;

  if (alphabeticalView) {
    displayPlayers = [...players].sort((a, b) => a.name.localeCompare(b.name));
  } else {
    displayPlayers = [...players].sort((a, b) => b.points - a.points);
  }

  displayPlayers.forEach((player, index) => {
    const originalPosition = players
      .slice()
      .sort((a, b) => b.points - a.points)
      .findIndex(p => p.name === player.name) + 1;

    const row = document.createElement("tr");

    if (!alphabeticalView) {
      // Cores top 3
      if (originalPosition === 1) row.style.background = "gold";
      else if (originalPosition === 2) row.style.background = "silver";
      else if (originalPosition === 3) row.style.background = "#cd7f32";
      else if (index % 2 !== 0) row.style.background = "#2a2a3f";
      else row.style.background = "#2c2c3a";
    } else {
      // Ordem alfabética padrão sem cores especiais
      row.style.background = index % 2 !== 0 ? "#2a2a3f" : "#2c2c3a";
    }

    row.innerHTML = `
      <td>${originalPosition}º</td>
      <td>${player.name}</td>
      <td>${player.points}</td>
    `;
    tbody.appendChild(row);
  });
}

// Botão para alternar visualização
document.getElementById("toggleOrder").addEventListener("click", () => {
  alphabeticalView = !alphabeticalView;
  document.getElementById("toggleOrder").textContent = alphabeticalView
    ? "Voltar à ordem por pontos"
    : "Ordenar alfabeticamente";
  renderScoreboard();
});

// Renderiza ao carregar a página
renderScoreboard();
