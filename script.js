function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();


  if (playerSelection === computerSelection) {
    return `It's a tie. You and the computer chose ${playerSelection}`;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return `You lost! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `You won! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `You won! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return `You lost! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return `You lost! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `You won! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  } else {
    return `Chose Rock, Paper or Scissors!`;
  }
}

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

function game() {
    let playerScore = 0;
    let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper, or Scissors");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection)
    console.log(result);

    if (result.includes("won")) {
        playerScore++
    } else if (result.includes("lost")) {
        computerScore++
    }
  }

  if (playerScore > computerScore) {
    console.log(">>> You won the game! <<<");
  } else if (computerScore > playerScore) {
    console.log(">>> The computer won the game. <<<")
  } else {
    console.log(">>> It's a tie! <<<")
  }
}

// game()
