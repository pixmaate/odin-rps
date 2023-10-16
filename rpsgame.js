const playerBtns = document.querySelector('.playerButtons');
const playerBtnArray = document.querySelectorAll('.playerBtn');
const computerBtnArray = document.querySelectorAll('.computerBtn');

const gameLengthWins = 5;

let playerWinCount = 0;
let computerWinCount = 0;



playerBtnArray.forEach(el => {
    el.style.backgroundColor = 'white';
});

computerBtnArray.forEach(el => {
    el.style.backgroundColor = 'white';
});


playerBtns.addEventListener('click', (event) => {
    playerBtnArray.forEach(el => {
        el.style.backgroundColor = 'white';
    });
    const isButton = event.target.nodeName === 'BUTTON';
    const btnValue = event.target.textContent
    event.target.style.backgroundColor = 'green';
    if (!isButton) {
        return;
    }
    rpsGameRound(getComputerChoice(),getPlayerChoice(btnValue))
});

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice = getRandomNumber(3);
    computerBtnArray.forEach(el => {
        el.style.backgroundColor = 'white';
    });
    if (computerChoice === 0) {
        computerChoice = "Rock";
        computerBtnArray.forEach(el => {
            if (el.textContent === "Rock") {
                el.style.backgroundColor = 'Gray';
            };
        });
    }
    else if (computerChoice === 1) {
        computerChoice = "Paper";
        computerBtnArray.forEach(el => {
            if (el.textContent === "Paper") {
                el.style.backgroundColor = 'Gray';
            };
        });
    }
    else {
        computerChoice = "Scissors"
        computerBtnArray.forEach(el => {
            if (el.textContent === "Scissors") {
                el.style.backgroundColor = 'Gray';
            };
        });
    }
    return computerChoice.toUpperCase();
}

function getPlayerChoice(plyrChoice) {
    let playerChoice = plyrChoice;
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

function rpsGameRound(computerPick, playerPick) {
    let winner = null;
    if (computerPick == playerPick) {
        
        return winner;
    }
    else if (computerPick === 'ROCK' && playerPick == 'SCISSORS') {
        winner = "Computer";
        game(winner);
        return winner;
    }
    else if (computerPick === 'PAPER' && playerPick == 'ROCK') {
        winner = "Computer";
        game(winner);
        return winner;
    }
    else if (computerPick === 'SCISSORS' && playerPick === 'PAPER') {
        winner = "Computer";
        game(winner);
        return winner;
    }
    else {
        winner = "Player";
        game(winner);
        return winner;
    }
}

function game(winner) {
    if (winner === 'Player') {
        playerWinCount += 1;
    }
    else if (winner === 'Computer') {
        computerWinCount +=1;
    };
    alert(`Current Score: Player ${playerWinCount} Computer ${computerWinCount}`)

    /*if (1=0) {
      let winner = rpsGameRound(getComputerChoice(), getPlayerChoice());
       if (winner === 'Player') {
        playerScore += 1;
        alert('You won this round!');
       }
       else if (winner === 'Computer') {
        computerScore += 1;
        alert('You lost this round!');
       }
       else {
        alert('It\'s a tie!');
       }
    }*/

}




