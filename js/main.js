
// on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
// on affiche un message de victoire
//alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attemps);
let score = []
let game = {
    attemps : 1,          
    max : 20,
    min : 10,
    enteredNumber: 0,
    randomNumber : donneNombreRamdom(10, 20),
};

function donneNombreRamdom(minimum, maximum) {    
    minimum = Math.floor(minimum);
    maximum = Math.floor(maximum);
    return Math.floor(Math.random() * (maximum - minimum +1)) + minimum
}

function relancerJeu() {
    game.attemps = 1,        //je remet mon nombre d'essaie a zero 
    game.randomNumber = donneNombreRamdom(10, 20),     //je redeclare un nombre aleatoire grace a ma fonction d'avant 
    game.enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'))      //je reaffiche mon prompt pour rechercher le nombre   
};

function play(obj){
    console.log(obj.enteredNumber)
    relancerJeu()
    while (obj.enteredNumber !== game.randomNumber) {     //tant que le nombre que j'ecris N'est pas egal a nombre ramdom il boucle
        if (obj.enteredNumber < obj.randomNumber) {          //si le nombre que j'ecris est plus petit que le nombre random alors il dit c'est plus 
            obj.enteredNumber = parseInt(prompt('C\'est plus'));  
        }
        else {                                                      //sinon c'est moins 
            obj.enteredNumber = parseInt(prompt('C\'est moins'));
        }
        obj.attemps += 1;         //et a chaque fin de boucle il rajoute plus 1 au nombre de fois que j'essaye 
    }
    alert('Bravo ! C\'était bien ' + obj.randomNumber + ' - Nombre d\'essais : ' + obj.attemps);
    score.push(obj.attemps)                  
    alert("voici ton score " + score);
    console.log(score)
    let questionRelancer = "tia envie de rejouer"
    let solutionQuestion = "oui"
    let result = prompt(questionRelancer)
    if (result === solutionQuestion) {
        play(obj);
    }else {
        alert("ok la famille")
    }
}
play(game);
