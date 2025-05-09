// Le nombre max



// je déclare mon objet Game :
let game = {
    // Le nombre cherché
    searchedNumber: "",
    // Le nombre d'essais
    attemps: 1,
    maxi: 50,
    mini: 10
}

function nbrAleatoire(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

game.searchedNumber = nbrAleatoire(game.mini, game.maxi)
// Le nombre saisi
let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));


function play(jeu) { // on déclare une function pour jouer : on veut utiliser les fonctionnalités par rapport à l'objet
    nbrAleatoire()
    // Tant que le nombre saisi n'est pas bon on redemande un nombre
    while (enteredNumber !== jeu.searchedNumber) {
        // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
        if (enteredNumber < jeu.searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        }
        else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        // on incrémente le nombre d'essais
        jeu.attemps += 1;
    }
    if (enteredNumber === jeu.searchedNumber) {
        alert('Bravo ! C\'était bien ' + jeu.searchedNumber + ' - Nombre d\'essais : ' + jeu.attemps);
    }
}
// on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
// on affiche un message de victoire

play(game)
