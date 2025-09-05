// Lista de jogadores e pontos
const players = [
  { name: "FrostSnow", points: 120 },
  { name: "IceFox", points: 95 },
  { name: "Asky", points: 150 },
  { name: "Sprout", points: 80 },
  { name: "Ygor BB", points: 110 }
];

// Função para renderizar a tabela
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

<h2>📊 Tabelas de Méritos</h2>
<div class="merito-container">
  <img src="merito1.png" alt="Tabela de Mérito 1">
  <img src="merito2.png" alt="Tabela de Mérito 2">
  <img src="merito3.png" alt="Tabela de Mérito 3">
</div>
