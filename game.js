function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function Game(config) {
  const alphabet = config.ALPHABET;
  const levels = config.LEVELS;
  const duration = config.DURATION;
  const timer = config.TIMER;

  let level = 0;
  let randomLetter = '';
  let trueChoise = null;
  
  this.getLevel = function() {
    return level;
  }

  this.getGameLevel = function() {
    return levels[level] || null;
  }

  this.getRandomLetter = function () {
    const index = getRandomArbitrary(0, alphabet.length - 1 );
    this.randomLetter = alphabet[index]; 
    return alphabet[index];
  }

  this.getLetterAddNumber = function (number) {
    const randomLetterIndex = alphabet.indexOf(this.randomLetter);
    const trueChoiseLetter = alphabet[randomLetterIndex + number];
    this.trueChoise = trueChoiseLetter;
    return trueChoiseLetter;
  }

  this.getTrueChoise = function () {
    return this.trueChoise;
  } 

  this.incrementLevel = function() {
      level++;
      return game.getGameLevel().label; 
      
  }
}

