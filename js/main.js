let max = 10;

const game = {
  searchedNumber: Math.round(Math.random() * max),

  attemps: 1,

  // Historique des tentatives (fait avec copilot)
  attemptsHistory: [],

  // Tableau des scores (fait avec copilot)
  scores: [],
};

function play(object) {
  let enteredNumber = parseInt(prompt("Quel est le nombre à trouver ?"));

  while (enteredNumber !== object.searchedNumber) {
    object.attemptsHistory.push(enteredNumber);

    if (enteredNumber < object.searchedNumber) {
      enteredNumber = parseInt(prompt("C'est plus"));
    } else {
      enteredNumber = parseInt(prompt("C'est moins"));
    }

    object.attemps += 1;
  }

  object.attemptsHistory.push(enteredNumber);

  object.scores.push(object.attemps);

  alert(
    "Bravo ! C'était bien " +
      object.searchedNumber +
      " - Nombre d'essais : " +
      object.attemps +
      "\nHistorique des tentatives : " +
      object.attemptsHistory.join(", ")
  );

  if (confirm("Hey, tu veux rejouer mon gars ?")) {
    object.searchedNumber = Math.round(Math.random() * max);
    object.attemps = 1;
    object.attemptsHistory = [];
    play(object);
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
