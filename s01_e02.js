/*
2. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido informe em uma janela
de alerta se o número é ou não primo.
*/

function verificaPrimo(){
    let numero = parseInt(prompt("Digite um número inteiro positivo: ")); // solicita um numero ao usuario
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo válido."); // verifica se o numero e valido
        return;
    }
    function ePrimo(n){
        if (n <= 1) return false; //verifica se o numero e menor ou igual a 1
        for (let i = 2; i <= Math.sqrt(n); i++){
            if (n % i === 0) return false; //verifica se o numero e divisivel por algum numero alem de 1 e ele mesmo
        }
        return true;
    }
    if (ePrimo(numero)){ //apresenta se o numero e primo ou não
        alert(`O número ${numero} é primo.`);
    } else{
        alert(`O número ${numero} não é primo.`);
    }
}
verificaPrimo();