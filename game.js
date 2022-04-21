

/*start with function called Computer Play that will return Rock paper scissors*/

const outcomes = ['rock','paper','scissors'];


function computerPlay() {
/*pick number between 1 and 3*/
    let selection = Math.floor(Math.random() * 3);
    let outcome = outcomes[selection];
    return outcome;
    
}

let computerSelection = computerPlay().toLowerCase();
let playerSelection = outcomes[0].toLowerCase();


function playRound(playerSelection , computerSelection) {
    /*run through outcomes if user picks rock*/
    console.log("You picked..." + playerSelection.toUpperCase());
    console.log("The computer picked..." + computerSelection.toUpperCase());
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log("ROCK BEATS SCISSORS - YOU WIN!");
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log("Sorry, Boss... paper beats rock... you lose!");
    /*paper flows*/
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log("PAPER BEATS ROCK - YOU WIN!");
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log("Sorry, Boss... scissors beats paper... you lose!");
    /*scissor flows*/
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log("SCISSORS BEATS PAPER - YOU WIN!");
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log("Sorry, Boss... rock beats scissors... you lose!");
    } else {
        console.log("YOU TIED - try again!")
    }
}

playRound(playerSelection,computerSelection);