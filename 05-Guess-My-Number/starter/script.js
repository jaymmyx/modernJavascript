'use strict';

let correctNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let currhighScore = 0;

const isHighGuess = () => {
  document.querySelector('.message').textContent = '📈 Too High!';
};

const isLowGuess = () => {
  document.querySelector('.message').textContent = '📉 Too Low!';
};

const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = () => {
  document.querySelector('.score').textContent = currentScore;
};

document.querySelector('.check').addEventListener('click', () => {
  if (currentScore <= 1) {
    currentScore = 0;
    displayScore();
    setMessage('💥 You lost the game!');
    return;
  }
  const input = document.querySelector('.guess').value.replace(/\s/, '');
  if (!input) {
    setMessage('🚫 Invalid Input');
  } else if (Number(input) === correctNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '400px';
    setMessage('🎊 Correct, you win!');
    document.querySelector('.number').textContent = correctNumber;
    if (currentScore > currhighScore) {
      currhighScore = currentScore;
    }
  } else if (Number(input) > correctNumber) {
    isHighGuess();
    currentScore--;
  } else if (Number(input) < correctNumber) {
    isLowGuess();
    currentScore--;
  }
  displayScore();
  document.querySelector('.highscore').textContent = currhighScore;
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  setMessage('Start guessing ...');
  correctNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '150px';
  currentScore = 20;
  displayScore();
});
