let level = 0;
let index = 0;
let random;
const greenAudio = new Audio("./sounds/green.mp3");
const redAudio = new Audio("./sounds/red.mp3");
const yellowAudio = new Audio("./sounds/yellow.mp3");
const blueAudio = new Audio("./sounds/blue.mp3");
const board = {
  green: 1,
  red: 2,
  yellow: 3,
  blue: 4,
};
const reverseBoard = {
  1: "green",
  2: "red",
  3: "yellow",
  4: "blue",
};

let ans = "";
let user_ans = "";

document.addEventListener("keypress", function () {
  const randomNumber = createRandom();
  level++;
  document.querySelector("#level-title").textContent = "Level " + level;
  ans += String(randomNumber);
  press(randomNumber);
});

const events = document.querySelectorAll(".btn");
events.forEach((event) =>
  event.addEventListener("click", function () {
    user_ans += String(board[event.id]);
    console.log("board = ", board[event.id], "user_ans = ", user_ans);
    press(board[event.id]);
    const check = checkAns(ans, user_ans, index);
    if (!check) {
      index = 0;
      level = 0;
      user_ans = "";
      ans = "";
    }
    setTimeout(function () {
      const randi = createRandom();
      press(randi);
      ans += String(randi);
    }, 500);
    console.log("here it is");
    index++;
    console.log("these are answers", ans, user_ans, " index = ", index);
    // if (user_ans.length === ans.length) {
    //   level++;
    //   user_ans = "";
    // }
  })
);

function createRandom() {
  return Math.floor(Math.random() * 4) + 1;
}

function press(number) {
  document.querySelector(`.${reverseBoard[number]}`).classList.add("pressed");
  playSound(number);
  setTimeout(function () {
    document
      .querySelector(`.${reverseBoard[number]}`)
      .classList.remove("pressed");
  }, 100);
}

function checkAns(ans, user_ans) {
  if (ans[user_ans.length - 1] !== user_ans[user_ans.length - 1]) {
    document.querySelector("body").classList.add("game-over");
    document.querySelector("#level-title").textContent =
      "Game Over, Press Any Key to Restart";
    const gameOver = new Audio("./sounds/wrong.mp3");
    gameOver.play();

    setTimeout(function () {
      document.querySelector("body").classList.remove("game-over");
    }, 100);
    return false;
  }
  if (index === ans.length) {
    level++;
  }
  return true;
}

function playSound(number) {
  switch (number) {
    case 1:
      greenAudio.play();
      break;
    case 2:
      redAudio.play();
      break;
    case 3:
      yellowAudio.play();
      break;
    case 4:
      blueAudio.play();
      break;
  }
}
