/*
1. Implemente um script com um array cujos valores 
sejam adicionados dinamicamente pelo usuário 
utilizando-se formulário. A cada nova inserção exiba 
todos os dados cadastrados em ordem alfabética em 
uma lista ordenada do html.
*/
//armazenar os itens
let itens = [];
//atualiza lista no HTML
function atualizaLista(){
    const lista = document.getElementById("itemLista");
    lista.innerHTML = ""; //limpa lista
    //ordena em ordem alfabetica os itens
    itens.sort();
    //adiciona itens em a lista ordenada
    itens.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    }); 
}
//envio de formulario
document.getElementById("itemForm").addEventListener("submit", function(event){
    event.preventDefault(); //impede recarregamento da pag
    //valor do input
    const input = document.getElementById("itemInput");
    const novoItem = input.value.trim();
    if(novoItem !== ""){
        itens.push(novoItem); //add novo item ao array
        input.value = ""; //limpa entrada
        atualizaLista(); //atualiza HTML
    } else{
        alert("Por favor, digite um valor válido.");
    }
});