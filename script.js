let resultComputer = "";
let resultPerson = "";

let scoreComputer = 0;
let scoreHuman = 0;

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