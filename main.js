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
