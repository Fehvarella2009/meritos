// Lista de jogadores com méritos + frações
const players = [
  { name: "AnnaVedder", merits: 7, fractions: 0 },
  { name: "Arctibax", merits: 9, fractions: 0 },
  { name: "Arthur Gamer", merits: 8, fractions: 0 },
  { name: "Arthur", merits: 3, fractions: 0 },
  { name: "Askyzz", merits: 14, fractions: 2 },
  { name: "Atlantic", merits: 12, fractions: 2 }, // inserido
  { name: "Bernardo 11", merits: 3, fractions: 0 },
  { name: "Boltzin", merits: 0, fractions: 0 },
  { name: "Borges", merits: 8, fractions: 0 },
  { name: "CoragemTheDog", merits: 5, fractions: 3 },
  { name: "Dark Jeff", merits: 4, fractions: 0 },
  { name: "Dayan", merits: 5, fractions: 3 },
  { name: "Deus Shelby", merits: 14, fractions: 2 },
  { name: "Dex", merits: 3, fractions: 0 },
  { name: "Digopom", merits: 3, fractions: 0 },
  { name: "Dragon", merits: 6, fractions: 0 },
  { name: "Eberton", merits: 5, fractions: 0 },
  { name: "Easy", merits: 13, fractions: 5 },
  { name: "Fast", merits: 20, fractions: 0 },
  { name: "FgzSbau", merits: 2, fractions: 0 },
  { name: "Firefox", merits: 4, fractions: 2 },
  { name: "Frederico", merits: 2, fractions: 3 },
  { name: "FrostSnow", merits: 15, fractions: 5 },
  { name: "GeNiUs", merits: 23, fractions: 0 },
  { name: "Gilmarcio", merits: 12, fractions: 2 },
  { name: "Huya", merits: 3, fractions: 0 },
  { name: "Icefox", merits: 10, fractions: 0 },
  { name: "Infinity", merits: 13, fractions: 5 },
  { name: "Itach", merits: 10, fractions: 3 }, // inserido
  { name: "Jabu", merits: 3, fractions: 0 },
  { name: "Jonny", merits: 4, fractions: 2 },
  { name: "Juniòór", merits: 8, fractions: 0 },
  { name: "Ka.y", merits: 1, fractions: 0 },
  { name: "K4lav3ra", merits: 8, fractions: 0 },
  { name: "Kevin☆", merits: 3, fractions: 0 },
  { name: "Leonardo", merits: 11, fractions: 5 },
  { name: "Levi", merits: 9, fractions: 0 },
  { name: "Letty lettuce", merits: 1, fractions: 3 },
  { name: "Lilyuzumi", merits: 13, fractions: 5 },
  { name: "Lipexz", merits: 2, fractions: 3 },
  { name: "LéoMatsury", merits: 2, fractions: 3 },
  { name: "Luxuria", merits: 2, fractions: 3 },
  { name: "MacroX", merits: 6, fractions: 0 },
  { name: "Mika (julya)", merits: 2, fractions: 0 },
  { name: "Mika (let)", merits: 2, fractions: 3 },
  { name: "MikeBoom", merits: 2, fractions: 3 },
  { name: "OMaven", merits: 8, fractions: 0 },
  { name: "Pedro Legend", merits: 10, fractions: 0 },
  { name: "Pedro", merits: 2, fractions: 3 },
  { name: "Reis", merits: 3, fractions: 0 }, // inserido
  { name: "Rwanda!!", merits: 0, fractions: 3 },
  { name: "Ryco", merits: 5, fractions: 3 },
  { name: "Sarvitar", merits: 3, fractions: 0 },
  { name: "Sníp3r", merits: 0, fractions: 0 },
  { name: "Spomie", merits: 0, fractions: 0 },
  { name: "Sprout", merits: 5, fractions: 0 },
  { name: "Sr. White :)", merits: 2, fractions: 3 },
  { name: "Tiago70", merits: 2, fractions: 3 },
  { name: "Volpirs", merits: 8, fractions: 3 },
  { name: "Wolf", merits: 0, fractions: 0 }
];

