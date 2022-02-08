
console.log("       |--ROCK - PAPER - SCISSORS--");

//player input
function playerInput() {
    const string = prompt("ROCK-PAPER-SCISSORS Please enter your choice: ");
    return string.toLowerCase();
}
var playerPoints = 0;

//computer input
function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * choice.length);
    const randomSelection = choice[randIndex];
    return(randomSelection);
}
var computerPoints = 0;

//play round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerInput();
    console.log("       |   Player choice: " + playerSelection);
    computerSelection = computerPlay(); 
    console.log("       |   Computer choice: " + computerSelection);
    const result = playerSelection + computerSelection;
    if (playerSelection == computerSelection) {
    console.log("       | It's a tie.");
}

else if (result == "rockscissors" || result == "paperrock" || result == "scissorspaper") {
    console.log("       | You win! " + playerSelection + " beats " + computerSelection);
    playerPoints = playerPoints + 1;
}
else {
    console.log("       | You lose. " + computerSelection + " beats " + playerSelection);
    computerPoints = computerPoints + 1;
}
    console.log("       |Player points:", playerPoints, "Computer points:", computerPoints );
}

//game
function game() {
console.log("       |   ROUND 1 / 5");
playRound();
console.log("       |   ROUND 2 / 5");
playRound();
console.log("       |   ROUND 3 / 5");
playRound();
console.log("       |   ROUND 4 / 5");
playRound();
console.log("       |   ROUND 5 / 5");
playRound();
function winner () {
    if (playerPoints == computerPoints) {
        console.log("       |--IT'S A TIE--");
    }
    else if (playerPoints > computerPoints) {
        console.log("       |--Congratulations, YOU WON!--");
    }
    else {
        console.log("       |--YOU LOST--");
    }
}
winner()
}
game()