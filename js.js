let computerPoints = 0;
let userPoints = 0;

// Dynamic Game

const userScore = document.querySelector('.userScore_1')
const winnerSelect = document.querySelector('.winner_1')
const computerScore = document.querySelector('.computerScore_1')
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
}

function playerSelection() {
    rock.addEventListener('click', () => {
        userSelection = "Rock"
        messageUser = "Your selection was Rock!"
        game();
    });

    paper.addEventListener("click", () => {
        userSelection = "Paper"
        messageUser = "Your selection was Paper!"
       game();
    })

    scissors.addEventListener('click', () => {
        userSelection = "Scissors"
        messageUser = "Your selection was Scissors!"
        game();
    })

}

function playRound(computerPlay, playerSelection) {
    if (objectCompu === userSelection) {
        messageRound = "Tie!";
    } else if (userSelection == "Scissors") {
        if (objectCompu == "Rock") {
            computerPoints = computerPoints + 1
            messageRound = "You lose!"
        } else {
            userPoints = userPoints + 1
            messageRound = "You won!"
        }
    } else if (userSelection == "Paper") {
        if (objectCompu == "Scissors") {
            computerPoints = computerPoints + 1
            messageRound = "You lose!"
        } else {
            userPoints = userPoints + 1
            messageRound = "You won!"
        }
    } else if (userSelection == "Rock") {
        if (objectCompu == "Paper") {
            computerPoints = computerPoints + 1
            messageRound = "You lose!"
        } else {
            userPoints = userPoints + 1
            messageRound = "You won!"
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

    const logRound = document.createElement('p')
    logRound.classList.add('infoLogs-1')
    logRound.textContent = messageRound
    logs.appendChild(logRound);
}

function reportScore() {
    userScore.textContent = `Your Score: ${userPoints} `
    computerScore.textContent = `Computer Score: ${computerPoints}`
}

function winner(){
    if (computerPoints > userPoints){
        winnerSelect.textContent = "Computer is the winner!"
    } else if (computerPoints < userPoints) {
        winnerSelect.textContent = "You are the winner"
    } else {
        winnerSelect.textContent = "Is a tie! Try again"
    }
}

function game() {
    computerPlay();
    playRound();
    logs();
    reportScore();
    if(computerPoints == 5 || userPoints == 5){
        winner();
    }
}

playerSelection();