let orderMode = "ranking"; // "ranking" ou "alphabetical"

// render tabela
function renderScoreboard() {
  const tbody = document.querySelector("#scoreboard tbody");
  tbody.innerHTML = "";

  // Ordena por pontos (merits*6 + fractions)
  const rankingPlayers = [...players].sort((a,b) => (b.merits*6+b.fractions) - (a.merits*6+a.fractions));
  rankingPlayers.forEach((p,i)=>p.rank=i+1);

  // Pontuação dos três primeiros para medalhas
  const firstScore = rankingPlayers[0].merits*6 + rankingPlayers[0].fractions;
  const secondScore = rankingPlayers[1] ? rankingPlayers[1].merits*6 + rankingPlayers[1].fractions : null;
  const thirdScore = rankingPlayers[2] ? rankingPlayers[2].merits*6 + rankingPlayers[2].fractions : null;

  // Ordenação final (por ranking ou alfabética)
  const sortedPlayers = orderMode==='ranking'
    ? [...rankingPlayers]
    : [...players].sort((a,b)=>a.name.localeCompare(b.name));

  sortedPlayers.forEach((player,index)=>{
    // Atribui medalha considerando empates
    const playerScore = player.merits*6 + player.fractions;
    let medal = '';
    if(playerScore === firstScore) medal = '🥇';
    else if(playerScore === secondScore) medal = '🥈';
    else if(playerScore === thirdScore) medal = '🥉';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${player.rank}º</td>
      <td class="${playerScore === firstScore ? 'gold' : playerScore === secondScore ? 'silver' : playerScore === thirdScore ? 'bronze' : ''}">
        ${player.name} ${medal}
      </td>
      <td>${player.merits}</td>
      <td>${player.fractions}</td>
    `;
    tbody.appendChild(row);

    // animação suave em cascata
    setTimeout(()=>row.classList.add('visible'), index*50);
  });

  // Atualiza texto do botão de ordenação
  document.getElementById("orderBtn").textContent = orderMode==='ranking'?'🔀 Ordenar A-Z':'🔀 Ordenar por Ranking';
}

// alternar ordenação
document.getElementById("orderBtn").addEventListener('click',()=>{
  orderMode = orderMode==='ranking'?'alphabetical':'ranking';
  renderScoreboard();
});

// alternar tema
document.getElementById("themeBtn").addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  document.getElementById("themeBtn").textContent = document.body.classList.contains('dark')?'☀️ Modo Claro':'🌙 Modo Escuro';
});

// inicial
renderScoreboard();

// TROCA DAS IMAGENS COM FADE E TEXTO DINÂMICO
document.querySelectorAll('.merito-wrapper img').forEach((img, index) => {
  const originalSrc = `merito${index+1}.png`;   // arte completa
  const croppedSrc  = `coprada${index+1}.png`;  // só tabela

  // inicia com a imagem completa
  img.src = originalSrc;

  // adiciona legenda se não existir
  let caption = img.nextElementSibling;
  if(!caption || !caption.classList.contains('caption')) {
    caption = document.createElement('div');
    caption.classList.add('caption');
    caption.textContent = 'Clique para visualizar a tabela maior';
    img.insertAdjacentElement('afterend', caption);
  }

  // clique para alternar com fade
  img.addEventListener('click', () => {
    img.style.transition = 'opacity 0.5s';
    img.style.opacity = 0;

    setTimeout(() => {
      if(img.src.includes(originalSrc)) {
        img.src = croppedSrc;
        caption.textContent = 'Clique para visualizar a arte';
      } else {
        img.src = originalSrc;
        caption.textContent = 'Clique para visualizar a tabela maior';
      }
      img.style.opacity = 1;
    }, 500);
  });
});
