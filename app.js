let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreId = document.querySelector("#userScore");
let compScoreId = document.querySelector("#compScore");
let changeThemeButton = document.querySelector("#changeTheme");
let currMode = "white";
changeThemeButton.addEventListener("click", () => {
  if (currMode === "white") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "white";
    document.querySelector("body").style.backgroundColor = "white";
  }
});
const genCompChoice = () => {
  const availableChoices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return availableChoices[index];
};
gameDraw = () => {
  console.log("Game is Draw");
  msg.innerText = "Its a Draw Well Played Both Sides";
  msg.style.backgroundColor = "#00FFFF";
};
showWinner = (userWon, userChoice, compChoice) => {
  if (userWon) {
    userScore++;
    userScoreId.innerText = userScore;
    msg.innerText = `You Win as Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreId.innerText = compScore;
    msg.innerText = `Computer Wins as his ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    console.log(userScore, compScore);
  }
};
const playGame = (userChoice) => {
  console.log("userChoice:", userChoice);
  const compChoice = genCompChoice();
  console.log("compChoice:", compChoice);
  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWon = true;
    if (userChoice === "rock" && compChoice === "paper") {
      userWon = false;
    } else if (userChoice === "rock" && compChoice === "scissors") {
      userWon = true;
    }
    if (userChoice === "paper" && compChoice === "rock") {
      userWon = true;
    } else if (userChoice === "paper" && compChoice === "scissors") {
      userWon = false;
    }
    if (userChoice === "scissors" && compChoice === "rock") {
      userWon = false;
    } else if (userChoice === "scissors" && compChoice === "paper") {
      userWon = true;
    }
    showWinner(userWon, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
