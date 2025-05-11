let min = 1
let max = 10
let attemps = 1
let countFinishedGames = 0
let playerInput = parseInt(prompt('Quel est le nombre à trouver ?'))
let history = []
let games = []

function nombreMystere(min, max)
{
    return Math.round(min + (Math.random() * (max-min)))
}

function askReplay()
{
    if (confirm("Voulez-vous refaire une partie ?"))
        {
            attemps = 1
            gameStart(playerInput, nombreMystere(min, max))
        }
        else
        {   
            alert("Merci d'avoir joué !")
            console.log("Historique des parties jouées :")
            games.forEach((partie, index) => {
                console.log("- - - - - Partie n°" + index + " - - - - -")
                partie.forEach((value) => {
                    console.log("tentative n°" + value.tentative + ": " + value.resultat)
                })
            })
        }
}

function displayGameCurrentResults(attemps)
{
    if (attemps == 1)
        {
            alert("Vous êtes trop fort ! Vous avez trouvé le nombre mystère en un coup !!") //le petit flex
        }

    else
    {
        if (attemps < 10)
            {
                alert("Vous avez trouvé le nombre mystère en " + attemps + " essais. Pas mal !")
            }

        else
            {
                alert("Vous avez trouvé le nombre mystère en " + attemps + " essais. Vous pouvez faire mieux que ça !") 
            }
    }

    //J'enlève ce bout de code, car techniquement le résumé de chaque partie est déjà affiché lorsque le joueur arrête le jeu
    // console.log("Résumé de la partie :")
    // for (let i = 0; i < history.length; i++)
    // {
    //     console.log("Tentative n°" + (i+1) + " : " + history[i])
    // }
}


function gameWin()
{
    countFinishedGames++
    playerInput = 0 // On réinitialise la valeur de playerInput (bug : si le nombre mystère est le même entre deux parties qui se suivent, ça comptabilise direct en victoire)
    games[countFinishedGames] = [] //On initialise le tableau qui va stocker les résultats de la partie qui vient de se terminer

    for (let k = 0; k < history.length; k++)
    {
        // console.log("tentative " + k+1 + " de la partie n° " + (games.length +1) + " : " + history[k]) //pour m'aider à build le tableau, et les foreach plus haut
        games[countFinishedGames].push
        ({ 
            tentative:((k+1)), 
            resultat:history[k]
        })
    }
    

    displayGameCurrentResults(attemps) //affiche le résulat de la partie en cours
    askReplay() //demande si le joueur veut jouer à nouveau
}

function gameStart(input, number)
{
    attemps = 1 //réinitialisation du compteur d'essais
    history = [] //on réinitialise l'historique des tentatives, pour chaque début de partie
    
    if (!isNaN(input)) //petit fix car le premier nombre deviné n'était jamais inséré dans le tableau history
    {
        history.push(input)
    }
      
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
        if (!isNaN(input))
        {
            attemps++
            history.push(input)
        }   
    }
    gameWin()    
}

gameStart(playerInput, nombreMystere(min, max))