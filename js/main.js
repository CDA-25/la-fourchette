//Etape 1 cree un object avec les parametres du jeu
const game = {
    min : 1,
    max: 500,
    searchedNumber: null,
    attempts: 0,
    scores: []
};
//Etape 2 cree une fonction pour generez un nombre aleatoire
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Etape 3 cree une fonction pour jouer
function play() {
    //On initialise le jeu
    game.searchedNumber = getRandomNumber(game.min, game.max);
    game.attempts = 0;

    //on va demander aux joueurs de nous donner un nombre
    let entredNumber = parseInt(prompt(`Quel est le nombre à trouver entre ${game.min} et ${game.max} ?`));

    //Ici on va cree la boucle du jeu
    //Si le nombre donné par le joueur n'est pas egal au nombre aleatoire
    while (entredNumber !== game.searchedNumber) {
        //On va lui dire que si plus petit ou plus grand ce qu'il doit faire
        //Si le nombre donné par le joueur est plus petit que le nombre aleatoire
        if (entredNumber < game.searchedNumber) {
            entredNumber = parseInt(prompt('C\'est plus'));
        } else {
            entredNumber = parseInt(prompt('C\'est moins'));
        }
        //Pour savoir le nombre d'essai du joueur on va incrémenter sa valeur qui était a zéro
        game.attempts += 1;
    }
}
//Etape 4 on va stocker les scores
game.scores.push(game.attempts);

//Si le joueur a trouvé le bon nombre
alert(`Bravo ! C'était bien ${game.searchedNumber} - Nombre d'essais : ${game.attempts}`);

//Si le joueur gagne on peut lui proposer de rejouer si il le veut
//On va utiliser la fonction prévue a cet effet confirm()
if (confirm('Voulez-vous rejouer ?')) {
    play();
}

//maintenant on va enfin lancer notre fonction pour jouer
play();



//Remerciement a google pour m'avoir aider a trouver la solution XD

