let game = {
    min : 10, 
    max :20,
    attempts : 1,
};

let resultat = []
let compteurPartie = 0

function intervalleRandom(min, max) {
    let searchedNumber = Math.round(Math.random() * (max - min) + min);
    return searchedNumber;
};

function play(game) {
    let enteredNumber = parseInt(prompt('Saisi un nombre !'));
    let searchedNumber = intervalleRandom(game.min, game.max);
    while (enteredNumber !== searchedNumber) {
        // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
        if (enteredNumber < searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        }
        else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        };
        // on incrémente le nombre d'essais
        game.attempts += 1;
    };
    compteurPartie++
    resultat.push(' Partie ' + compteurPartie + ' : ' + game.attempts + " essais");
    alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + game.attempts + ' Score de toutes les parties : ' + resultat);
    if (confirm('Veux-tu rejouer ?')) {
        return play(game)
    } else {
        return alert('Score final : ' + resultat)
    }
};

play(game);