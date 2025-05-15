// Le nombre max
let max = 20; 

// Le nombre min 
let min = 10;

// Le nombre cherché
let searchedNumber = Math.round(Math.random() * max);

// Le nombre saisi
let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

// Le nombre d'essais
let attemps = 1;

// Tant que le nombre saisi n'est pas bon on redemande un nombre
while (enteredNumber !== searchedNumber) {
    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    if (enteredNumber < searchedNumber) {
        enteredNumber = parseInt(prompt('C\'est plus'));
    }
    else {
        enteredNumber = parseInt(prompt('C\'est moins'));
    }
    // on incrémente le nombre d'essais
    attemps += 1;
}


let game = {
    min: 10, // Le nombre min
    max: 20, // Le nombre max
    searchedNumber: Math.round(Math.random() * max),// Le nombre cherché
    attemps: 1,//Le nombre d'essais
    enteredNumber: parseInt(prompt('Quel est le nombre à trouver ?')),// Le nombre saisi

    }


    function play () {
        game.attemps = 1;
        game.searchedNumber = Math.round(Math.random() * (game.max - game.min) + game.min);
        
        while (enteredNumber !== game.searchedNumber) {
            if (enteredNumber < game.searchedNumber) {
                enteredNumber = parseInt(prompt('C\'est plus'));
            } else {
                enteredNumber = parseInt(prompt('C\'est moins'));
            }
            game.attemps += 1;
        }
    }
// on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
// on affiche un message de victoire
alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attemps);

// Fonction pour stocker les scores
function saveScore(playerName, attempts) {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push({ player: playerName, attempts: attempts });
    localStorage.setItem('scores', JSON.stringify(scores));
}

// Demander le nom du joueur
let playerName = prompt('Entrez votre nom :');

// Sauvegarder le score
saveScore(playerName, attemps);

// Afficher les scores
function displayScores() {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.sort((a, b) => a.attempts - b.attempts); // Trier par nombre d'essais
    alert('Scores :\n' + scores.map(score => `${score.player}: ${score.attempts} essais`).join('\n'));
}

// Afficher les scores après la partie
displayScores();

if (confirm("Voulez vous rejouer ?")) {
    play();
}