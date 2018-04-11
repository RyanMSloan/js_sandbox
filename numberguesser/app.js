// Number guesser
/*
GAME FUNCTION
- Player must guess a number between min and max
- Hints of higher or lower
- Show number of tries
*/

// Game Values
let minNum = 1, 
    maxNum = 100,
    winningNum = setRandomNum(minNum, maxNum),
    guessesLeft = 10;

// UI Elements
const gameUI = document.querySelector('#game'),
      minNumUI = document.querySelector('.min-num'),
      maxNumUI = document.querySelector('.max-num'),
      inputUI = document.querySelector('#guess-input'),
      submitBtnUI = document.querySelector('#guess-btn'),
      messageUI = document.querySelector('.message');

// Assign min/max vals
minNumUI.textContent = minNum;
maxNumUI.textContent = maxNum;

// LISTENERS ////////////////////////////////////////////
// Listen for guess
submitBtnUI.addEventListener('click', () => {
  let guess = parseInt(inputUI.value);
  
  // Validate number - Win/lose/try again
  if(isNaN(guess) || guess < minNum || guess > maxNum) {
    setMessage(`Guess a number between ${minNum} and ${maxNum}`, 'red');
    inputUI.value = '';
  } else if(guess === winningNum) {
    // Game over - won
    // disable input
    gameOver(`YOU WIN! ${guess} is correct!`, 'green');
  } else {
    // wrong guess
    guessesLeft--;
    if(guessesLeft === 0) {
      // game over - lost
      gameOver(`GAME OVER! The correct number was ${winningNum}.`, 'red');
    } else {
      // game continues - guess wrong
      setMessage(`${guess} is too ${(guess < winningNum) ? 'low' : 'high'}. ${guessesLeft} ${(guessesLeft === 1) ? 'guess' : 'guesses'} left.`, 'orange');
      inputUI.value = '';
      inputUI.style.borderColor = 'orange';
    }
  }
});

// Reset Game
game.addEventListener('mousedown', (e) => {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});


// HELPERS ////////////////////////////////////////////
// Set random number
function setRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(message, color) {
  messageUI.style.color = color;
  messageUI.textContent = message;
}

// Game Over
function gameOver(message, color) {
  inputUI.disabled = true;
  // border color
  inputUI.style.borderColor = color;
  // show winnig message
  setMessage(message, color);

  // play again btn
  submitBtnUI.value = 'Play Again?';
  submitBtnUI.className = 'play-again';
}