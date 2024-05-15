const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
    const choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * 3)]; 
}

function getHumanChoice(humanChoice) {
    const computerChoice = getComputerChoice();

    if(humanChoice === computerChoice) {
        document.getElementById("result").innerHTML = "DRAW!";
        document.getElementById("phrase").innerHTML = "Computer chosed same weapon, no one is hurt";
    } else if(
        (humanChoice === ROCK && computerChoice === SCISSORS) ||
        (humanChoice === PAPER && computerChoice === ROCK) ||
        (humanChoice === SCISSORS && computerChoice === PAPER)
    )  {
        document.getElementById("result").innerHTML = "You won";
        document.getElementById("phrase").innerHTML = `Computer chosed ${computerChoice}, you survived!`;
    } else {
            document.getElementById("result").innerHTML = "You lost";
            document.getElementById("phrase").innerHTML = `Computer chosed ${computerChoice}, you died!`;

    }
}