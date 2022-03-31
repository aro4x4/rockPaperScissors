
console.log("       |--ROCK - PAPER - SCISSORS--");

//player input
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', () => playRound(button.innerHTML , computerPlay())));

var int_playerPoints = 0;

//computer input
function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * choice.length);
    const randomSelection = choice[randIndex];
    return(randomSelection);
}
var int_computerPoints = 0;

//play round
function playRound(playerSelection, computerSelection) {
    console.log("       |   Player choice: " + playerSelection);
    console.log("       |   Computer choice: " + computerSelection);
    const result = playerSelection + computerSelection;
    if (playerSelection == computerSelection) {
    console.log("       | It's a tie.");
}

else if (result == "rockscissors" || result == "paperrock" || result == "scissorspaper") {
    console.log("       | You win! " + playerSelection + " beats " + computerSelection);
    int_playerPoints = int_playerPoints + 1;
}
else {
    console.log("       | You lose. " + computerSelection + " beats " + playerSelection);
    int_computerPoints = int_computerPoints + 1;
}
    console.log("       |Player points:", int_playerPoints, "Computer points:", int_computerPoints );
}

//five round game
//function game() {
//console.log("       |   ROUND 1 / 5");
//playRound();
//console.log("       |   ROUND 2 / 5");
//playRound();
//console.log("       |   ROUND 3 / 5");
//playRound();
//console.log("       |   ROUND 4 / 5");
//playRound();
//console.log("       |   ROUND 5 / 5");
//playRound();
//function winner () {
//    if (int_playerPoints == int_computerPoints) {
//        console.log("       |--IT'S A TIE--");
//    }
//    else if (int_playerPoints > int_computerPoints) {
//        console.log("       |--Congratulations, YOU WON!--");
//    }
//    else {
//        console.log("       |--YOU LOST--");
//    }
//}
//winner()
//}
//game()