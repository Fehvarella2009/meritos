// Lista de jogadores do Real Value (coloque os pontos reais depois)
const players = [
  { name: "Fernando", points: 10 },
  { name: "Geovanna", points: 8 },
  { name: "Eduardo", points: 6 },
  { name: "Lívia", points: 6 },
  { name: "Manuela", points: 9 },
  { name: "Davi", points: 3 },
  { name: "Aparecida", points: 2 },
  { name: "Pietra", points: 1 },
  { name: "Natally", points: 4 },
  { name: "Xiao-Jun", points: 5 },
  { name: "Camila", points: 22 },
  { name: "Maju", points:18 }
];
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
