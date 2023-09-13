'use strict';

//Score Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let Score,currentScore,ActivePlayer,playing;

const init = function(){
  Score = [0,0];
  currentScore = 0;
  ActivePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

init();

const clickOnDice = diceEl.addEventListener('click',function(){
  diceEl.classList.add('hidden');
});


  const Switching = function(){
      currentScore = 0;
      document.getElementById(`current--${ActivePlayer}`).textContent = currentScore;
      ActivePlayer = ActivePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
  }
  
  btnRoll.addEventListener('click',function(){
    if(playing)
    {
      let diceRoll = Math.trunc(Math.random()*6 + 1);
    
    diceEl.src = `dice-${diceRoll}.png`;
    diceEl.classList.remove('hidden');
    if(diceRoll !== 1)
    {
      currentScore += diceRoll;
      
      document.getElementById(`current--${ActivePlayer}`).textContent = currentScore;
      // current0El.textContent = currentScore; //Change Later
    }else{
      Switching();
    }
    }
  });


btnHold.addEventListener('click',function(){
  if(playing)
  {
    //1.Player Score should get updated
    // score0El.textContent = currentScore;
    Score[ActivePlayer] += currentScore;
    document.querySelector(`#score--${ActivePlayer}`).textContent = Score[ActivePlayer];

    if(Score[ActivePlayer] >= 100 )
    {
      playing = false;
      document.querySelector(`.player--${ActivePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${ActivePlayer}`).classList.remove('player--active');
      diceEl.classList.add('hidden');
      FIXME//there is no "." dot in classList, just directly write class name (++)
    } else{
      //2.Switching Active Players
        Switching();
    } 
  }
});

btnNew.addEventListener('click',init);
