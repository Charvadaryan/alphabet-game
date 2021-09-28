const config = {
    DURATION: 30,
    TIMER: 5,
    ALPHABET: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    LEVELS: [
        { id: 1, label: 'Lvl 1', range: [1, 3] },
        { id: 2, label: 'Lvl 2', range: [1, 3] },
        { id: 3, label: 'Lvl 3', range: [1, 3] },
        { id: 4, label: 'Lvl 4', range: [2, 4] },
        { id: 5, label: 'Lvl 5', range: [2, 4] },
        { id: 6, label: 'Lvl 6', range: [2, 4] },
        { id: 7, label: 'Lvl 7', range: [3, 5] },
        { id: 8, label: 'Lvl 8', range: [3, 5] },
        { id: 9, label: 'Lvl 9', range: [3, 5] },
        { id: 10, label: 'Lvl 10', range: [3, 5] },
        { id: 11, label: 'Lvl 11', range: [3, 5] },
        { id: 12, label: 'Lvl 12', range: [4, 6] },
        { id: 13, label: 'Lvl 13', range: [4, 6] },
        { id: 14, label: 'Lvl 14', range: [4, 6] },
        { id: 15, label: 'Lvl 15', range: [4, 6] },
        { id: 16, label: 'Lvl 16', range: [4, 6] },
        { id: 17, label: 'Lvl 17', range: [5, 7] },
        { id: 18, label: 'Lvl 18', range: [5, 7] },
        { id: 19, label: 'Lvl 19', range: [5, 7] },
        { id: 20, label: 'Lvl 20', range: [5, 7] },
    ]
}

const game = new Game(config);
let sec = config.DURATION;
let number;


const itemsList = document.querySelectorAll('.item')
const letterLeftTop = document.getElementById("class-item-left-top");
const letterRightTop = document.getElementById("class-item-right-top");
const letterLeftDown = document.getElementById("class-item-left-down");
const letterRightDown = document.getElementById("class-item-right-down");
const timer = document.getElementById("timer");

itemsList.forEach(item => item.addEventListener("click", () => onLetterClick(item.innerHTML)));

const nextStep = () => {
  number = getRandomArbitrary(game.getGameLevel().range[0], game.getGameLevel().range[1])
  const randomLetter = game.getRandomLetter();
  let arr = [];
  let i;
  arr.push(game.getLetterAddNumber(number));
  for( i = 0; i < 4; i++){
      if(arr.length < 4)
        arr.push(game.getRandomLetter());
  }
  arr.sort()
  document.getElementById("aaa").innerHTML = `${randomLetter} + ${number}`;
  
  itemsList.forEach((item, index) => {
    item.innerHTML = arr[index]
  });
}

function onLetterClick(currentItem) {
  if(sec < 1) return;
  if (currentItem === game.getTrueChoise()) {
    sec += config.TIMER ;
    document.getElementById("lev").innerHTML = game.incrementLevel()
  } else {
    sec < config.TIMER + 1 
      ? gameOver()
      : sec -= config.TIMER;
  }
  nextStep();
}

const gameOver = () => {
  sec = 0;
  timer.innerHTML = 'Game Over!';
  clearInterval(timerInterval);
}

const timerInterval = setInterval(function() {
  if(sec < 1) {
    gameOver();
    return;
  }
  timer.innerHTML = sec;
  sec--
}, 1000);

document.getElementById("lev").innerHTML = game.getGameLevel().label
nextStep();
