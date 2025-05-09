// Le nombre max
let max = 10;
const game = {
  // Le nombre cherché
  searchedNumber: Math.round(Math.random() * max),

  // Le nombre d'essais
  attemps: 1,

  // Historique des tentatives (copilot)
  attemptsHistory: [],

  // Tableau des scores (copilot)
  scores: [],
};

function play(object) {
  let enteredNumber = parseInt(prompt("Quel est le nombre à trouver ?"));
  // Tant que le nombre saisi n'est pas bon on redemande un nombre
  while (enteredNumber !== object.searchedNumber) {
    // On enregistre la tentative dans l'historique
    object.attemptsHistory.push(enteredNumber);

    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    if (enteredNumber < object.searchedNumber) {
      enteredNumber = parseInt(prompt("C'est plus"));
    } else {
      enteredNumber = parseInt(prompt("C'est moins"));
    }
    // on incrémente le nombre d'essais
    object.attemps += 1;
  }

  // On enregistre la tentative correcte dans l'historique
  object.attemptsHistory.push(enteredNumber);

  // On ajoute le score au tableau des scores
  object.scores.push(object.attemps);

  // on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
  // on affiche un message de victoire
  alert(
    "Bravo ! C'était bien " +
      object.searchedNumber +
      " - Nombre d'essais : " +
      object.attemps +
      "\nHistorique des tentatives : " +
      object.attemptsHistory.join(", ")
  );

  // Demander si l'utilisateur veut rejouer
  if (confirm("Hey, tu veux rejouer mon gars ?")) {
    // Réinitialiser les propriétés nécessaires pour une nouvelle partie
    object.searchedNumber = Math.round(Math.random() * max);
    object.attemps = 1;
    object.attemptsHistory = [];
    play(object);
  } else {
    // Afficher les scores si l'utilisateur ne veut pas rejouer
    displayScores(object.scores);
  }
}

function displayScores(scores) {
  let message = "Scores de la parties :\n";
  scores.forEach((score, index) => {
    message += `Partie ${index + 1} : ${score} essais\n`;
  });
  alert(message);
}
play(game);
