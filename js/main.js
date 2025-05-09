// Le nombre max
let max = 10;
const game = {
  // Le nombre cherché
  searchedNumber: Math.round(Math.random() * max),

  // Le nombre d'essais
  attemps: 1,

  // Historique des tentatives(fait avec copilot)
  attemptsHistory: [],
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

  // on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
  // on affiche un message de victoire
  alert(
    "Bravo ! C'était bien " +
      object.searchedNumber +
      " - Nombre d'essais : " +
      object.attemps +
      //fait avec copilot
      "\nHistorique des tentatives : " +
      object.attemptsHistory.join(", ")
  );
}
play(game);

function aléatoire(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
alert(aléatoire(10, 20));

confirm("Hey tu veux refaire une partie mon gars ?");
play(game);
