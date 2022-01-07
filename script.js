const colorCode = document.getElementById('rgb-color');
const circles = document.getElementsByClassName('ball');
const gameText = document.getElementById('answer');
const reset = document.getElementById('reset');

function generateCode() {
  const color1 = Math.floor(Math.random() * 255);
  const color2 = Math.floor(Math.random() * 255);
  const color3 = Math.floor(Math.random() * 255);
  colorCode.innerText = `(${color1}, ${color2}, ${color3})`;
}

function fillCircles() {
  const answer = Math.floor(Math.random() * 6);
  const teste = colorCode.innerText;
  for (let i = 0; i < circles.length; i += 1) {
    if (i === answer) {
      circles[i].style.backgroundColor = `rgb${teste}`;
    } else {
      circles[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777000).toString(16)}`;
    }
  }
}

function colorGuess() {
  if (event.target.style.backgroundColor === `rgb${colorCode.innerText}`) {
    gameText.innerText = 'Acertou';
  } else {
    gameText.innerText = 'Errou! Tente novamente!';
  }
}
function resetGame() {
  generateCode();
  fillCircles();
  gameText.innerText = 'Escolha uma cor';
}
function listenAll() {
  for (let i = 0; i < circles.length; i += 1) {
    circles[i].addEventListener('click', colorGuess);
  }
}
function start() {
  generateCode();
  fillCircles();
  listenAll();
}

window.onload = start;
reset.addEventListener('click', resetGame);