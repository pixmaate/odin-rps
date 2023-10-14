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

function rpsGameRound() {
    
}

console.log(getComputerChoice())
console.log(getPlayerChoice())