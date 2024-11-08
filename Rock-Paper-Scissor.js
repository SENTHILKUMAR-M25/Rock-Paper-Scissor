const userScoreElem = document.getElementById('user-score');
const computerScoreElem = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
let userScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);

    if (winner === 'user') {
        userScore++;
        userScoreElem.textContent = `User: ${userScore}`;
        resultMessage.textContent = `You win! ${userChoice} beats ${computerChoice}`;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreElem.textContent = `Computer: ${computerScore}`;
        resultMessage.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
    } else {
        resultMessage.textContent = `It's a tie! You both chose ${userChoice}`;
    }

    checkWinner();
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function checkWinner() {
    if (userScore === 20 || computerScore === 20) {
        let winner = userScore === 20 ? 'User' : 'Computer';
        alert(`${winner} wins!`);
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreElem.textContent = `User: 0`;
    computerScoreElem.textContent = `Computer: 0`;
    resultMessage.textContent = 'Make your move!';
}

