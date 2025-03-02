const choice = ["Stone", "Paper", "Scissor"];
const play = document.getElementById("play");
const image = document.querySelectorAll(".image");
let userScore = 0;
let computerScore = 0;
const uScore = document.getElementById('uScore');
const comScore = document.getElementById('comScore');
image.forEach((img) => {
  img.addEventListener("click", () => {
    const userChoice = img.getAttribute("id");
    playGame(userChoice);
  });
});

function playGame(userChoice) {
  // Randomly choose the computer's choice
  const computerChoice = choice[Math.floor(Math.random() * 3)];

  if (userChoice === computerChoice) {
    play.innerText = "The game was a draw!";
    play.style.backgroundColor = 'goldenrod';
    play.style.color= 'Green';

  } else if (
    (userChoice === "Stone" && computerChoice === "Scissor") ||
    (userChoice === "Paper" && computerChoice === "Stone") ||
    (userChoice === "Scissor" && computerChoice === "Paper")
  ) {
    play.innerText = `You win! ${userChoice} beats ${computerChoice}`;
    userScore += 1;
    if(userScore < 10){
       uScore.innerText = "0"+userScore;
    }else{
      uScore.innerText = userScore;
    }
    play.style.backgroundColor = 'Green';
    play.style.color = 'goldenrod';


   } else {
      play.innerText = `You lose! ${computerChoice} beats ${userChoice}`;
      computerScore += 1;
      if (computerScore<10) {
         comScore.innerText = "0"+computerScore;
      }else{
         comScore.innerText = computerScore;
      }
      play.style.backgroundColor = 'Red';
      play.style.color = 'White';

  }
}
