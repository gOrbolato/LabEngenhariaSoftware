/* 
4. Implemente um script JavaScript que solicite ao usuário a entrada de um
dado via teclado. Em seguida, pergunte se o usuário deseja verificar o tipo do
dado informado. Caso o usuário confirme escreva no corpo da página o tipo
do dado (Number, String, etc.) caso contrário escreva a mensagem: “Obrigado
por visitar esta página”. 
*/
function verificaDado() {
    let entrada = prompt("Digite um dado: "); // usuario informa o dado
    let confirmacao = confirm("Deseja verificar o tipo do dado informado?"); // usuario confirma

    if (confirmacao) { // verifica o tipo de dado
        let tipoDado;

        if (!isNaN(entrada) && entrada.trim() !== "") {
            // Se for um número (não NaN) e não for uma string vazia
            tipoDado = "Number";
        } else if (entrada === null || entrada.trim() === "") {
            // Se o usuário cancelar o prompt ou deixar em branco
            tipoDado = "Null ou string vazia";
        } else {
            // Caso contrário, trata-se de uma string
            tipoDado = "String";
        }

        alert(`O tipo do dado informado é ${tipoDado}.`); // Apresenta o tipo do dado
    } else {
        document.body.innerHTML = "Obrigado por visitar esta página.";
    }
}

verificaDado();