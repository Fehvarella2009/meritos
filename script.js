// Lista de jogadores do Real Value (pontos zerados)
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

// Função para renderizar o placar
function renderScoreboard() {
  // Ordena do maior para o menor
  players.sort((a, b) => b.points - a.points);

  const tbody = document.querySelector("#scoreboard tbody");
  tbody.innerHTML = ""; // limpa antes de renderizar

  players.forEach((player, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}º</td>
      <td>${player.name}</td>
      <td>${player.points}</td>
    `;
    tbody.appendChild(row);
  });
}

// Atualiza o placar ao carregar a página
renderScoreboard();