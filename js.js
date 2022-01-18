let computerPoints = 0;
let userPoints = 0;
let start = 0;
/*
    console.log("Hello, this is a rock paper scissors game!")

    function computerPlay() {
        let randomNumber = Math.floor(Math.random() * 3) + 1
        if (randomNumber == 1) {
            objectCompu = "Rock"
            return "The computer selection was Rock";
        } else if (randomNumber == 2) {
            objectCompu = "Scissors"
            return "The computer selecion was Scissors";
        } else {
            objectCompu = "Paper"
            return "The computer selection was Paper";
        }

    }

    function playerSelection() {
        
        let selection = prompt("Write an option (Rock - Scissors - Paper)")
        lowSelection = selection.toLowerCase();
        newSelection = lowSelection.charAt(0).toUpperCase() + lowSelection.slice(1);

        return "Your selection was: " + newSelection;
    }

    function playRound(computerPlay, playerSelection) {

        if (objectCompu === newSelection) {
            return "Tie!";
        } else if (newSelection == "Scissors") {
            if (objectCompu == "Rock") {
                computerPoints = computerPoints + 1
                return "You lose!"
            } else {
                userPoints = userPoints + 1
                return "You won!"
            }
        } else if (newSelection == "Paper") {
            if (objectCompu == "Scissors") {
                computerPoints = computerPoints + 1
                return "You lose!"
            } else {
                userPoints = userPoints + 1
                return "You won!"
            }
        } else if (newSelection == "Rock") {
            if (objectCompu == "Paper") {
                computerPoints = computerPoints + 1
                return "You lose!"
            } else {
                userPoints = userPoints + 1
                return "You won!"
            }
        }
    }

    function game() {
        console.log("-------------")
        console.log(playerSelection());
        console.log(computerPlay());
        console.log(playRound());
        console.log("Your score: " + userPoints)
        console.log("Computer score: " + computerPoints)
    }

    function winner(){
        if (computerPoints > userPoints){
            return "Computer wins with " + computerPoints + " points!"
        } else if (computerPoints < userPoints) {
            return "You are the winner with " + userPoints + " points!"
        } else {
            return "Is a tie! Try again"
        }
    }
    console.log("-----------");
    console.log(winner());
*/

// Dynamic Game

const userScore = document.querySelector('.userScore')
const winnerSelect = document.querySelector('.winner')
const computerScore = document.querySelector('.computerScore')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const information = document.querySelector('.information')

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber == 1) {
        objectCompu = "Rock"
        messageComputer = "The computer selection was Rock!";

    } else if (randomNumber == 2) {
        objectCompu = "Scissors"
        messageComputer = "The computer selection was Scissors!";

    } else {
        objectCompu = "Paper"
        messageComputer = "The computer selection was Paper!";

    }
    console.log(messageComputer);
}

function playerSelection() {
    rock.addEventListener('click', () => {
        userSelection = "Rock"
        messageUser = "Your selection was Rock!"
        start = 1
        console.log(messageUser)
    });

    paper.addEventListener("click", () => {
        userSelection = "Paper"
        messageUser = "Your selection was Paper!"
        start = 1
        console.log(messageUser)
    })

    scissors.addEventListener('click', () => {
        userSelection = "Scissors"
        messageUser = "Your selection was Scissors!"
        start = 1
        console.log(messageUser)
    })
}

function playRound(computerPlay, playerSelection) {
    if (objectCompu === userSelection) {
        return "Tie!";
    } else if (userSelection == "Scissors") {
        if (objectCompu == "Rock") {
            computerPoints = computerPoints + 1
            return "You lose!"
        } else {
            userPoints = userPoints + 1
            return "You won!"
        }
    } else if (userSelection == "Paper") {
        if (objectCompu == "Scissors") {
            computerPoints = computerPoints + 1
            return "You lose!"
        } else {
            userPoints = userPoints + 1
            return "You won!"
        }
    } else if (userSelection == "Rock") {
        if (objectCompu == "Paper") {
            computerPoints = computerPoints + 1
            return "You lose!"
        } else {
            userPoints = userPoints + 1
            return "You won!"
        }
    }
}

function logs() {
    const logs = document.createElement('div')
    logs.classList.add('info')
    information.appendChild(logs)

    const logUser = document.createElement('p')
    logUser.classList.add('infoLogs')
    logUser.textContent = messageUser
    logs.appendChild(logUser);
    
    const logComputer = document.createElement('p')
    logComputer.classList.add('infoLogs')
    logComputer.textContent = messageComputer
    logs.appendChild(logComputer);
}

function game() {
    computerPlay();
    console.log(playRound());
    console.log("User score: " + userPoints)
    console.log("Computer score: " + computerPoints)
    logs();
}


playerSelection();

if (start == 1) {
    game();
}


/*
function game() {
    console.log("-------------")
    playerSelection();
    computerPlay();
    
        console.log(playRound());
        console.log("Your score: " + userPoints)
        console.log("Computer score: " + computerPoints)
    }
}
game();
*/