const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const img1 = "./images/dice" + randomNumber1 + ".png";
const img2 = "./images/dice" + randomNumber2 + ".png";
console.log(img1, img2);
document.querySelector(".img1").setAttribute("src", img1);
document.querySelector(".img2").setAttribute("src", img2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins";
} else {
  document.querySelector("h1").textContent = "Draw";
}
