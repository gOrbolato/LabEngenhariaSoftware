/*
3. Implemente um script que leia uma palavra ou frase de um
campo de texto e exiba em uma janela de alert se o texto é ou
não um palíndromo.
*/
function verificaPalindromo() {
    let texto = document.getElementById("palavra").value; // pega a palavra digitada pelo usuario
    if (!texto.trim()) {
        alert("Por favor, digite uma palavra ou frase.");
        return;
    }
    let textoFormatado = texto.normalize("NFD").replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // remove acentos, caracteres e os espacos
    let textoInvertida = textoFormatado.split("").reverse().join(""); // cria uma nova palavra invertida

    if (textoFormatado === textoInvertida){
        alert("O texto digitado é um palíndromo."); // verifica se a palavra e igual a palavra invertida
    } else{
        alert("O texto digitado não é um palíndromo."); // apresenta mensagem de nao palindromo
    }
}