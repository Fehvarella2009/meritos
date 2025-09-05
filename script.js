// Lista de jogadores do Real Value (pontos zerados)
const players = [
  { name: "Fernando", points: 21 },
  { name: "Geovanna", points: 2 },
  { name: "Eduardo", points: 17 },
  { name: "Lívia", points: 12 },
  { name: "Manuela", points: 3 },
  { name: "Davi", points: 4 },
  { name: "Aparecida", points: 8 },
  { name: "Pietra", points: 9 },
  { name: "Natally", points: 15 },
  { name: "Xiao-Jun", points: 4 },
  { name: "Camila", points: 5 },
  { name: "Maju", points: 11 }
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