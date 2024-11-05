//Tipos primitivos
const nome = 'Luiz'; //String
const nome1 = "Luiz"; //String
const nome2 = `Luiz`; //String
const num1 = 10; //Number
const num2 = 10.52 //Number
let nomeAluno; //Undefined -> não aponta pra local nenhuma na memória.
let sobrenomeAluno = null; //Nulo -> não aponta pra local nenhuma da memória.
const aprovado = false //Booleano = true, false (lógico).

console.log(typeof nomeAluno); //Typeof é uma função que retorna o valor primitivo da variável.

const a = [1,2];
const b = a;

b.push(3);
console.log(a,b);
