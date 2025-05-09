
let game = {
    enteredNumber: 0,
    nombreEssais: 1,
    minimum: 10,
    maximum: 20 
}
let searchedNumber = Math.floor(Math.random() * (game.maximum - game.minimum + 1)) + game.minimum;
let score = []

function reset() {
    searchedNumber = nombreAleatoire(game.minimum, game.maximum),
    game.nombreEssais = 1;
    game.enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));
}

function play(game) {
    reset()
    while (game.enteredNumber !== searchedNumber) {
        // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
        if (game.enteredNumber < searchedNumber) {
            game.enteredNumber = parseInt(prompt('C\'est plus'));
        }
        else {
            game.enteredNumber = parseInt(prompt('C\'est moins'));
        }
        // on incrémente le nombre d'essais
        game.nombreEssais += 1;
    }
    alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + game.nombreEssais);
    score.push(game.nombreEssais);
    if (confirm("Voulez-vous rejouer ?")) {
        play(game) 
    }

    for (let i = 0; i < score.length; i++) {
        alert("Partie " + (i +1) + " : " + score[i] + " essais");
    }
    
}

function nombreAleatoire(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

play(game)

