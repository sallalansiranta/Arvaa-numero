const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const checkGuess = () => {
    const userGuess = parseInt(document.querySelector('#guess').value);
    const randomNumber = getRandomNumber(1, 6);  
  
    if (userGuess === randomNumber) {
      alert(`Correct! The number was ${randomNumber}.`);
    } else {
      alert(`Wrong! The number was ${randomNumber}.`);
    }
  
    document.querySelector('#guess').value = '';
    document.querySelector('#guess').focus();
  };
  
  document.querySelector('#guess-btn').addEventListener('click', checkGuess);
  