//Etape 1 cree un object avec les parametres du jeu
const game = {
    min : 10,
    max: 13,
    searchedNumber: null,
    attempts: 1,
    scores: []
};
//Etape 2 cree une fonction pour generez un nombre aleatoire
function getRandomNumber(min, max) {
    //On va utiliser la fonction Math.random() pour generer un nombre aleatoire
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    //On va utiliser la fonction Math.floor() pour arrondir le nombre
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Etape 3 cree une fonction pour jouer
function play() {
    // On initialise le jeu
    //Le nombre a chercher qui vaut de base zero on lui donne la valeur du nombre aleatoire
    game.searchedNumber = getRandomNumber(game.min, game.max);
    game.attempts = 1;

    // on va demander aux joueurs de nous donner un nombre en utilisant parseInt pour pouvoir mettre un nombre
    let entredNumber = parseInt(prompt(`Quel est le nombre à trouver entre ${game.min} et ${game.max} ?`));

    // Ici on va cree la boucle du jeu si le joueur ne trouve pas la bonne valeur dés le début
    while (entredNumber !== game.searchedNumber) {
        // On va lui dire que si plus petit ou plus grand ce qu'il doit faire
        if (entredNumber < game.searchedNumber) {
            entredNumber = parseInt(prompt('C\'est plus'));
        } else if (entredNumber > game.searchedNumber) {
            entredNumber = parseInt(prompt('C\'est moins'));
        }
        // Pour savoir le nombre d'essai du joueur on va incrémenter sa valeur de 1
        game.attempts += 1;
    }

    // Si le joueur a trouvé le bon nombre dés le premier essai ou apres la boucle
    alert(`Bravo ! C'était bien ${game.searchedNumber} - Nombre d'essais : ${game.attempts}`);
    //On rentre le score du joueur dans le tableau des scores
    game.scores.push(game.attempts);

    // Bonus : Afficher les scores des parties précédentes
    // copilot ma aider je ne comprenais pas comment faire
    let scoreMessage = 'Scores :\n';
    game.scores.forEach((score, index) => {
        scoreMessage += `Partie ${index + 1} : ${score} essais\n`;
    });
    alert(scoreMessage);

    // Si le joueur gagne, on peut lui proposer de rejouer avec la fonction confirm
    if (confirm('Voulez-vous rejouer ?')) {
        play();
    }else {
        //Ajout d'une formule de politesse, non mais faut pas abuser non plus
        alert('Merci d\'avoir joué !');
    }
}

// maintenant on va enfin lancer notre fonction pour jouer
play();

//Remerciement a google pour mes recherches et copilot pour l'amélioration de l'affichage des scores