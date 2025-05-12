// L'objet game
let game= {
    // Le nombre max
    max: 10,
    // Le nombre cherché
    searchedNumber :  null,
    // Le nombre d'essais
    attemps: 5
}


game.searchedNumber = Math.floor(Math.random() * (game.max+1));
//game.enteredNumber= parseInt(prompt('Quel est le nombre à trouver ?'));


function play()
{
    let enteredNumber= parseInt(prompt('Essaye de trouver le nombre'));
    let tentative=1; 

    // Tant que le nombre saisi n'est pas bon on redemande un nombre
    while (enteredNumber !== game.searchedNumber && tentative<game.attemps) 
        {   
            // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
            if (enteredNumber < game.searchedNumber) {
                enteredNumber = parseInt(prompt('C\'est plus'));
            }
            else {
                enteredNumber = parseInt(prompt('C\'est moins'));
            }

            tentative++
        }

        if(enteredNumber==game.searchedNumber)
        {
            alert('Bravo ! C\'était bien ' + game.searchedNumber + ' - Nombre d\'essais : ' + tentative);
        } 
        else{ alert("Le nombre de tentatives a été atteint."+"Le bon nombre était "+game.searchedNumber)}

}

play()


/*
function randomNumb(min, max) 
{
    return Math.random() * (max - min) + min;
}

console.log(randomNumb())
*/
  

if (confirm("Voulez vous rejouer ?"))
{
    open(play())
}