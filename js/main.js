// Le nombre max
    //var max = 500; 

// Le nombre cherché
    

// Le nombre saisi
    //var enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

// Le nombre d'essais
    //var attemps = 1;

// Tant que le nombre saisi n'est pas bon on redemande un nombre
// while (enteredNumber !== searchedNumber) {
//      // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
//     if (enteredNumber < searchedNumber) {
//         enteredNumber = parseInt(prompt('C\'est plus'));
//     }
//     else {
//         enteredNumber = parseInt(prompt('C\'est moins'));
//     }
    // on incrémente le nombre d'essais
//     attemps += 1;
// }

// on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
// on affiche un message de victoire

//Crée un object avec les parametres du jeu
const game = {
    min: 1,
    max: 5,
    searchedNumber: null,
    attemps: 1,
    scores: []
}

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//crée une fonction pour jouer
function play() {

game.searchedNumber = getRandomNumber(game.min, game.max);
game.attempts = 1;

let enteredNumber = parseInt(prompt('Quel est le nombre à trouver entre' + game.min + 'et' + game.max + '?'));

    while (enteredNumber !== game.searchedNumber) {
        if (enteredNumber < game.searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
            
        }
        else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        game.attemps += 1;
    }
    
}
play()
//si le joueur a trouvé le bon nombre
alert('Bravo ! C\'était bien ' + game.searchedNumber + ' - Nombre d\'essais : ' + game.attemps);
game.scores.push(game.attemps);




let scoresMessage = 'Scores :\n' ;
    game.scores.forEach((score, index) => {
        scoresMessage = 'Partie ' + index + 1 + score + 'essais\n';
    });
    alert(scoresMessage);

if (confirm('Voulez-vous rejouer ?')) {
    play();
}



