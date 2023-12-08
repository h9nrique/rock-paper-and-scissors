const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const winnerMessage = document.querySelector("#winner-message");
const playerDisplayHand = document.querySelector(".hand-display-player");
const computerDisplayHand = document.querySelector(".hand-display-computer");
const scoreNumbers = document.querySelector("#score-numbers");
const overlay = document.querySelector("#overlay");
const trophyOverlay = document.querySelector("#trophy-overlay")
const winnerOverlay = document.querySelector("#winner-overlay");
const restartBtn = document.querySelector("#restart-button");
const playAgain = document.querySelector("#btn-overlay");


let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", function () {
  (playerSelection = "Rock"), (computerSelection = getComputerChoice());
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", function () {
  (playerSelection = "Paper"), (computerSelection = getComputerChoice());
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", function () {
  (playerSelection = "Scissors"), (computerSelection = getComputerChoice());
  playRound(playerSelection, computerSelection);
});

restartBtn.addEventListener("click", restartGame);
playAgain.addEventListener("click", restartGame);

function getComputerChoice() {
  let computerSelectionCalc = Math.floor(Math.random() * 3);
  if (computerSelectionCalc === 0) {
    return "Rock";
  } else if (computerSelectionCalc === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    roundWinner = "player";
    playerScore++;
  } else {
    roundWinner = "computer";
    computerScore++;
  }
  console.log(playerScore, computerScore);
  updateWinnerMessage(roundWinner, playerSelection, computerSelection);
  updateDisplay(playerSelection, computerSelection);
  updateScore();
  endGame();
}

function updateWinnerMessage(roundWinner, playerSelection, computerSelection) {
  if (roundWinner === "tie") {
    winnerMessage.textContent = `It's a tie! You both chose ${playerSelection}`;
  } else if (roundWinner === "player") {
    winnerMessage.textContent = `You win! ${playerSelection} wins against ${computerSelection}`;
  } else {
    winnerMessage.textContent = `You lost! ${playerSelection} is defeated by ${computerSelection}`;
  }
}

function updateDisplay(playerSelection, computerSelection) {
  if (playerSelection === "Rock") {
    playerDisplayHand.innerText = "✊";
  } else if (playerSelection === "Paper") {
    playerDisplayHand.innerText = "✋";
  } else if (playerSelection === "Scissors") {
    playerDisplayHand.innerText = "✌️";
  }
  if (computerSelection === "Rock") {
    computerDisplayHand.innerText = "✊";
  } else if (computerSelection === "Paper") {
    computerDisplayHand.innerText = "✋";
  } else if (computerSelection === "Scissors") {
    computerDisplayHand.innerText = "✌️";
  }
}

function updateScore() {
  scoreNumbers.innerText = `${playerScore} : ${computerScore}`;
}

function endGame() {
  if (playerScore >= 5) {
    trophyOverlay.innerText = "🏆"
    winnerOverlay.innerText = "You win this game!";
    overlay.style.display = "flex";
  } else if (computerScore >= 5) {
    trophyOverlay.innerText = "😕"
    winnerOverlay.innerText = "That's bad! You lost this game :(";
    overlay.style.display = "flex";
  }
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  playerDisplayHand.innerText = "❔";
  computerDisplayHand.innerText = "❔";
  overlay.style.display = "none";
}

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt("Choose Rock, Paper, or Scissors");
//     const computerSelection = getComputerChoice();
//     const result = playRound(playerSelection, computerSelection);
//     console.log(result);

//     if (result.includes("won")) {
//       playerScore++;
//     } else if (result.includes("lost")) {
//       computerScore++;
//     }
//   }

//   if (playerScore > computerScore) {
//     console.log(">>> You won the game! <<<");
//   } else if (computerScore > playerScore) {
//     console.log(">>> The computer won the game. <<<");
//   } else {
//     console.log(">>> It's a tie! <<<");
//   }
// }
