const config = 
    {
        min: 1, 
        max: 10, 
        promptPlayerInput: "Quel est le nombre à trouver ?",
        promptIsLess: "C'est moins",
        promptIsMore: "C'est plus",
        alertAskNewGame: "Voulez-vous refaire une partie ?",
        alertThank: "Merci d'avoir joué !",
        alertScore1: "Vous avez trouvé le nombre mystère en un seul coup ! Trop fort !",
        alertScore2: "Vous avez trouvé le nombre mystère en moins de 10 coups. Pas mal !",
        alertScore3: "Vous avez trouvé le nombre mystère en plus de 10 coups. Vous ferez mieux la prochaine fois."
    }

let attempts = 0
let history = []
let games = []
let countFinishedGames = 0

function mysteryNumber(min, max)
{
    return Math.round(min + (Math.random() * (max-min)))
}

function askReplay()
{
    if (confirm(config.alertAskNewGame))
        {
            attempts = 1
            gameStart(parseInt(prompt(config.promptPlayerInput)), mysteryNumber(config.min, config.max))
        }
        else
        {   
            alert(config.alertThank)
            console.log("Historique des parties jouées :")
            games.forEach((partie, index) => {
                console.log("- - - - - Partie n°" + index + " - - - - -")
                partie.forEach((value) => {
                    console.log("tentative n°" + value.tentative + ": " + value.resultat)
                })
            })
        }
}

function displayGameCurrentResults(attempts)
{
    if (attempts == 1)
        {
            alert(config.alertScore1) //le petit flex
        }

    else
    {
        if (attempts < 10)
            {
                alert(config.alertScore2 + "(" + attempts + " tentatives)")
            }

        else
            {
                alert(config.alertScore3 + "(" + attempts + " tentatives)")
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
    
    displayGameCurrentResults(attempts) //affiche le résulat de la partie en cours
    askReplay() //demande si le joueur veut jouer à nouveau
}

function gameStart(input, number)
{
    attempts = 1 //réinitialisation du compteur d'essais
    history = [] //on réinitialise l'historique des tentatives, pour chaque début de partie
    
    if (!isNaN(input)) //petit fix car le premier nombre deviné n'était jamais inséré dans le tableau history
    {
        history.push(input)
    }
      
    while (input != number)
    {     
        if (input < number)
        {
                input = parseInt(prompt(config.promptIsMore))
        }
        else
        {
                input = parseInt(prompt(config.promptIsLess))
        }
        if (!isNaN(input))
        {
            attempts++
            history.push(input)
        }   
    }
    gameWin()    
}

gameStart(parseInt(prompt(config.promptPlayerInput)), mysteryNumber(config.min, config.max))