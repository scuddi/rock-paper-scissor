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
        resultComputer = "scissor";
        console.log(`The computer chose ${resultComputer}`)
        return resultComputer
    }
}

// Function that asks the user for an input.

function getHumanChoice() {
    resultPerson = prompt("Are you playing Rock, Paper or Scissor?");
    resultPerson = resultPerson.toLowerCase();

    if (resultPerson === "rock") {
        console.log(`You chose ${resultPerson}`)
        return resultPerson
    } else if (resultPerson === "paper") {
        console.log(`You chose ${resultPerson}`)
        return resultPerson
    } else if (resultPerson === "scissor") {
        console.log(`You chose ${resultPerson}`)
        return resultPerson
    } else {
        return console.log(`${resultPerson} is not a possible choice. Choose Rock, Paper or Scissor please.`)
    }
}

// Function to play one round.

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissor") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            scoreHuman = scoreHuman + 1;
            return scoreHuman
        } else if (computerChoice === "paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            scoreComputer = scoreComputer + 1;
            return scoreComputer
        }
        else {
            return console.log(`It is a draw. Both chose ${humanChoice}.`)
        }
    } else if (humanChoice === "scissor") {
        if (computerChoice === "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            scoreHuman = scoreHuman + 1;
            return scoreHuman
        } else if (computerChoice === "rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            scoreComputer = scoreComputer + 1;
            return scoreComputer
        }
        else {
            return console.log(`It is a draw. Both chose ${humanChoice}.`)
        }
    } else {
        if (computerChoice === "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            scoreHuman = scoreHuman + 1;
            return scoreHuman
        } else if (computerChoice === "scissor") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            scoreComputer = scoreComputer + 1;
            return scoreComputer
        }
        else {
            return console.log(`It is a draw. Both chose ${humanChoice}.`)
        };
    };
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`Score of human: ${scoreHuman}; Score of computer: ${scoreComputer}`)