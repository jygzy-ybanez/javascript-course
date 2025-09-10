'use strict';

// DOM ELEMENT SELECTION
const messageEl = document.querySelector(`.message`);
console.log(messageEl);
console.log(messageEl.textContent);
//messageEl.textContent = 'Hello from JavaScript';

const scoreEl = document.querySelector(`.score`);
console.log(`Score element:`, scoreEl);
//scoreEl.textContent = `50`;

const numberEl = document.querySelector(`.number`);
//numberEl.textContent = `15`;

const highscoreEl = document.querySelector(`.highscore`);
//highscoreEl.textContent = `100`;

const guessEl = document.querySelector(`.quess`);
//guessEl.value = `12`;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret Number: `, secretNumber);

// TRACK THE CURRENT SCORE // THIS IS YOUR CURRENT SCORE
let score = 20;
let highscore = 0;

// CHANGE THE VALUE OF SCORE UI DYNAMICALLY
document.querySelector(`.score`).textContent = score;
document.querySelector(`.highscore`).textContent = highscore;

console.log(`Game stat initialized!`);

// BASIC GAME LOGIC
document.querySelector(`.check`).addEventListener(`click`, function () {
  // ONCE CHECK BUTTON IS CLICKED, DO THIS BELOW
  console.log(`Check button is clicked`);
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(`Players guessed: `, guess);

  if (guess === secretNumber) {
    console.log(`Your guess is correct!`);
    document.querySelector(`.message`).textContent = `Correct Number 🥳 : `;
    document.querySelector(`.number`).textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log(`Too high!`);
    document.querySelector(`.message`).textContent = `Too high! 🤣 `;
  } else if (guess < secretNumber) {
    document.querySelector(`.message`).textContent = `Too low! 😖`;
  }
});
