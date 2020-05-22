var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const water_div = document.getElementById("water");
const fire_div = document.getElementById("fire");
const leaf_div = document.getElementById("leaf");

function randomComputerChoice() {
  const choices = ["w", "f", "l"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getOriginalWord(letter) {
  switch (letter) {
    case "w":
      return "Water";
    case "f":
      return "Fire";
    case "l":
      return "Leaf";
  }
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML =
    getOriginalWord(user) + " beats " + getOriginalWord(comp) + ". You win!";
}

function lose(user, comp) {
  compScore++;
  compScore_span.innerHTML = compScore;

  result_p.innerHTML =
    getOriginalWord(user) +
    " loses to " +
    getOriginalWord(comp) +
    ". You lose!";
}

function draw(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML =
    getOriginalWord(user) +
    " draws to " +
    getOriginalWord(comp) +
    ". You draw!";
}

function game(userChoice) {
  const computerChoice = randomComputerChoice();
  switch (userChoice + computerChoice) {
    case "wf":
    case "fl":
    case "lw":
      win(userChoice, computerChoice);
      break;
    case "fw":
    case "lf":
    case "wl":
      lose(userChoice, computerChoice);
      break;
    case "ff":
    case "ww":
    case "ll":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  water_div.addEventListener("click", function () {
    game("w");
  });

  fire_div.addEventListener("click", function () {
    game("f");
  });

  leaf_div.addEventListener("click", function () {
    game("l");
  });
}

main();
