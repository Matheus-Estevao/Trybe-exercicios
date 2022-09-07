document.getElementById('div1').style.backgroundColor = 'black';

function creatMyDiv() {
  let section = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    let div = document.createElement('div');
    div.className = 'pixel';
    div.addEventListener('click', changeBoard);
    section.appendChild(div);
  }
}

creatMyDiv();
const button = document.querySelector('button');
button.addEventListener('click', clique);

function mudarCores() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let resultado = `rgb(${r},${g},${b})`;
  return resultado;
}

let takeColor = [];

function clique() {
  let cores;
  takeColor = [];
  for (let index = 1; index < 4; index += 1) {
    cores = document.getElementById(`div${index + 1}`);
    cores.style.backgroundColor = mudarCores();
    takeColor.push(cores.style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(takeColor));
}

function receiveValue() {
  if (localStorage.getItem('colorPalette')) {
    takeColor = JSON.parse(localStorage.getItem('colorPalette'));
    for (let index = 1; index < 4; index += 1) {
      cores = document.getElementById(`div${index + 1}`);
      cores.style.backgroundColor = takeColor[index - 1];
    }
    return;
  }
  clique();
}
receiveValue();

function changeSelected(anyName) {
  let heardAction = anyName.target;
  let held = document.querySelector('.selected');
  held.classList.remove('selected');
  heardAction.classList.add('selected');
}

const gotColor = document.getElementsByClassName('color');
for (let index = 0; index < gotColor.length; index += 1) {
  gotColor[index].addEventListener('click', changeSelected);
}

function changeBoard(any) {
  let pixel = any.target;
  let corSelecionada = document.querySelector('.selected');
  pixel.style.backgroundColor = corSelecionada.style.backgroundColor;
  salveColorBoard();
}

let resetButton = document.getElementById('clear-board');
resetButton.addEventListener('click', limparBoard);

function limparBoard() {
  let pixelLimpo = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelLimpo.length; index += 1) {
    pixelLimpo[index].style.backgroundColor = 'white';
  }
  return pixelLimpo;
}

function salveColorBoard() {
  let pixelPintado = document.querySelectorAll('.pixel');
  let take = [];
  for (let index = 0; index < pixelPintado.length; index += 1) {
    take.push(pixelPintado[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(take));
}

function receiveColors() {
  let pixelPintado = document.querySelectorAll('.pixel');
  if (localStorage.getItem('pixelBoard')) {
    let take = JSON.parse(localStorage.getItem('pixelBoard'));
    for (let index = 0; index < pixelPintado.length; index += 1)
      pixelPintado[index].style.backgroundColor = take[index];
  }
}
receiveColors();
