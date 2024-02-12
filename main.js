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

function captalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function playGame() {
    let scorePlayer = 0;
    let scoreCPU = 0;
    let playerSelection;
    let computerSelection;
    // To store who won the round
    let roundStatus;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose one from: [rock, paper, scissors]:");
        computerSelection = getComputerChoice();

        roundStatus = playRound(playerSelection, computerSelection);

        if (roundStatus == 0) {
            console.log("Tie! You both chose " + captalizeFirstLetter(playerSelection));
        } else if (roundStatus == 1) {
            console.log(`You Won! ${captalizeFirstLetter(playerSelection)} beats ${captalizeFirstLetter(computerSelection)}`)
            scorePlayer++;
        } else {
            console.log(`You Lose! ${captalizeFirstLetter(computerSelection)} beats ${captalizeFirstLetter(playerSelection)}`)
            scoreCPU++;
        }
    }

    console.log(`You won ${scorePlayer} out of 5 rounds`);
    console.log(`${5 - scoreCPU - scorePlayer} ended up in tie`);
    console.log(`CPU won ${scoreCPU} out of 5 rounds`);
}

playGame();