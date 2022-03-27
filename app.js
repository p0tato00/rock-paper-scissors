const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Check if player win or no
    if (playerSelection === computerSelection) {
        return "You Tied!";
    }
    else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
        ) {
        computerScore++;
        return `You Lose! ${capitalize(computerSelection)} beat ${capitalize(playerSelection)}`;
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
        playerScore++;
        return `You Win! ${capitalize(playerSelection)} beat ${capitalize(computerSelection)}`;
    }
    else {
        return `Your pick (${playerSelection}) is invalid!`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What do you choose? (Paper, Rock, Scissors)");
        let computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore === computerScore){
        return `Your score is = ${playerScore}, computer score is = ${computerScore}. You Tied!`;
    } else if (playerScore > computerScore){
        return `Your score is = ${playerScore}, computer score is = ${computerScore}. You Win!`;
    } else {
        return `Your score is = ${playerScore}, computer score is = ${computerScore}. You Lose!`;
    }
}

console.log(game());




