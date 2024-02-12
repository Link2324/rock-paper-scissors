"use strict";

// This function should return string in lowercase
function getComputerChoice() {
    selection = getRandomIntInclusive(1, 3);
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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `Tie! You both chose ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Won! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Won! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Won! Paper beats Rock";
    } else {
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()}`;
    }
}

console.log(playRound("RoCk", "paper"));
