let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = '';

    // Logic to determine the winner
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "You lose!";
        computerScore++;
    }

    // Update the DOM
    document.getElementById('results').textContent = `You chose ${playerSelection}, computer chose ${computerSelection}. ${result}`;
    document.getElementById('score').textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

    // Check for a winner
    if (playerScore === 5) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry! The computer won the game!");
        resetGame();
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('results').textContent = '';
    document.getElementById('score').textContent = '';
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
