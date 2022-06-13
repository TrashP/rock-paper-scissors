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

console.log(computerPlay());