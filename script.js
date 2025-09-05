// Lista de jogadores do Real Value
const players = [
  { name: "AnnaVedder", points: 7 },
  { name: "Arctibax", points: 8 },
  { name: "Arthur Gamer", points: 8 },
  { name: "Arthur", points: 2 },
  { name: "Askyzz", points: 13.3 },
  { name: "Bernardo 11", points: 3 },
  { name: "Boltzin", points: 0 },
  { name: "Borges", points: 7 },
  { name: "CoragemTheDog", points: 5 },
  { name: "Dark Jeff", points: 3 },
  { name: "Deus Shelby", points: 13.3 },
  { name: "Dex", points: 2 },
  { name: "Digopom", points: 0 },
  { name: "Dragon", points: 5 },
  { name: "Eberton", points: 5 },
  { name: "Easy", points: 11.3 },
  { name: "Fast", points: 20 },
  { name: "FgzSbau", points: 1 },
  { name: "Firefox", points: 4.3 },
  { name: "Frederico", points: 2.3 },
  { name: "FrostSnow", points: 13.3 },
  { name: "GeNiUs", points: 22 },
  { name: "Gilmarcio", points: 11.3 },
  { name: "Huya", points: 3 },
  { name: "Icefox", points: 10 },
  { name: "Infinity", points: 13.3 },
  { name: "Jabu", points: 2.3 },
  { name: "Jonny", points: 4.3 },
  { name: "Juniòór", points: 8 },
  { name: "Ka.y", points: 1 },
  { name: "K4lav3ra", points: 8 },
  { name: "Kevin☆", points: 3 },
  { name: "Leonardo", points: 11.3 },
  { name: "Levi", points: 8 },
  { name: "Letty lettuce", points: 1 },
  { name: "Lilyuzumi", points: 11.3 },
  { name: "Lipexz", points: 2 },
  { name: "LéoMatsury", points: 2.3 },
  { name: "Luxuria", points: 2.3 },
  { name: "MacroX", points: 5 },
  { name: "Mika (julya)", points: 2 },
  { name: "Mika (let)", points: 2.3 },
  { name: "MikeBoom", points: 0 },
  { name: "OMaven", points: 8 },
  { name: "Pedro Legend", points: 10 },
  { name: "Pedro", points: 2.3 },
  { name: "Rwanda!!", points: 0 },
  { name: "Ryco", points: 5 },
  { name: "Sarvitar", points: 3 },
  { name: "Sníp3r", points: 0 },
  { name: "Spomie", points: 0 },
  { name: "Sprout", points: 2.3 },
  { name: "Sr. White :) ", points: 0 },
  { name: "Thxr<3", points: 2.3 },
  { name: "Tiago70", points: 2.3 },
  { name: "Volpirs", points: 8 },
  { name: "Wolf", points: 0 }
];

// Guardar posições e pontos anteriores
let previousPositions = {};
let previousPoints = {};

// Função para renderizar o placar
function renderScoreboard() {
  // Ordena do maior para o menor
  players.sort((a, b) => b.points - a.points);

  const tbody = document.querySelector("#scoreboard tbody");
  tbody.innerHTML = ""; // limpa antes de renderizar

  players.forEach((player, index) => {
    const pos = index + 1;
    const row = document.createElement("tr");

    // Checa se já existia registro anterior
    if (previousPositions[player.name]) {
      if (previousPoints[player.name] !== player.points) {
        // Subiu posição
        if (previousPositions[player.name] > pos) {
          row.classList.add("rise");
        }
        // Caiu posição
        else if (previousPositions[player.name] < pos) {
          row.classList.add("fall");
        }
      }
    }

    row.innerHTML = `
      <td>${pos}º</td>
      <td>${player.name}</td>
      <td>${player.points}</td>
    `;
    tbody.appendChild(row);

    // Atualiza posição e pontos armazenados
    previousPositions[player.name] = pos;
    previousPoints[player.name] = player.points;
  });
}

// Atualiza o placar ao carregar a página
renderScoreboard();
