'use strict';

let correctNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let currhighScore = 0;
document.querySelector('.number').textContent = correctNumber;

const isHighGuess = () => {
  document.querySelector('.message').textContent = '📈 Too High!';
};

const isLowGuess = () => {
  document.querySelector('.message').textContent = '📉 Too Low!';
};

document.querySelector('.check').addEventListener('click', () => {
  if (currentScore === 0) {
    document.querySelector('.message').textContent = 'You Lose, try again!';
    return;
  }
  const input = document.querySelector('.guess').value.replace(/\s/, '');
  if (!input) {
    document.querySelector('.message').textContent = '🚫 Invalid Input';
  } else if (Number(input) === correctNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '400px';
    document.querySelector('.message').textContent = '🎊 Correct, you win!';
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
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('.highscore').textContent = currhighScore;
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing ...';
  correctNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = correctNumber;
  currentScore = 20;
  document.querySelector('.score').textContent = currentScore;
});
