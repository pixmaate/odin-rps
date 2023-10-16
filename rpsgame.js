const playerBtns = document.querySelector('.playerButtons');
const playerBtnArray = document.querySelectorAll('.playerBtn');
const computerBtnArray = document.querySelectorAll('.computerBtn');
const scoreText = document.querySelector('#scoreTracker');
const resetScore = document.querySelector('#resetBtn');


const winnerText = document.createElement('p');
const gameLengthWins = 5;

let playerWinCount = 0;
let computerWinCount = 0;

scoreText.textContent = `Current Score: Player ${playerWinCount} VS Computer ${computerWinCount}`;


resetBtn.addEventListener('click', () => {
    playerWinCount = 0;
    computerWinCount = 0;
    scoreText.textContent = `Current Score: Player ${playerWinCount} VS Computer ${computerWinCount}`;

    playerBtnArray.forEach(el => {
        el.style.backgroundColor = 'white';
    });
    
    computerBtnArray.forEach(el => {
        el.style.backgroundColor = 'white';
    });
});


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
    if (!isButton) {
        return;
    }
    if (playerWinCount === gameLengthWins || computerWinCount === gameLengthWins) {
        return;
    }
    else {
        rpsGameRound(getComputerChoice(),getPlayerChoice(btnValue))
    };
    if (playerWinCount === gameLengthWins || computerWinCount === gameLengthWins) {
        scoreText.textContent = `The final score: Player ${playerWinCount} VS Computer ${computerWinCount}`;
        if (playerWinCount > computerWinCount) {
            winnerText.textContent = 'You WON!';
        }
        else {
            winnerText.textContent = 'You LOST!';
        }
        scoreText.appendChild(winnerText);
    };
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
      
    }
    else if (computerChoice === 1) {
        computerChoice = "Paper";
      
    }
    else {
        computerChoice = "Scissors"
        
    }
    return computerChoice.toUpperCase();
}

function getPlayerChoice(plyrChoice) {
    let playerChoice = plyrChoice;
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

function greyButtonsOnTie(computerPick, playerPick) {
    computerBtnArray.forEach(el => {
        if (el.textContent.toUpperCase() === computerPick) {
            el.style.backgroundColor = 'Gray';
        };
    });
    playerBtnArray.forEach(el => {
        if (el.textContent.toUpperCase() === playerPick) {
            el.style.backgroundColor = 'Gray';
        };
    });
}

function greenButtononWin(computerPick, playerPick) {
    computerBtnArray.forEach(el => {
        if (el.textContent.toUpperCase() === computerPick) {
            el.style.backgroundColor = 'Red';
        };
    });
    playerBtnArray.forEach(el => {
        if (el.textContent.toUpperCase() === playerPick) {
            el.style.backgroundColor = 'Green';
        };
    });
}

function redButtononLose(computerPick, playerPick) {
    computerBtnArray.forEach(el => {
        if (el.textContent.toUpperCase() === computerPick) {
            el.style.backgroundColor = 'Green';
        };
    });
    playerBtnArray.forEach(el => {
        if (el.textContent.toUpperCase() === playerPick) {
            el.style.backgroundColor = 'Red';
        };
    });
}

function rpsGameRound(computerPick, playerPick) {
    let winner = null;
    if (computerPick == playerPick) {
        greyButtonsOnTie(computerPick, playerPick)
        return winner;
    }
    else if (computerPick === 'ROCK' && playerPick == 'SCISSORS') {
        winner = "Computer";
        redButtononLose(computerPick, playerPick)
        game(winner);
        return winner;
    }
    else if (computerPick === 'PAPER' && playerPick == 'ROCK') {
        winner = "Computer";
        redButtononLose(computerPick, playerPick)
        game(winner);
        return winner;
    }
    else if (computerPick === 'SCISSORS' && playerPick === 'PAPER') {
        winner = "Computer";
        redButtononLose(computerPick, playerPick)
        game(winner);
        return winner;
    }
    else {
        winner = "Player";
        greenButtononWin(computerPick, playerPick)
        game(winner);
        return winner;
    }
}

function game(winner) {
    if (winner === 'Player') {
        playerWinCount += 1;
        scoreText.textContent = `Current Score: Player ${playerWinCount} VS Computer ${computerWinCount}`;
    }
    else if (winner === 'Computer') {
        computerWinCount +=1;
        scoreText.textContent = `Current Score: Player ${playerWinCount} VS Computer ${computerWinCount}`;
    };
        

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




