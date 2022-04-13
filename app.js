const userScore = document.querySelector('.playerScore');
const enemyScore = document.querySelector('.enemyScore');
const result = document.querySelector('.result');
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
updateScore();

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    // Check if player win or no
    if (playerSelection === computerSelection) {
        result.textContent = "You Tied!";
    }
    else if (
        (playerSelection === choices[0] && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
        ) {
        computerScore++;
        result.textContent = `You Lose! ${capitalize(computerSelection)} beat ${capitalize(playerSelection)}`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
        playerScore++;
        result.textContent = `You Win! ${capitalize(playerSelection)} beat ${capitalize(computerSelection)}`;
    }

    checkWinner();
    updateScore();
}

function updateScore() {
    userScore.textContent = `Your Score : ${playerScore}`
    enemyScore.textContent = `Enemy's Score : ${computerScore}`
}

// Button selection for player
const Buttons = document.querySelectorAll('button');
Buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(playRound(button.value, computerPlay()))
    })
})

// Declaring Winner
function checkWinner() {
    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        result.textContent = 'You Win!';
    } else if (computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        result.textContent = 'You Lose!'
    }
}







