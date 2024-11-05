//Exercício: trocando as variáveis.

let varA = 'A'; 
let varB = 'B';
let varC = 'C';

/*Solução com varíavel temporária
let a = varB;
let b = varC;
let c = varA;

varA = a;
varB = b;
varC = c;
*/

//Moderno
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);