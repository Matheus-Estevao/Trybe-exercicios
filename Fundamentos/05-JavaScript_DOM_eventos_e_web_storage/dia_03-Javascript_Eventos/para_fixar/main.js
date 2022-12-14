const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 1. Copie esse arquivo e edite apenas ele;
 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
  2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
  4.1. Que tal redirecionar para seu portifólio?
 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

// Meu código

// Requisito 2
function techClass(event) {
  document.getElementsByClassName('tech')[0].className = '';
  event.target.className = 'tech';
}

firstLi.addEventListener('click', techClass);
secondLi.addEventListener('click', techClass);
thirdLi.addEventListener('click', techClass);

// Requisito 3
function inputText(event) {
  let text = event.target.value;
  document.querySelector('.tech').innerHTML = text;
}

input.addEventListener('keyup', inputText);

// Requisito 4
function redirect() {
  window.location.href = 'https://luispolippo.github.io/';
}

myWebpage.addEventListener('dblclick', redirect);

// Requisito 5
function changeColorRed(event) {
  event.target.style.color = 'red';
}

function changeColorWhite(event) {
  event.target.style.color = 'white';
}

myWebpage.addEventListener('mouseover', changeColorRed);
myWebpage.addEventListener('mouseleave', changeColorWhite);
