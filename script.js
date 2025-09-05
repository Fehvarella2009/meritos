<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Placar de Méritos</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #fff;
    color: #000;
    transition: background-color 0.3s, color 0.3s;
  }
  .dark-theme {
    background-color: #121212;
    color: #f0f0f0;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    padding: 8px 12px;
    border: 1px solid #ccc;
    text-align: left;
  }
  th {
    background-color: #eee;
  }
  button {
    margin-right: 10px;
    margin-top: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
</style>
</head>
<body>

<h1>Placar de Méritos</h1>
<button id="btnPoints">Ordenar por Pontos</button>
<button id="btnAlpha">Ordenar Alfabeticamente</button>
<button id="btnTheme">Mudar Tema</button>

<table id="scoreboard">
  <thead>
    <tr>
      <th>Posição</th>
      <th>Nome</th>
      <th>Pontos</th>
    </tr>
  </thead>
  <tbody>
    <!-- Linhas serão inseridas pelo JS -->
  </tbody>
</table>

<script>
// Lista de jogadores
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
  { name: "Sr. White :)", points: 0 },
  { name: "Thxr<3", points: 2.3 },
  { name: "Tiago70", points: 2.3 },
  { name: "Volpirs", points: 8 },
  { name: "Wolf", points: 0 }
];

// Renderiza o placar
function renderScoreboard(order = "points") {
  let sortedPlayers = [...players];

  if (order === "points") {
    sortedPlayers.sort((a, b) => b.points - a.points);
  } else {
    sortedPlayers.sort((a, b) => a.name.localeCompare(b.name));
  }

  const tbody = document.querySelector("#scoreboard tbody");
  tbody.innerHTML = "";

  // Descobre os 3 maiores valores de pontos
  const uniqueScores = [...new Set(sortedPlayers.map(p => p.points))].sort((a, b) => b - a);
  const topScores = uniqueScores.slice(0, 3);

  sortedPlayers.forEach((player, index) => {
    const row = document.createElement("tr");

    let medal = "";
    if (order === "points") {
      if (player.points === topScores[0]) medal = "🥇";
      else if (player.points === topScores[1]) medal = "🥈";
      else if (player.points === topScores[2]) medal = "🥉";
    }

    row.innerHTML = `
      <td>${order === "points" ? index + 1 + "º" : "-"}</td>
      <td>${medal} ${player.name}</td>
      <td>${player.points}</td>
    `;

    tbody.appendChild(row);
  });
}

// Inicializa em ordem de pontos
renderScoreboard("points");

// Funções dos botões
function sortByPoints() {
  renderScoreboard("points");
}

function sortAlphabetically() {
  renderScoreboard("name");
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Liga os botões
document.getElementById("btnPoints").addEventListener("click", sortByPoints);
document.getElementById("btnAlpha").addEventListener("click", sortAlphabetically);
document.getElementById("btnTheme").addEventListener("click", toggleTheme);
</script>

</body>
</html>
