let game = {
    min:10,
    max: 20,
    attemps: 1
}

let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));
function nombreAleatoire(game) {
    return Math.round(Math.random() * (game.max - game.min) + game.min);
}

let tab = []


function play(jeux) {
    
    let searchedNumber = nombreAleatoire(jeux)
    jeux.attemps = 0
    while (enteredNumber !== searchedNumber) {
        // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi

        // si nombre plus grand fait ça
        if (enteredNumber < searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        }
        // si nombre plus petit fait ça
        else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        // on incrémente le nombre d'essais
        jeux.attemps += 1;
    }
    
    tab.push(jeux.attemps)
    // mettre un message pour dire si on n'a trouver le bon nombre
    alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + jeux.attemps + " nombre dernière partie " + tab );

    if(confirm("est ce que tu veux rejouer")){
       play(jeux)
    }
    else{
        return alert(tab)
    }
   
    
    
}


  


play(game)
nombreAleatoire()

/*// Le nombre max
let max = 500; 


// Le nombre cherché
//let searchedNumber = Math.round(Math.random() * max);

// Le nombre saisi
//let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

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

// on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
// on affiche un message de victoire
alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attemps);*/