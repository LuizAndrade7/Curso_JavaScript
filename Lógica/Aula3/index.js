/**
 * && and -> false && true -> todos os valores precisam ser verdadeiros
 * || or -> false || true -> true
 * FALSY
 * false -> 0, '', "", ``, null, undefined, NaN // False vai retornar o valor verdadeiro
 */

/*
function falaOi(){
    return 'Oi';
};

let vaiExecutar; 

console.log(vaiExecutar && falaOi()); 
*/

//console.log(0 || false || null || 'Luiz Otávio' || true);

/*
const corUsuario = 'vermelho'; 
const corPadrao = corUsuario || 'preto'; 
console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = 'false'; 
const d = false;
const e = NaN; // Se todas forem falsas, o valor retornado será o último

console.log(a || b || c || d || e);
