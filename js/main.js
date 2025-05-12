let score = []

const game = {
    nombreMin : 10,
    nombreMax : 20,
    nombreEntre : 0,
    essais : 1
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function reset() {
    game.essais = 1
    game.nombreRecherche = randomNumber(game.nombreMin, game.nombreMax)
    game.nombreEntre = parseInt(prompt('Quel est le nombre à trouver ?'));
}

function play(game) {
    reset()
    // Tant que le nombre saisi n'est pas bon on redemande un nombre
    while (game.nombreEntre !== game.nombreRecherche) {
        // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
        if (game.nombreEntre < game.nombreRecherche) {
            game.nombreEntre = parseInt(prompt('C\'est plus'));
        }
        else {
            game.nombreEntre = parseInt(prompt('C\'est moins'));
        }
        // on incrémente le nombre d'essais
        game.essais += 1;
    }
    score.push(game.essais)
    alert('Bravo ! C\'était bien ' + game.nombreRecherche + ' - Nombre d\'essais : ' + game.essais);
    if (confirm("Voulez-vous rejouez une partie ?")) {
        play(game)
    } else
    alert("Le jeu est fini ! Vous pouvez consulter vos scores dans la console !")
    score.forEach((essai, index) => {console.log(('Partie ' + (index + 1) + ' : ' + essai + ' essais'))})
}

play(game)