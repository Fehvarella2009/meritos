// Lista de jogadores do Real Value (com pontos)
const players = [
  { name: "FrostSnow", points: 119 },
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

// Função para renderizar o placar
function renderScoreboard() {
  const tbody = document.querySelector("#scoreboard tbody");
  tbody.innerHTML = "";

  let displayPlayers;

  if (alphabeticalView) {
    // Apenas exibe em ordem alfabética, mas mantém a posição original
    displayPlayers = [...players].sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Ordem normal por pontos (decrescente)
    displayPlayers = [...players].sort((a, b) => b.points - a.points);
  }

  displayPlayers.forEach(player => {
    // Mantém a posição original por pontos, mesmo na visualização alfabética
    const originalPosition = players
      .slice()
      .sort((a, b) => b.points - a.points)
      .findIndex(p => p.name === player.name) + 1;

    const row = document.createElement("tr");
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