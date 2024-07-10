const form = document.getElementById('form-contacts');
const fotoPerfil = '<img src="./imagens/perfil.png" alt="perfil"/>';
const numeros = [];
const nomes = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    atualizaTabela();

});

function addLinha() {
    const inputNameContact = document.getElementById('name-contact');
    const inputNumberContact = document.getElementById('number-contact');

    if (numeros.includes(parseInt(inputNumberContact.value))) {
        alert(`O número ${inputNumberContact.value} já foi adicionado`);
    } else {
        nomes.push(inputNameContact.value);
        numeros.push(parseInt(inputNumberContact.value));

        let linha = '<tr>';
        linha += `<td>${fotoPerfil}</td>`;
        linha += `<td>${inputNameContact.value}</td>`;
        linha += `<td>${inputNumberContact.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        alert(`${inputNameContact.value} agora está na sua agenda de contatos`);
    }

    inputNameContact.value = '';
    inputNumberContact.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}