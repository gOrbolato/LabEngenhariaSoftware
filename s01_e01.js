/*
1. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido informe em uma janela
de alerta se o número é par ou ímpar.
*/
function verificaParImpar() {
    let numero = parseInt(prompt("Digite um número inteiro positivo: ")); // solicita um numero ao usuario
    if(isNaN(numero) || numero <= 0){
        alert("Número inválido, por favor digite um número inteiro positivo."); //verifica validez do numero
        return;
    }
    if (numero % 2 === 0){ //verifica se o numero e par ou impar
        alert(`O número ${numero} é par.`);
    } else{
        alert (`O número ${numero} é ímpar.`);
    }
}
verificaParImpar(); //chama função