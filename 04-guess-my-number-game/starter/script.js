'use strict';

// CONSTANTS
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// CACHED SELECTORS
const bodyEl = document.body;
const messageEl = document.querySelector(`.message`);
const scoreEl = document.querySelector(`.score`);
const numberEl = document.querySelector(`.number`);
const highscoreEl = document.querySelector(`.highscore`);
const guessEl = document.querySelector(`.guess`);
const checkBtnEl = document.querySelector(`.check`);
const againBtnEl = document.querySelector(`.again`);

// UI HELPER
function setMessage(text) {
  messageEl.textContent = text;
}

function setNumber(value) {
  numberEl.textContent = value;
}

function setScore(value) {
  scoreEl.textContent = value;
}

function setHighscore(value) {
  highscoreEl.textContent = value;
}

function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
  guessEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}

function clearInput() {
  guessEl.value = '';
}

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

console.log(`First Secret Number: `, secretNumber);

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage(`Start guessing...`);
  setNumber(`?`);
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

renderInitialUI();

// BASIC GAME LOGIC
checkBtnEl.addEventListener(`click`, function () {
  // ONCE CHECK BUTTON IS CLICKED, DO THIS BELOW
  const guess = Number(guessEl.value);

  // CHECK IF OUR GUESS INPUT VALUE IS EMPTY
  if (!guess) return setMessage(`No number! ❌`);

  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage(`Correct Number 🥳 `);
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    displayPLay(true);
    clearInput();
    return;
  }

  setMessage(guess > secretNumber ? `Too high! 🤣` : `Too low! 😖`);
  score--;
  setScore(score);

  if (score < 1) {
    setMessage(`You lost! 🤣`);
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

window.addEventListener(`keydown`, function (e) {
  if (e.key === `Enter` && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

againBtnEl.addEventListener(`click`, function () {
  guessEl.focus();
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
