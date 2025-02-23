//Crie um array para armazenar os nomes dos amigos; 
let arrayamigos = []; 

//Implemente uma função para adicionar o nome dos amigos digitados à lista (array)
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo"); //o ID "amigo" é determinado no input dentro do arquivo HTML
    let nome = inputAmigo.value; //captura o texto que o usuário digitou

    if(nome.trim() === "") { //nome.trim() remve espaços vazios extras antes e depois do nome.
        alert("Por favor, insira um nome.");
        return;
    }
    
    arrayamigos.push(nome);
    inputAmigo.value = ""; //limpa o campo de entrada 
}

    

