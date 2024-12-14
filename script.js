//Initializing the choice of the computer and the player.

let resultComputer = "";
let resultPerson = "";

//Initializing score of computer and player.

let scoreComputer = 0;
let scoreHuman = 0;

// Function to generate a random number that represents a random choice between Rock, Paper and Scissor

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3 + 1);

    if (computerNumber === 1) {
        resultComputer = "rock"
        console.log(`The computer chose ${resultComputer}`);
        return resultComputer;
    } else if (computerNumber === 2) {
        resultComputer = "paper";
        console.log(`The computer chose ${resultComputer}`);
        return resultComputer
    } else {
        resultComputer = "scissors";
        console.log(`The computer chose ${resultComputer}`)
        return resultComputer
    };
};

// Query things to change while playing

const winner = document.querySelector(".winner");
const showScoreComputer = document.querySelector(".showScoreComputer");
const showScoreHuman = document.querySelector(".showScoreHuman");

// Function that asks the user for an input.

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    console.log(`You chose ${humanChoice}.`)

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
            winner.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
            scoreHuman = scoreHuman + 1;
            showScoreHuman.textContent = scoreHuman;
            return scoreHuman
        } else if (computerChoice === "paper") {
            console.log(`You lose, ${computerChoice} beat ${humanChoice}!`);
            winner.textContent = (`You lose, ${computerChoice} beats ${humanChoice}!`);
            scoreComputer = scoreComputer + 1;
            showScoreComputer.textContent = scoreComputer;
            return scoreComputer
        } else {
            winner.textContent = `It is a draw. Both chose ${humanChoice}.`;
            return console.log(`It is a draw. Both chose ${humanChoice}.`);
        };
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
            winner.textContent = `You win, ${humanChoice} beat ${computerChoice}!`;
            scoreHuman = scoreHuman + 1;
            showScoreHuman.textContent = scoreHuman;
            return scoreHuman
        } else if (computerChoice === "rock") {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
            winner.textContent = `You lose, ${computerChoice} beats ${humanChoice}!`;
            scoreComputer = scoreComputer + 1;
            showScoreComputer.textContent = scoreComputer;
            return scoreComputer
        } else {
            winner.textContent = `It is a draw. Both chose ${humanChoice}.`;
            return console.log(`It is a draw. Both chose ${humanChoice}.`);
        }
    } else {
        if (computerChoice === "rock") {
            console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
            winner.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
            scoreHuman = scoreHuman + 1;
            showScoreHuman.textContent = scoreHuman;
            return scoreHuman
        } else if (computerChoice === "scissors") {
            console.log(`You lose, ${computerChoice} beat ${humanChoice}!`);
            winner.textContent = `You lose, ${computerChoice} beats ${humanChoice}!`;
            scoreComputer = scoreComputer + 1;
            showScoreComputer.textContent = scoreComputer;
            return scoreComputer
        } else {
            winner.textContent = `It is a draw. Both chose ${humanChoice}.`;
            return console.log(`It is a draw. Both chose ${humanChoice}.`);
        };
    };
};

//End game function

function playGame(humanChoice) {
    if (scoreComputer === 4 || scoreHuman === 4) {
        endGame(scoreComputer);
    } else {
        playRound(humanChoice);
    };
};

function endGame() {
    if (scoreComputer === 4) {
        scoreComputer = scoreComputer + 1;
        winner.textContent = "The computer won the game :( If you want to play again, please refresh the site.";
        showScoreComputer.textContent = scoreComputer;
    } else {
        scoreHuman = scoreHuman + 1
        winner.textContent = "You won! :) If you want to play again, please refresh the site";
        showScoreHuman.textContent = scoreHuman;
    };
};