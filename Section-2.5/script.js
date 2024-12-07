'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};
//rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2 display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //. check for rolled 1 , if true ? switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add Current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      //Finish the game
      diceEl.classList.add('hidden');

      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to the next Player
      switchPlayer();
    }
  }
});
// btnNew.addEventListener('click', function () {
//   playing = true;
//   console.log(currentScore);
//   // scores = [0, 0];
//   document
//     .querySelector(`.player--0`).add
//     .classList.add('player--active');
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   document.getElementById(`score--${activePlayer}`).textContent =
//     scores[activePlayer];
//   activePlayer = 0;
//   currentScore = 0;
//   document.querySelector('.score').textContent = 0;
// });
btnNew.addEventListener('click', function () {
  // scores = [0, 0];
  // playing = true;
  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove('player--winner');
  // currentScore = 0;
  // scores[0], (scores[1] = 0);
  // document.getElementById(`current--${activePlayer}`).textContent =
  //   currentScore;
  // document.querySelector(`.player--0`).classList.add('player--active');
  // document.getElementById(`score--${activePlayer}}`).textContent = 0;

  for (let i = 0; i < scores.length; i++) {
    playing = true;
    scores[i] = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    score0El.textContent = 0;
    score1El.textContent = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = 0;
    currentScore = 0;
  }
});
