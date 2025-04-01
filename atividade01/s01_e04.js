/* 
4. Implemente um script JavaScript que solicite ao usuário a entrada de um
dado via teclado. Em seguida, pergunte se o usuário deseja verificar o tipo do
dado informado. Caso o usuário confirme escreva no corpo da página o tipo
do dado (Number, String, etc.) caso contrário escreva a mensagem: “Obrigado
por visitar esta página”. 
*/
function verificaDado(){
    let entrada = prompt("Digite um dado: "); // solicita um dado ao usuario
    let confirmacao = confirm("Deseja verificar o tipo do dado informado?"); // solicita confirmacao

    if (confirmacao){ // verifica se o usuario deseja verificar o tipo do dado
        let tipoDado = typeof entrada;
        alert(`O tipo do dado informado é ${tipoDado}.`); // apresenta o tipo do dado
    } else{
        document.body.innerHTML = "Obrigado por visitar esta página.";
    }
}
verificaDado();