// Lista de jogadores do Real Value (coloque os pontos reais depois)
const players = [
  { name: "FrostSnow", points: 18 },
  { name: "Ygor BB", points: 12 },
  { name: "Asky", points: 8 },
  { name: "Sprout", points: 21,5 },
  { name: "Icefox", points: 11 },
  // Adicione mais nomes aqui se necessário
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

// Atualiza o placar
renderScoreboard();
