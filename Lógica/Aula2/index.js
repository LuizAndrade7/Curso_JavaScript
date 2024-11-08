/**
 * Operadores lógicos
 * && -> AND -> E //Todas as expressões precisam ser verdadeiras para retornar true
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 */

//const expressaoAnd = true && true && true;
//const expressaoOr = false || true; //Esperado true pois é diferente
//console.log(expressaoOr);

const usuario = 'Luiz'; 
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);

