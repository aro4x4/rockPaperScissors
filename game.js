//player input
console.log("ROCK - PAPER - SCISSORS");
const string = prompt("ROCK-PAPER-SCISSORS Please enter your choice: ");
const playerSelection = string.toLowerCase();
console.log("Player choice: " + playerSelection);

//computer input

function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * choice.length);
    const randomSelection = choice[randIndex];
    return(randomSelection);
}

//play round

const computerSelection = computerPlay();
console.log("Computer choice: " + computerSelection);

function playRound() {    
    const result = playerSelection + computerSelection;
    if (playerSelection == computerSelection) {
    console.log("It's a tie.");
}

else if (result == "rockscissors" || result == "paperrock" || result == "scissorspaper") {
    console.log("You win! " + playerSelection + " beats " + computerSelection);
}
else
    console.log("You loose. " + computerSelection + " beats " + playerSelection);

}
playRound();