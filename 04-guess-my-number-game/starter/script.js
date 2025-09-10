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

  // CHECK IF OUR GUESS INPUT VALUE IS EMPTY
  if (!guess) {
    document.querySelector(`.message`).textContent = 'Please input a number! 🥹';
    return;
  }

  if (guess < 1 || guess > 20) {
    document.querySelector(`.message`).textContent =
      'Number must be between 1 and 20! 😠';
    return;
  }

  if (guess === secretNumber) {
    console.log(`Your guess is correct!`);
    document.querySelector(`.message`).textContent = `Correct Number 🥳 `;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    document.querySelector(`.message`).textContent = 'You have won! 🦦';
    document.querySelector(`.guess`).disabled = true;
    document.querySelector(`.check`).disabled = true;
    document.body.style.backgroundColor = `green`;
  } else if (guess > secretNumber) {
    console.log(`Too high!`);
    document.querySelector(`.message`).textContent = `Too high! 🤣 `;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(
        `.message`
      ).textContent = `You have lost, press again! 🤣 `;
      document.body.style.backgroundColor = `maroon`;
      document.querySelector(`.message`).textContent = 'Game Over 🤣';
      document.querySelector(`.guess`).value = ``;
      document.querySelector(`number`).textContent = secretNumber;
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
    }
  } else if (guess < secretNumber) {
    document.querySelector(`.message`).textContent = `Too low! 😖`;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(
        `.message`
      ).textContent = `You have lost, press again!! 🤣 `;
      document.body.style.backgroundColor = `maroon`;
      document.querySelector(`.message`).textContent = 'Game Over 🤣';
      document.querySelector(`.guess`).value = ``;
      document.querySelector(`number`).textContent = secretNumber;
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New Secret Number is: ', secretNumber);
  // RESTART THE MESSAGE DISPLAY
  document.querySelector(`.message`).textContent = `Start guessing`;
  // RESTART QUESTION MARK OR THE REVEAL SECRET NUMBER
  document.querySelector(`.number`).textContent = `?`;
  // UPDATE SCORE IN THE UI
  document.querySelector(`.score`).textContent = score;
  // RESTART GUESS INPUT VALUE
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.guess`).disabled = false;
  document.querySelector(`.check`).disabled = false;
  document.body.style.backgroundColor = ``;
});
