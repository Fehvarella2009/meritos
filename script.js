// Lista de jogadores com méritos + frações
const players = [
  { name: "AnnaVedder", merits: 7, fractions: 0 },
  { name: "Arctibax", merits: 8, fractions: 0 },
  { name: "Arthur Gamer", merits: 8, fractions: 0 },
  { name: "Arthur", merits: 2, fractions: 0 },
  { name: "Askyzz", merits: 13, fractions: 2 },
  { name: "Bernardo 11", merits: 3, fractions: 0 },
  { name: "Boltzin", merits: 0, fractions: 0 },
  { name: "Borges", merits: 7, fractions: 0 },
  { name: "CoragemTheDog", merits: 5, fractions: 0 },
  { name: "Dark Jeff", merits: 3, fractions: 0 },
  { name: "Deus Shelby", merits: 13, fractions: 2 },
  { name: "Dex", merits: 2, fractions: 0 },
  { name: "Digopom", merits: 2, fractions: 0 },
  { name: "Dragon", merits: 5, fractions: 0 },
  { name: "Eberton", merits: 5, fractions: 0 },
  { name: "Easy", merits: 11, fractions: 2 },
  { name: "Fast", merits: 20, fractions: 0 },
  { name: "FgzSbau", merits: 1, fractions: 0 },
  { name: "Firefox", merits: 4, fractions: 2 },
  { name: "Frederico", merits: 2, fractions: 3 },
  { name: "FrostSnow", merits: 13, fractions: 2 },
  { name: "GeNiUs", merits: 22, fractions: 0 },
  { name: "Gilmarcio", merits: 11, fractions: 2 },
  { name: "Huya", merits: 3, fractions: 0 },
  { name: "Icefox", merits: 10, fractions: 0 },
  { name: "Infinity", merits: 13, fractions: 2 },
  { name: "Jabu", merits: 2, fractions: 3 },
  { name: "Jonny", merits: 4, fractions: 2 },
  { name: "Juniòór", merits: 8, fractions: 0 },
  { name: "Ka.y", merits: 1, fractions: 0 },
  { name: "K4lav3ra", merits: 8, fractions: 0 },
  { name: "Kevin☆", merits: 3, fractions: 0 },
  { name: "Leonardo", merits: 11, fractions: 2 },
  { name: "Levi", merits: 8, fractions: 0 },
  { name: "Letty lettuce", merits: 1, fractions: 0 },
  { name: "Lilyuzumi", merits: 11, fractions: 2 },
  { name: "Lipexz", merits: 2, fractions: 0 },
  { name: "LéoMatsury", merits: 2, fractions: 3 },
  { name: "Luxuria", merits: 2, fractions: 3 },
  { name: "MacroX", merits: 5, fractions: 0 },
  { name: "Mika (julya)", merits: 2, fractions: 0 },
  { name: "Mika (let)", merits: 2, fractions: 3 },
  { name: "MikeBoom", merits: 2, fractions: 0 },
  { name: "OMaven", merits: 8, fractions: 0 },
  { name: "Pedro Legend", merits: 10, fractions: 0 },
  { name: "Pedro", merits: 2, fractions: 3 },
  { name: "Rwanda!!", merits: 0, fractions: 0 },
  { name: "Ryco", merits: 5, fractions: 0 },
  { name: "Sarvitar", merits: 3, fractions: 0 },
  { name: "Sníp3r", merits: 0, fractions: 0 },
  { name: "Spomie", merits: 0, fractions: 0 },
  { name: "Sprout", merits: 2, fractions: 3 },
  { name: "Sr. White :)", merits: 0, fractions: 0 },
  { name: "Thxr<3", merits: 2, fractions: 3 },
  { name: "Tiago70", merits: 2, fractions: 3 },
  { name: "Volpirs", merits: 8, fractions: 0 },
  { name: "Wolf", merits: 0, fractions: 0 }
];

let orderMode = "ranking"; // "ranking" ou "alphabetical"

// Função para renderizar a tabela
function renderScoreboard() {
  const tbody = document.querySelector("#scoreboard tbody");

  // marcar linhas atuais para fade-out
  const existingRows = Array.from(tbody.children);
  existingRows.forEach(row => row.classList.add('fade-out'));

  // delay para permitir animação fade-out
  setTimeout(() => {
    tbody.innerHTML = ""; // limpa o corpo da tabela

    // calcular ranking fixo
    const rankingPlayers = [...players].sort((a, b) => (b.merits*6 + b.fractions) - (a.merits*6 + a.fractions));
    rankingPlayers.forEach((player, index) => player.rank = index + 1);

    let sortedPlayers;
    if (orderMode === "ranking") {
      sortedPlayers = [...rankingPlayers];
    } else {
      sortedPlayers = [...players].sort((a, b) => a.name.localeCompare(b.name));
    }

    // criar linhas com fade-in e cascata
    sortedPlayers.forEach((player, index) => {
      let medal = "";
      if (player.rank === 1) medal = "🥇";
      else if (player.rank === 2) medal = "🥈";
      else if (player.rank === 3) medal = "🥉";

      const row = document.createElement("tr");
      row.classList.add('fade-in');
      row.style.transitionDelay = `${index * 50}ms`; // efeito cascata
      row.innerHTML = `
        <td>${player.rank}º</td>
        <td>${player.name} ${medal}</td>
        <td>${player.merits}</td>
        <td>${player.fractions}</td>
      `;
      tbody.appendChild(row);
    });

    // atualizar texto do botão
    document.getElementById("orderBtn").innerText = 
      orderMode === "ranking" ? "🔀 Ordenar A-Z" : "🔀 Ordenar por Ranking";

  }, 200); // tempo de fade-out
}

// alterna entre ranking e ordem alfabética
function toggleOrder() {
  orderMode = orderMode === "ranking" ? "alphabetical" : "ranking";
  renderScoreboard();
}

// alterna tema claro/escuro
function toggleTheme() {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeBtn");
  btn.innerText = document.body.classList.contains("dark") 
    ? "☀️ Modo Claro" 
    : "🌙 Modo Escuro";
}

// render inicial
renderScoreboard();
