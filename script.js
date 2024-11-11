let resultComputer = ""

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3 + 1);
    console.log(computerNumber);

    if (computerNumber === 1) {
        resultComputer = "The computer chose Rock"
        return resultComputer
    } else if (computerNumber === 2) {
        resultComputer = "The computer chose Paper"
        return resultComputer
    } else {
        resultComputer = "The computer chose Scissor"
        return resultComputer
    }
}

getComputerChoice();
console.log(resultComputer)