

/*start with function called Computer Play that will return Rock paper scissors*/

/*set array of possible outcomes*/
const outcomes = ['rock','paper','scissors'];


/*create function to simulate the computer pick by selecting a random item from the array*/
function computerPlay() {
/*pick number between 1 and 3*/
    let selection = Math.floor(Math.random() * 3);
    /*pick from array*/
    let outcome = outcomes[selection];
    /*return result to console*/
    return outcome;
    
}


/*set function result as variable for further use*/
let computerSelection = computerPlay().toLowerCase();

/*testing purposes only, set player selection*/
let playerSelection = outcomes[0].toLowerCase();

/*set function to take in too parameters ... player selection and comp selection*/
function playRound(playerSelection , computerSelection) {
    /*run through outcomes if user picks rock*/
    console.log("You picked..." + playerSelection.toUpperCase());
    console.log("The computer picked..." + computerSelection.toUpperCase());
    if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        return(`${playerSelection.toUpperCase()} BEATS ${computerSelection.toUpperCase()}!! YOU WIN!`);
    } else if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
    ) {
        return(`Sorry, Boss... ${computerSelection} beats ${playerSelection}... you lose!`);
    } else {
        return("YOU TIED - try again!")
    }
}

console.log(playRound(playerSelection,computerSelection));
