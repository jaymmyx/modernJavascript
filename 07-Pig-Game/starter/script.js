'use strict';

const player0Sec = document.querySelector('.player--0');
const player1Sec = document.querySelector('.player--1');

const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');

// Default Game State.
const scores = [0, 0];
diceEl.classList.add('hidden');
let activePlayer = 0;
let currentScore = 0;

// Roll Dice Functionality
rollBtn.addEventListener('click', () => {
  // Generate the dice
  const dice = Math.trunc(Math.random() * 6 + 1);
  // Display the dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  // Check if dice is 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    // Display current score
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    resetCurrentScore(0);
    resetCurrentScore(1);
    player0Sec.classList.toggle('player--active');
    player1Sec.classList.toggle('player--active');
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

const resetCurrentScore = id => {
  document.querySelector(`#current--${id}`).textContent = 0;
};
