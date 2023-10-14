function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice = getRandomNumber(3);
    if (computerChoice === 0) {
        computerChoice = "Rock";
    }
    else if (computerChoice === 1) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors"
    }
    return computerChoice.toUpperCase();
}

function getPlayerChoice() {
    let playerChoice = prompt("Please enter your choice: ");
    playerChoice = playerChoice.toUpperCase();
    if (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
        alert("You choose an invalid object! Type: Rock, Paper, or Scissors");
        playerChoice = getPlayerChoice();
        return playerChoice;
    }
    else {
        return playerChoice;
    }
}

function rpsGameRound(computerPick, playerPick) {
    let winner = null;
    alert(`The computer's pick is ${computerPick}`)
    if (computerPick == playerPick) {
        return winner;
    }
    else if (computerPick === 'ROCK' && playerPick == 'SCISSORS') {
        winner = "Computer";
        return winner;
    }
    else if (computerPick === 'PAPER' && playerPick == 'ROCK') {
        winner = "Computer";
        return winner;
    }
    else if (computerPick === 'SCISSORS' && playerPick === 'PAPER') {
        winner = "Computer";
        return winner;
    }
    else {
        winner = "Player";
        return winner;
    }
}

console.log(rpsGameRound(getComputerChoice(), getPlayerChoice()))