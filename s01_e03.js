/*
3. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido calcule o fatorial do
mesmo e exiba o resultado em uma janela de alerta.
*/

function calculaFatorial(){ 
    let numero = parseInt(prompt("Digite um número inteiro positivo:")); // solicita um numero ao usuario
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo válido."); // verifica se o numero e valido
        return;
    }
    function fatorial(n){ //calculo para achar o fatorial
        if (n === 0 || n === 1){
            return 1; 
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++){
            resultado *= i; // feita a resultado + multiplicacao do proximo
        }
        return resultado;
    }
    let resultadoFatorial = fatorial(numero); //chamada da funcao
    alert(`O fatorial de ${numero} é ${resultadoFatorial}.`); // resultado
}
calculaFatorial();