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
    return computerChoice;
}

console.log(getComputerChoice())