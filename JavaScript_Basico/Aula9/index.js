/* Aritiméticos
 * Adição = [ + ], o sinal de mais também pode ser para concatenar strings
 * Subtração = [ - ] substração simples.
 * Divisão = [ / ] divisão simples.
 * Potenciação = [ ** ] 2².
 * Resto da divisão = [ % ], pega o resto da divisão.

 * Precedência das operações [ (), **, *, / e %, * e -].

 *Contadores: Incremento [ ++ ], adiciona mais 1 em uma variável.
              Decremento [ -- ], retira 1 em uma variável. 
              Steps      [ +=, *=, /=, **=, %= ], operadores de atribuição.  

    NaN - Not a number: função para trocar a string [ parseInt(inteiro), parseFloat(decimais) ]              
*/

let num1 = 10;
let num2 = 2;
let num3 =  parseInt('5'); //Função para transformar a string em inteiro.


console.log((num1 + num2) * num3);

console.log(num1*=num2);
console.log(num1*=num2);