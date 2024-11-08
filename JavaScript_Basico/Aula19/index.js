function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado'); 
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        resultado.innerHTML += `Nome: ${nome.value}<br>`;
        resultado.innerHTML += `Sobrenome: ${sobrenome.value}<br>`; 
        resultado.innerHTML += `Peso: ${peso.value}<br>`;     
        resultado.innerHTML += `Altura: ${altura.value}<br>`; 

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);
    };

form.addEventListener('submit', recebeEventoForm);
};

meuEscopo();


