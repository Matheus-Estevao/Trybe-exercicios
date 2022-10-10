
const fetch = require('node-fetch');

function imprimirNome() {
  const url = "https://api.adviceslip.com/advice";
  const request = fetch(url)
  .then((response) => response.json())
  .then((object) => console.log(object))
  .catch( error => console.log(error.message));
  console.log(request);
};

imprimirNome();