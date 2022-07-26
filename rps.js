function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
    let num = getRandomNum(0, 2);
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else return "scissor";
}

const gameLogic = (() => {
    let playerPoints = 0;
    let computerPoints = 0;

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock") {
            switch (computerSelection) {
                case "rock": 
                    return "It's a draw!";
                case "paper": 
                    computerPoints += 1;
                    return "You lose, paper beats rock!";
                case "scissor": 
                    playerPoints += 1;
                    return "You win, rock beats scissor!";
            }
        } else if (playerSelection == "paper") {
            switch (computerSelection) {
                case "paper": 
                    return "It's a draw!";
                case "scissor": 
                    computerPoints += 1;
                    return "You lose, scissor beats paper!";
                case "rock": 
                    playerPoints += 1;
                    return "You win, paper beats rock!";
            }
        } else if (playerSelection == "scissor") {
            switch (computerSelection) {
                case "scissor": 
                    return "It's a draw!";
                case "paper": 
                    playerPoints += 1;
                    return "You win, scissor beats paper!";
                case "rock": 
                    computerPoints += 1;
                    return "You lose, rock beats scissor!";
            }
        }
    }

    function game() {
        const result = document.querySelector('.result');
        const playerScore = document.querySelector('.player-score');
        const computerScore = document.querySelector('.computer-score');
        playerScore.textContent = "Player score: " + playerPoints;
        computerScore.textContent = "Computer score: " + computerPoints;
    
        if (playerPoints == 5) {
            result.textContent += " You got 5 points, you won the game!";
            playerPoints = 0;
            computerPoints = 0;
        } else if (computerPoints == 5) {
            result.textContent += " The computer got 5 points, you lost the game!";
            playerPoints = 0;
            computerPoints = 0;
        }
    }

    return { playRound, game, };
})();

const buttonEvents = function() {
    const buttons = document.querySelectorAll('button');
    const result = document.querySelector('.result');

    buttons[0].addEventListener('click', () => {
        result.textContent = gameLogic.playRound("rock", computerPlay());
        gameLogic.game();
    })

    buttons[1].addEventListener('click', () => {
        result.textContent = gameLogic.playRound("paper", computerPlay());
        gameLogic.game();
    })

    buttons[2].addEventListener('click', () => {
        result.textContent = gameLogic.playRound("scissor", computerPlay());
        gameLogic.game();
    })
}

buttonEvents();
