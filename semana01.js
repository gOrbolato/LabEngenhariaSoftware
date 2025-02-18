/* 
1. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido informe em uma janela
de alerta se o número é par ou ímpar.

2. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido informe em uma janela
de alerta se o número é ou não primo.

3. Implemente um script JavaScript que solicite ao usuário um número inteiro
positivo. Assim que o usuário digitar um valor válido calcule o fatorial do
mesmo e exiba o resultado em uma janela de alerta.

4. Implemente um script JavaScript que solicite ao usuário a entrada de um
dado via teclado. Em seguida, pergunte se o usuário deseja verificar o tipo do
dado informado. Caso o usuário confirme escreva no corpo da página o tipo
do dado (Number, String, etc.) caso contrário escreva a mensagem: “Obrigado
por visitar esta página”. 
*/


//1.
// Função para verificar se o número é par ou ímpar
function verificarParOuImpar() {
    // Solicita ao usuário um número inteiro positivo
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));
    // Verifica se o número é válido (inteiro positivo)
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return; // Encerra a função caso o número seja inválido
    }

    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        alert(`O número ${numero} é par.`);
    } else {
        alert(`O número ${numero} é ímpar.`);
    }
}
// Chama a função
verificarParOuImpar();

//2.
// Função para verificar se o número é primo
function verificarPrimo() {
    // Solicita ao usuário um número inteiro positivo
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));
    // Verifica se o número é válido (inteiro positivo)
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return; // Encerra a função caso o número seja inválido
    }

    // Função auxiliar para verificar se o número é primo
    function ePrimo(n) {
        if (n <= 1) return false; // Números menores ou iguais a 1 não são primos
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false; // Se divisível por algum número além de 1 e ele mesmo, não é primo
            }
        }
        return true; // É primo
    }

    // Verifica se o número é primo e exibe o resultado
    if (ePrimo(numero)) {
        alert(`O número ${numero} é primo.`);
    } else {
        alert(`O número ${numero} não é primo.`);
    }
}
// Chama a função
verificarPrimo();

//3.
// Função para calcular o fatorial de um número
function calcularFatorial() {
    // Solicita ao usuário um número inteiro positivo
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));
    // Verifica se o número é válido (inteiro positivo)
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return; // Encerra a função caso o número seja inválido
    }

    // Função auxiliar para calcular o fatorial
    function fatorial(n) {
        if (n === 0 || n === 1) {
            return 1; // O fatorial de 0 e 1 é 1
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i; // Multiplica o resultado pelo próximo número
        }
        return resultado;
    }
    // Calcula o fatorial do número
    let resultadoFatorial = fatorial(numero);
    // Exibe o resultado em uma janela de alerta
    alert(`O fatorial de ${numero} é ${resultadoFatorial}.`);
}
// Chama a função
calcularFatorial();

//4.
// Função para verificar o tipo do dado
function verificarTipoDado() {
    // Solicita ao usuário um dado via teclado
    let entrada = prompt("Digite um dado: ");
    // Verifica se o usuário deseja verificar o tipo do dado
    let confirmacao = confirm("Deseja verificar o tipo do dado informado?");

    // Verifica a escolha do usuário
    if (confirmacao) {
        // Determina o tipo do dado usando typeof
        let tipoDado = typeof entrada;
        // Exibe o tipo do dado em uma janela de alerta
        alert(`O tipo do dado informado é ${tipoDado}.`);
    } else {
        alert("Obrigado por visitar esta página.");
    }
}
// Chama a função
verificarTipoDado();