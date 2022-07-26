const pageLayout = function() {
    const content = document.getElementById('content');

    const playArea = document.createElement('div');
    playArea.setAttribute('id', 'playArea');
    content.appendChild(playArea);
        const buttonsDiv = document.createElement('div');
        buttonsDiv.setAttribute('id', 'buttonsDiv');
        playArea.appendChild(buttonsDiv);

            const rock = document.createElement('button');
            buttonsDiv.appendChild(rock);
            rock.innerHTML = 'ROCK';

            const paper = document.createElement('button');
            buttonsDiv.appendChild(paper);
            paper.innerHTML = 'PAPER';

            const scissor = document.createElement('button');
            buttonsDiv.appendChild(scissor);
            scissor.innerHTML = 'SCISSOR';

        const result = document.createElement('div');
        result.setAttribute('class', 'result');
        playArea.appendChild(result);

        const playerScore = document.createElement('div');
        playerScore.setAttribute('class', 'player-score');
        playArea.appendChild(playerScore);

        const computerScore = document.createElement('div');
        computerScore.setAttribute('class', 'computer-score');
        playArea.appendChild(computerScore);
}

pageLayout();