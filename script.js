// Lista de jogadores com méritos e frações
const players = [
  { name: "AnnaVedder", merits: 7, fractions: 0 },
  { name: "Arctibax", merits: 8, fractions: 0 },
  { name: "Arthur Gamer", merits: 8, fractions: 0 },
  { name: "Arthur", merits: 2, fractions: 0 },
  { name: "Askyzz", merits: 13, fractions: 2 },
  { name: "Deus Shelby", merits: 13, fractions: 2 },
  { name: "Infinity", merits: 13, fractions: 2 },
  { name: "FrostSnow", merits: 13, fractions: 2 },
  { name: "GeNiUs", merits: 22, fractions: 0 },
  { name: "Easy", merits: 11, fractions: 2 },
  { name: "Gilmarcio", merits: 11, fractions: 2 },
  { name: "Leonardo", merits: 11, fractions: 2 },
  { name: "Lilyuzumi", merits: 11, fractions: 2 },
  { name: "Ygor BB", merits: 15, fractions: 0 },
  { name: "Fast", merits: 20, fractions: 0 },
  { name: "Icefox", merits: 10, fractions: 0 },
  { name: "Pedro Legend", merits: 10, fractions: 0 },
  { name: "LettyLetuce", merits: 1, fractions: 0 },
  { name: "CoragemTheDog", merits: 5, fractions: 0 },
  { name: "MacroX", merits: 5, fractions: 0 },
  { name: "Ryco", merits: 5, fractions: 0 },
  { name: "Dragon", merits: 5, fractions: 0 },
  { name: "Eberton", merits: 5, fractions: 0 },
  { name: "Jonny", merits: 4, fractions: 2 },
  { name: "Firefox", merits: 4, fractions: 2 },
  { name: "Autobot", merits: 9, fractions: 0 },
  { name: "Sarvitar", merits: 3, fractions: 0 },
  { name: "Dark Jeff", merits: 3, fractions: 0 },
  { name: "Huya", merits: 3, fractions: 0 },
  { name: "Kevin☆", merits: 3, fractions: 0 },
  { name: "Volpirs", merits: 8, fractions: 0 },
  { name: "Juniòór", merits: 8, fractions: 0 },
  { name: "K4lav3ra", merits: 8, fractions: 0 },
  { name: "OMaven", merits: 8, fractions: 0 },
  { name: "Dex", merits: 2, fractions: 0 },
  { name: "Lipexz", merits: 2, fractions: 0 },
  { name: "Mika (julya)", merits: 2, fractions: 0 },
  { name: "Frederico", merits: 2, fractions: 2 },
  { name: "Jabu", merits: 2, fractions: 2 },
  { name: "LéoMatsury", merits: 2, fractions: 2 },
  { name: "Luxuria", merits: 2, fractions: 2 },
  { name: "Mika (let)", merits: 2, fractions: 2 },
  { name: "Pedro", merits: 2, fractions: 2 },
  { name: "Sprout", merits: 2, fractions: 2 },
  { name: "Thxr<3", merits: 2, fractions: 2 },
  { name: "Tiago70", merits: 2, fractions: 2 },
  { name: "Boltzin", merits: 0, fractions: 0 },
  { name: "Digopom", merits: 0, fractions: 0 },
  { name: "MikeBoom", merits: 0, fractions: 0 },
  { name: "Rwanda!!", merits: 0, fractions: 0 },
  { name: "Sníp3r", merits: 0, fractions: 0 },
  { name: "Spomie", merits: 0, fractions: 0 },
  { name: "Sr. White :) ", merits: 0, fractions: 0 },
  { name: "Wolf", merits: 0, fractions: 0 }
];

let currentOrder = "ranking";
let previousPositions = {};

function setOrder(order) {
  currentOrder = order;
  renderTable();
}

function renderTable() {
  const tableBody = document.querySelector("#scoreTable tbody");
  tableBody.innerHTML = "";

  let sortedPlayers = [...players];

  if (currentOrder === "ranking") {
    sortedPlayers.sort((a, b) =>
      (b.merits + b.fractions / 6) - (a.merits + a.fractions / 6)
    );
  } else {
    sortedPlayers.sort((a, b) => a.name.localeCompare(b.name));
  }

  // top 3 (considerando empates)
  let topScores = [...new Set(sortedPlayers.map(p => p.merits + p.fractions / 6))]
                  .sort((a, b) => b - a)
                  .slice(0, 3);

  sortedPlayers.forEach((player, index) => {
    const row = document.createElement("tr");

    // posição / medalha
    const posCell = document.createElement("td");
    if (currentOrder === "ranking" && topScores.includes(player.merits + player.fractions / 6)) {
      const medal = document.createElement("span");
      if (topScores.indexOf(player.merits + player.fractions / 6) === 0) medal.textContent = "🥇";
      if (topScores.indexOf(player.merits + player.fractions / 6) === 1) medal.textContent = "🥈";
      if (topScores.indexOf(player.merits + player.fractions / 6) === 2) medal.textContent = "🥉";
      posCell.appendChild(medal);
    } else {
      posCell.textContent = currentOrder === "alpha" ? "-" : index + 1;
    }
    row.appendChild(posCell);

    // nome
    const nameCell = document.createElement("td");
    nameCell.textContent = player.name;
    row.appendChild(nameCell);

    // méritos
    const meritsCell = document.createElement("td");
    meritsCell.textContent = player.merits;
    row.appendChild(meritsCell);

    // frações
    const fracCell = document.createElement("td");
    fracCell.textContent = player.fractions;
    row.appendChild(fracCell);

    // animação se posição mudou
    if (currentOrder === "ranking") {
      const previousIndex = previousPositions[player.name];
      if (previousIndex !== undefined && previousIndex !== index) {
        if (previousIndex > index) {
          row.classList.add("highlight-up");
        } else {
          row.classList.add("highlight-down");
        }
      }
      previousPositions[player.name] = index;
    }

    tableBody.appendChild(row);
  });
}

renderTable();
