//Crie um array para armazenar os nomes dos amigos; 
let arrayAmigos = []; 

//Implementar uma função para adicionar o nome dos amigos digitados à lista (array)
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo"); //o ID "amigo" é determinado no input dentro do arquivo HTML
    let nome = inputAmigo.value; //captura o texto que o usuário digitou

    if(nome.trim() === "") { //nome.trim() remove espaços vazios extras antes e depois do nome.
        alert("Por favor, insira um nome.");
        return;
    }

    arrayAmigos.push(nome);
    inputAmigo.value = ""; //limpa o campo de entrada
    atualizarLista();
}

//Implementar função atualizarLista()
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); //o ID "listaAmigos" é determinado no input dentro do arquivo HTML
    lista.innerHTML = ""; // limpa a lista antes de adicionar os itens novamente para evitar duplicação; 

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); //cria um novo <li>
        item.textContent = amigos[i]; //definie o nome do amigo como texto do li
        lista.appendChild(item); //adiciona o li à lista
    }
}

//Implementar função sortearAmigo
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (arrayAmigos.length === 0) { //verifica se há nomes na lista
        alert("Para o sorteio acontecer, é necessário que haja pelo menos um participante! Digite um ou mais nomes para serem sorteados.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * arrayAmigos.length);
    let nomeSorteado = arrayAmigos[indiceSorteado];

    
    resultado.innerHTML = `<li> Parabéns! ${nomeSorteado} foi sorteado! </li>`;
}

