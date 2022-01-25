let computerPoints = 0;
let userPoints = 0;
let counter = 0;

// Dynamic Game

const userScore = document.querySelector('.userScore_1')
const roundAndWinner = document.querySelector('.roundAndWinner-p')
const computerScore = document.querySelector('.computerScore_1')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const logsGame = document.querySelector('.info')

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
        counter = counter + 1
        game();
    });

    paper.addEventListener('click', () => {
        userSelection = "Paper"
        messageUser = "Your selection was Paper!"
        counter = counter + 1
        game();
    })

    scissors.addEventListener('click', () => {
        userSelection = "Scissors"
        messageUser = "Your selection was Scissors!"
        counter = counter + 1
        game();
    })
}

function playRound() {
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
    const logUser = document.querySelector('.userLog')
    logUser.classList.add('infoLogs')
    logUser.textContent = messageUser
    logsGame.appendChild(logUser);

    const logComputer = document.querySelector('.computerLog')
    logComputer.classList.add('infoLogs')
    logComputer.textContent = messageComputer
    logsGame.appendChild(logComputer);

    const logRound = document.querySelector('.roundLog')
    logRound.classList.add('infoLogs-1')
    logRound.textContent = messageRound
    logsGame.appendChild(logRound);
}

function reportScore() {
    userScore.textContent = `Your Score: ${userPoints} `
    computerScore.textContent = `Computer Score: ${computerPoints}`
}

function round() {
    roundAndWinner.textContent = `Round: ${counter} `
}

function winner() {
    if (computerPoints > userPoints) {
        roundAndWinner.textContent = "Computer is the winner!"
    } else if (computerPoints < userPoints) {
        roundAndWinner.textContent = "You are the winner"
    } else {
        roundAndWinner.textContent = "Is a tie! Try again"
    }
}

function soundEffect() {
    //Click on cards
    const audioEffect = document.querySelector("audio");
    rock.addEventListener('click', () => {
        audioEffect.setAttribute("src", "sounds/button-click.mp3")
        audioEffect.play();
    });
    paper.addEventListener('click', () => {
        audioEffect.setAttribute("src", "sounds/button-click.mp3")
        audioEffect.play();
    });
    scissors.addEventListener('click', () => {
        audioEffect.setAttribute("src", "sounds/button-click.mp3")
        audioEffect.play();
    });

}
//Winner sound
function winnerEffect() {
    const winnerEffect = document.createElement("audio")
    if (computerPoints < userPoints) {
        winnerEffect.setAttribute("src", "sounds/victory-sound.mp3")
    } else {
        winnerEffect.setAttribute("src", "sounds/lose-sound.mp3")
    }
    logsGame.appendChild(winnerEffect);
    winnerEffect.play();

}
function game() {
    if (counter < 5) {
        round();
    }
    if (counter <= 5) {
        computerPlay();
        playRound();
        logs();
        reportScore();
    }
    if (counter == 5) {
        winner();
        winnerEffect();
    }
}

playerSelection();
soundEffect();

