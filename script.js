function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else if (num == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Rock Paper Scissors!:");
    if (choice.toUpperCase() == "ROCK") {
        return "rock";
    } else if (choice.toUpperCase() == "PAPER") {
        return "paper";
    } else if (choice.toUpperCase() == "SCISSORS") {
        return "scissors";
    } else {
        return console.log("Invalid choice!");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock");
        return "loser";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors");
        return "winner";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper");
        return "loser";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock");
        return "winner";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors");
        return "loser";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper");
        return "winner";
    } else if (humanChoice == computerChoice) {
        console.log("Draw!");
        return "draw";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        result = playRound(humanChoice, computerChoice);
        if (result == "winner") {
            humanScore++;
        } else if (result == "loser") {
            computerScore++;
        }
    }
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

playGame();