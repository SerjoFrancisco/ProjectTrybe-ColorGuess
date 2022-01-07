const colorCode = document.getElementById('rgb-color');
const circles = document.getElementsByClassName('ball');

function generateCode() {
  const color1 = Math.floor(Math.random() * 255);
  const color2 = Math.floor(Math.random() * 255);
  const color3 = Math.floor(Math.random() * 255);
  colorCode.innerText = `(${color1}, ${color2}, ${color3})`;
}

window.onload = generateCode;

function fillCircles() {
  const answer = Math.floor(Math.random() * 6);
  const teste = colorCode.innerText;
  console.log(teste);
  console.log(answer);
  for (let i = 0; i < circles.length; i += 1) {
    if (i === answer) {
      circles[i].style.backgroundColor = `rgb${teste}`;
    }
    else {
      circles[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777000).toString(16)}`;
    }
  }
}
colorCode.addEventListener('click', fillCircles);
