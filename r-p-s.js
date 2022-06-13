function computerPlay() {
    let num = getRandomNum(0, 2);
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else return "scissor";
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock": 
                return "It's a draw!";
            case "paper": 
                return "You lose, paper beats rock!";
            case "scissor": 
                return "You win, rock beats scissor!";
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "paper": 
                return "It's a draw!";
            case "scissor": 
                return "You lose, scissor beats paper!";
            case "rock": 
                return "You win, paper beats rock!";
        }
    } else if (playerSelection == "scissor") {
        switch (computerSelection) {
            case "scissor": 
                return "It's a draw!";
            case "paper": 
                return "You win, scissor beats paper!";
            case "rock": 
                return "You lose, rock beats scissor!";
        }
    } else return "Please enter a valid play.";
}

const playerSelection = "rock".toLowerCase();
const computerSelection = computerPlay().toLowerCase();

console.log(playRound(playerSelection, computerSelection));