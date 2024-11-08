/* 
 * Operadores de comparação
 * > Maior que
 * >= Maior ou igual que
 * < Menor que
 * <= Menor ou igual que
 * == igualdade valor( valor)
 * === igualdade estrita (valor e tipo)
 * != diferente (valor)
 * !== diferente estrito (valor e tipo)
*/

//const comp = 10 >= 11 ; 
//console.log(comp);
//Esperado false

const num1 = 10; //number
const num2 = '10'; //string
//comp = num1 == num2;//Espero true mas 1 é string e o outro number
comp = num1 ===num2; //Espero false pois 1 é string e o outro number

console.log(comp);

