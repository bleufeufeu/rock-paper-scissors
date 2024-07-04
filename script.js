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
    //choice = prompt("Rock Paper Scissors!:");
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
        computerScore++;
        return "You lose! Paper beats rock";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return "You win! Rock beats scissors";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "You win! Paper beats rock";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return "You lose! Rock beats scissors";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "You win! Scissors beats paper";
    } else if (humanChoice == computerChoice) {
        return "Draw!";
    }
}

let humanScore = 0;
let computerScore = 0;

let btns = document.querySelector("#buttons");
let results = document.querySelector("#results");

btns.addEventListener("click", (event) => {
    let target = event.target;
    const winner = document.createElement("div");

    if (humanScore === 5 || computerScore === 5) return;

    switch(target.id) {
        case 'rock':
            result = playRound("rock", getComputerChoice());
            break;
        case 'paper':
            result = playRound("paper", getComputerChoice());
            break;
        case 'scissors':
            result = playRound("scissors", getComputerChoice());
            break;
    }

    const newResult = document.createElement("div");
    newResult.textContent = result;
    results.appendChild(newResult);

    if (humanScore === 5) {
        winner.textContent = "Human wins! They reached 5 points first!";
        results.appendChild(winner);
    } else if (computerScore === 5) {
        winner.textContent = "Computer wins! It reached 5 points first!";
        results.appendChild(winner);
    }

});

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    result = playRound(humanChoice, computerChoice);
    if (result == "winner") {
        humanScore++;
    } else if (result == "loser") {
        computerScore++;
    }
    
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

//playGame();