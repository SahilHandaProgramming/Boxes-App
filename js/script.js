"use strict";

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const startGame = document.querySelector(".startGame");
let image = document.querySelector(".change-img");
const score1 = document.querySelector(".score-0");
const score2 = document.querySelector(".score-1");
const resetBtn = document.querySelector(".resetBtn");
let instructionBox = document.querySelector(".instructions");
let closeInstruction = document.querySelector(".instructionClose")
player1.classList.add("active");

let activePlayer = 0;
let score = 0;
startGame.addEventListener("click", () => {
  let randomImg = Math.trunc(Math.random() * 5) + 1;
  image.src = `./images/angle-${randomImg}.png`;

  if (randomImg == 5) {
    activePlayer = activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
    player1.classList.toggle("active");
    player2.classList.toggle("active");
    score = 0;
  } else {
    score++;
    document.querySelector(`.score-${activePlayer}`).textContent = score;
  }
});

resetBtn.addEventListener("click", () => {
  activePlayer = 0;
  score = 0;
  player1.classList.add("active");
  player2.classList.remove("active");
  document.querySelector(`.score-0`).textContent = 0;
  document.querySelector(`.score-1`).textContent = 0;

  image.src = `./images/angle-1.png`;
});
closeInstruction.addEventListener('click',()=>{
    instructionBox.style.display="none"
})