//player input
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('click', () => playRound(button.innerHTML , computerPlay())));
buttons.forEach(button => button.addEventListener('mousedown', () => button.classList.add('playing')));
buttons.forEach(button => button.addEventListener('mouseup', () => button.classList.remove('playing')));
buttons.forEach(button => button.addEventListener('touchstart', () => button.classList.add('playing')));
buttons.forEach(button => button.addEventListener('touchend', () => button.classList.remove('playing')));


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
    const result = playerSelection + computerSelection;
    
    if (playerSelection == computerSelection) {
    document.getElementById('roundResult').textContent = "It's a tie.";
}

else if (result == "rockscissors" || result == "paperrock" || result == "scissorspaper") {
    document.getElementById('roundResult').textContent = "You win! " + playerSelection + " beats " + computerSelection;
    int_playerPoints = int_playerPoints + 1;
    document.getElementById('roundResult').classList.add('winning');
    const displayResult = document.querySelector('#roundResult');
    displayResult.addEventListener('transitionend', () => document.getElementById('roundResult').classList.remove('winning'));
    document.getElementById('playerScore').classList.add('winning');
    const playerScore = document.querySelector('#playerScore');
    playerScore.addEventListener('transitionend', () => document.getElementById('playerScore').classList.remove('winning'));
}
else {
    document.getElementById('roundResult').textContent = "You lose. " + computerSelection + " beats " + playerSelection;
    int_computerPoints = int_computerPoints + 1;
    document.getElementById('computerScore').classList.add('winning');
    const computerScore = document.querySelector('#computerScore');
    computerScore.addEventListener('transitionend', () => document.getElementById('computerScore').classList.remove('winning'));
}
    document.getElementById('choices').textContent = 'You chose: ' + playerSelection + ' |   Computer chose: ' + computerSelection;
    document.getElementById('playerScore').textContent = 'Your points: ' + int_playerPoints;
    document.getElementById('computerScore').textContent = 'Computer points: ' + int_computerPoints;

    if (int_playerPoints == 5) {
        document.getElementById('roundResult').textContent = 'CONGRATULATIONS, YOU WON!';
        document.getElementById('choices').textContent = "You are first to 5, press a button to reset score";
        int_playerPoints = 0;
        int_computerPoints = 0;
        document.getElementById('roundResult').classList.add('winning');
        const displayResult = document.querySelector('#roundResult');
        displayResult.addEventListener('transitionend', () => document.getElementById('roundResult').classList.remove('winning'));
    }
    else if (int_computerPoints == 5) {
        document.getElementById('roundResult').textContent = 'COMPUTER WINS!';
        document.getElementById('choices').textContent = "Computer is first to 5, press a button to reset score";
        int_playerPoints = 0;
        int_computerPoints = 0;
    }
}