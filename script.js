// Lista de jogadores do Real Value
const players = [
  { name: "FrostSnow", points: 19.2 },
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

let alphabeticalView = false; // alternar ordem

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

    let medal = "";
    if (!alphabeticalView) {
      if (originalPosition === 1) medal = "🥇 ";
      else if (originalPosition === 2) medal = "🥈 ";
      else if (originalPosition === 3) medal = "🥉 ";
    }

    row.innerHTML = `
      <td>${originalPosition}º</td>
      <td>${medal}${player.name}</td>
      <td>${player.points}</td>
    `;
    tbody.appendChild(row);
  });
}

// Botão para alternar ordenação
document.getElementById("toggleOrder").addEventListener("click", () => {
  alphabeticalView = !alphabeticalView;
  document.getElementById("toggleOrder").textContent = alphabeticalView
    ? "Voltar à ordem por pontos"
    : "Ordenar alfabeticamente";
  renderScoreboard();
});

// Botão para alternar tema
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.getElementById("toggleTheme").textContent =
    document.body.classList.contains("light-mode")
      ? "🌑 Mudar tema"
      : "🌙 Mudar tema";
});

// Renderiza ao carregar
renderScoreboard();
