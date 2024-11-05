let num1 = 0.7; //number
let num2 = 0.1; //number

//console.log(num1.toString() + num2);

//Transforma pra string
//num1 = num1.toString();

//Fala o número binário do valor
//console.log(num1.toString(2));

//Arredonda e exibe as casas decimais. 
//console.log(num1.toFixed(2));

//Pega o número e verifica se ele é um número inteiro
//console.log(Number.isInteger(num1));

//Função para verificar se o número é um not a number. Responde true or false.
//let temp = num1 * '5';
//console.log(Number.isNaN(temp));

num1 += num2; //0.8
num1 += num2;
num1 += num2; //1
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2; //1.5
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2; //2

//parseFloat 
num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

