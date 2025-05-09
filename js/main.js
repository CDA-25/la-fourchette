let attemps = 1
let playerInput = parseInt(prompt('Quel est le nombre à trouver ?'))
let history = [] //stocke l'historique des tentatives de la partie en cours
let games = [] //stocke les différentes parties
let countGames = 0 //stocke le nombre de victoires (parties effectuées) TODO : lier ça avec games[]


function randomNumber(min, max) //génère un nombre random avec un min/max en input de la fonction
{
    return Math.round(min + (Math.random() * (max-min)))
}

function askReplay()
{
    if (confirm("Voulez-vous refaire une partie ?"))
        {
            game(playerInput, randomNumber(10,20))
        }
        else
        {
            
            alert("Merci d'avoir joué !")
            for (let j = 0; j < games.length; j++)
            {
                console.log(games[j]) // Affiche le résultat de la partie en cours
            }
            games.push(attemps)
        }
}


function game(input, number)
{
    attemps = 1
    history = []

    while (input != number)
    {
        if (input < number)
        {
            input = parseInt(prompt("C'est plus"))
        }

        else
        {
            input = parseInt(prompt("C'est moins"))
        }

        attemps++
        history.push(input)
    }

    countGames ++ //partie terminée, on incrémente le nombre de parties jouées

    if (attemps == 1)
    {
        alert("Vous êtes trop fort ! Vous avez trouvé le nombre mystère en un coup !!")
        return;
    }
    if (attemps < 10)
    {
        alert("Vous avez trouvé le nombre mystère en moins de 10 coups. Pas mal ! " + attemps + "essais")
        return;
    }
    else
    {
        alert("Vous avez bien trouvé le nombre mystière mais vous êtes vraiment nul..." + attemps + "essais")
        return;  
    } 
}



game(playerInput, randomNumber(10,20))

games.push(attemps) //ajoute le résultat de la partie en cours (nombre de tentatives)


askReplay() //fonction qui demande au joueur s'il veut rejouer ou non


for (let i = 0; i < history.length; i++) //le poti for
{
    console.log("Tentative n°", i+1, ":", history[i] ) //Affiche les tentatives de la partie en cours
}

//      BUGS
// ne redemande pas la confirmation de rejouer au bout de la 2eme partie
// du coup la gestion du score de la seconde partie est cassé (games[]) , (fusionné avec celui de la première)
// pas d'historique
// il semble que le while s'active 


//      TODO
//enregistrer tous les paramètres dans un objet

//JavaScriptM'aTuer
