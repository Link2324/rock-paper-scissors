"use strict";

// This function should return string in lowercase
function getComputerChoice() {
    let selection = getRandomIntInclusive(1, 3);
    /*
     * 1 = rock
     * 2 = paper
     * 3 = scissors
     */
    if (selection === 1) {
        return "rock";
    } else if (selection === 2) {
        return "paper";
    } else if (selection === 3) {
        return "scissors";
    }
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    // The maximum is inclusive and the minimum is inclusive
}

// returns 1 if player won, 0 for tie and -1 for lose
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1;
    } else {
        return -1;
    }
}

function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

const buttonContainer = document.querySelector("#game_input");

buttonContainer.addEventListener("click", (e) => {

    const target = e.target;
    let playerSelection = null;

    switch (target.id) {
        case 'rock':
            playerSelection = 'rock';
            break;

        case 'paper':
            playerSelection = 'paper';
            break;

        case 'scissors':
            playerSelection = 'scissors'
            break;
    }

    if (scorePlayer === 5 || scoreCPU === 5) {
        resetGame()
    }

    if (playerSelection) {
        playGame(playerSelection, getComputerChoice());
    }
});

let scorePlayer = 0;
let scoreCPU = 0;

const result = document.querySelector('#result');

// labels for game status
const winner = document.createElement('p');

const paraPlayer = document.createElement('p');
paraPlayer.textContent = 'Player Score: ' + scorePlayer; 

const paraCPU = document.createElement('p');
paraCPU.textContent = 'CPU Score: ' + scoreCPU;

const paraPrevStatus = document.createElement('p');
const label = 'Previous Round Status: '
paraPrevStatus.textContent = label + 'No Previous Round';

result.appendChild(paraPlayer);
result.appendChild(paraCPU);
result.appendChild(paraPrevStatus);
result.appendChild(winner);

function playGame(playerSelection, computerSelection) {
    // To store who won the round
    let roundStatus = playRound(playerSelection, computerSelection);

    if (roundStatus == 0) {
        paraPrevStatus.textContent = label + "Tie! You both chose " + capitalizeFirstLetter(playerSelection);
    } else if (roundStatus == 1) {
        paraPrevStatus.textContent = label + `You Won! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
        scorePlayer++;
    } else {
        paraPrevStatus.textContent = label + `You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}`;
        scoreCPU++;
    }

    paraPlayer.textContent = 'Player Score: ' + scorePlayer;
    paraCPU.textContent = 'CPU Score: ' + scoreCPU;

    if (scoreCPU === 5) {        
        winner.textContent = "Game Over! CPU won 5 rounds";
    } else if (scorePlayer === 5) {
        winner.textContent = "Congratulations! You won 5 rounds";
    }
}

function resetGame() {
    scorePlayer = 0;
    scoreCPU = 0;
    winner.textContent = '';
}
