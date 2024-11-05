/*
    Luiz Otávio miranda tem 30 anos, pesa 84kg, 
    tem 1.80m de altura e seu IMC é de 25.9259.
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda'; 
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc; //Peso / (altura * altura)
let anoNascimento; 

anoNascimento = 2024 - 30;
imc = peso /(altura * altura)
console.log(nome + ' '+ sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg, tem ' + altura + 'm de altura e seu imc é de: '+ imc);
console.log(nome + ' '+ sobrenome + 'nasceu em ' + anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura e seu img é de: ${imc}.`);
