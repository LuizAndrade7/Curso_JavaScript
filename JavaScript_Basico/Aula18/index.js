//Trabalhando com objetos

/* Exemplo de criação de objeto
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
*/

/*
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
};
const pessoa1 = criaPessoa('Luiz', 'Sérgio', 29);
const pessoa2 = criaPessoa('Luiz', 'Fernando', 31);
const pessoa3 = criaPessoa('Luiz', 'Augusto', 27);
const pessoa4 = criaPessoa('Luiz', 'Otávio', 49);

console.log(pessoa1.nome, pessoa2.sobrenome);
*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    }   
};

pessoa1.fala();