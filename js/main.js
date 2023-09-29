const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".choices button");
  const playerSelection = document.getElementById("player-selection");
  const computerSelection = document.getElementById("computer-selection");
  const resultText = document.getElementById("result-text");
  const playAgainButton = document.getElementById("play-again");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      const playerChoice = button.id;
      const computerChoice = getComputerChoice();

      playerSelection.textContent = playerChoice;
      computerSelection.textContent = computerChoice;

      const result = getWinner(playerChoice, computerChoice);
      resultText.textContent = result;
    });
  });

  playAgainButton.addEventListener("click", function() {
    playerSelection.textContent = "";
    computerSelection.textContent = "";
    resultText.textContent = "";
  });
});