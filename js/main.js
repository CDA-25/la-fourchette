let score = [];

// Le nombre max
let max = 50; 
let min = 1;

// // Le nombre cherché
// let searchedNumber = Math.round(Math.random() * max);

// // Le nombre saisi
// let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

// // Le nombre d'essais
// let attemps = 1;

// // Tant que le nombre saisi n'est pas bon on redemande un nombre
// while (enteredNumber !== searchedNumber) {
//     // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
//     if (enteredNumber < searchedNumber) {
//         enteredNumber = parseInt(prompt('C\'est plus'));
//     }
//     else {
//         enteredNumber = parseInt(prompt('C\'est moins'));
//     }
//     // on incrémente le nombre d'essais
//     attemps += 1;
// }

// // on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
// // on affiche un message de victoire
// alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attemps);

// ----------------------------------------------------------------------------------------

let game = {
    searchedNumber:Math.round(Math.random() * max),
    attempts:1
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

function reset() {
    game.searchedNumber = random(min, max),
    game.attempts = 1
    enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));
}

function play(jeu) {
    reset()
    while (enteredNumber !== jeu.searchedNumber) {
        if (enteredNumber < jeu.searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        }
        else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        jeu.attempts += 1;
    }
    alert('Bravo ! C\'était bien ' + jeu.searchedNumber + ' - Nombre d\'essais : ' + jeu.attempts);
    score.push(jeu.attempts)
    alert("Scores enregistrés : " + parseInt(score))
    if(confirm("Les vrais ZHOMMES clique sur OK pour rejouer?")) {
        play(jeu);
    } 
    else {

    } alert("* TCHIP ! *");
}


play(game);