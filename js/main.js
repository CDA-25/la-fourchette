// Le nombre max
let max = 500;

// je déclare mon objet Game :
let game = {
    // Le nombre cherché
    searchedNumber: Math.round(Math.random() * max),
    // Le nombre d'essais
    attemps: 1
}

// Le nombre saisi
let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));


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

// on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
// on affiche un message de victoire
alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attemps);

