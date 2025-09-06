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

// render tabela
function renderScoreboard() {
  const tbody = document.querySelector("#scoreboard tbody");
  tbody.innerHTML = "";

  const rankingPlayers = [...players].sort((a,b) => (b.merits*6+b.fractions) - (a.merits*6+a.fractions));
  rankingPlayers.forEach((p,i)=>p.rank=i+1);

  const totalScore = player.merits*6 + player.fractions;

let medal = '';
if(totalScore === rankingPlayers[0].merits*6 + rankingPlayers[0].fractions) medal = "🥇";
else if(totalScore === rankingPlayers[1]?.merits*6 + rankingPlayers[1]?.fractions) medal = "🥈";
else if(totalScore === rankingPlayers[2]?.merits*6 + rankingPlayers[2]?.fractions) medal = "🥉";
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${player.rank}º</td>
      <td class="${player.rank===1?'gold':player.rank===2?'silver':player.rank===3?'bronze':''}">
        ${player.name} ${medal}
      </td>
      <td>${player.merits}</td>
      <td>${player.fractions}</td>
    `;
    tbody.appendChild(row);

    // animação suave em cascata
    setTimeout(()=>row.classList.add('visible'), index*50);
  });

  document.getElementById("orderBtn").textContent = orderMode==='ranking'?'🔀 Ordenar A-Z':'🔀 Ordenar por Ranking';
}

// alternar ordenação
document.getElementById("orderBtn").addEventListener('click',()=>{
  orderMode = orderMode==='ranking'?'alphabetical':'ranking';
  renderScoreboard();
});

// seleciona botão
const themeBtn = document.getElementById("themeBtn");

// inicializa texto correto do botão
themeBtn.textContent = document.body.classList.contains('dark') ? "☀️ Modo Claro" : "🌙 Modo Escuro";

// evento de clique
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark"); // alterna classe dark
  // atualiza texto do botão
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Modo Claro"; // se estiver escuro, mostra opção de claro
  } else {
    themeBtn.textContent = "🌙 Modo Escuro"; // se estiver claro, mostra opção de escuro
  }
});
