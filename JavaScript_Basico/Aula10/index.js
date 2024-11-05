//Parênteses chama função! 
//Prompt pede o usuário a informação. Lembrar que sempre será absorvida a informação como string.

const num1 = prompt('Digite um número: ');
const num2 = prompt('Digite outro número: ');

//Resultado já convertendo para number.
const resultado = parseInt(num1) + parseInt(num2); 
alert(`Resultado da operação é: ${resultado}`);

