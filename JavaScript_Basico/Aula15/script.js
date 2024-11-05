const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = numero; 

texto.innerHTML += `<p>Raiz quadrada do número é: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>O número ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>O número é NaN?: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arredondando com duas casas decimais: ${Math.toFixed(2)}</p>`;



