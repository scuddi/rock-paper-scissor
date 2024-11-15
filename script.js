//Initializing the choice of the computer and the player.

let resultComputer = "";
let resultPerson = "";

//Initializing score of computer and player.

let scoreComputer = 0;
let scoreHuman = 0;

// Function to generate a random number that represents a random choice between Rock, Paper and Scissor

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3 + 1);
    console.log(computerNumber);

    if (computerNumber === 1) {
        resultComputer = "The computer chose Rock."
        return resultComputer
    } else if (computerNumber === 2) {
        resultComputer = "The computer chose Paper."
        return resultComputer
    } else {
        resultComputer = "The computer chose Scissor."
        return resultComputer
    }
}

// Function that asks the user for an input.

function getHumanChoice() {
    resultPerson = prompt("Are you playing Rock, Paper or Scissor?");
    resultPerson = resultPerson.toLowerCase();

    if (resultPerson === "rock") {
        return console.log("You chose Rock.")
    } else if (resultPerson === "paper") {
        return console.log("You chose Paper.")
    } else if (resultPerson === "scissor") {
        return console.log("You chose Scissor.")
    } else {
        return console.log(resultPerson + " is not a possible choice. Choose Rock, Paper or Scissor please.")
    }
}

getComputerChoice();
getHumanChoice();
console.log(resultComputer);