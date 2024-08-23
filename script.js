let playerName = '';
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function startGame() {
    playerName = document.getElementById('playerName').value;
    if (playerName.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    document.getElementById('greeting').textContent = `Hello, ${playerName}!`;
    document.getElementById('popup').style.display = 'none';
}

    document.getElementById('playerName').addEventListener('keydown',function(event){
        if(event.key === 'Enter'){
            startGame();
        }
    });

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const playerMoveElement = document.getElementById('playerMove');
    const computerMoveElement = document.getElementById('computerMove');
    let resultMessage = '';

    // Display choices
    playerMoveElement.textContent = userChoice;
    computerMoveElement.textContent = computerChoice;


    // Determine the result
    if (userChoice === computerChoice) {
        resultMessage = `It's a tie! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = `You win! ${userChoice} beats ${computerChoice}.`;
        playerScore++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${userChoice}.`;
        computerScore++;
    }

    document.getElementById('resultMessage').textContent = resultMessage;
    updateScores();

    // Check if 5 rounds are completed
    rounds++;
    if (rounds === 5) {
        showFinalResult();
    }
}

function updateScores(){
    document.getElementById('playerScore').textContent = `${playerName}:${playerScore}`;
    document.getElementById('computerScore').textContent = `Computer:${computerScore}`;
}

function showFinalResult(){
    let finalResult = '';
    if (playerScore > computerScore) {
        finalResult = `Congratulations ${playerName}, You won! by ${playerScore - computerScore}`
    }
    else if(playerScore < computerScore){
        finalResult = `Try again, ${playerName}, You lose by ${computerScore - playerScore}`;
    }
    else{
        finalResult = ` It's a tie, You both score same`;
    }
    document.getElementById('finalResult').textContent = finalResult;
    document.getElementById('resultBoard').style.display = 'flex';
}


function resetGame(){
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    document.getElementById('resultBoard').style.display = 'none';
    document.getElementById('playerMove').textContent = '';
    document.getElementById('computerMove').textContent = '';
    document.getElementById('resultMessage').textContent = '';
    updateScores();

}


function refreshPage(){
    location.reload();
}