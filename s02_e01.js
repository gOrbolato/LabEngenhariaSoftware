/*1. Implemente um script JavaScript que exiba a data atual no
formato: dia/mês/ano.
*/
function exibiData(){
    let data = new Date(); // cria uma nova data
    let dia = data.getDate(); // pega o dia
    let mes = data.getMonth() + 1; // pega o mes + 1 pois o mes comeca com 0
    let ano = data.getFullYear(); // pega o ano

    if (dia < 10){ // verifica se o dia e menor que 10
        dia = "0" + dia; // adiciona um 0 antes do dia
    }
    if (mes < 10){ // verifica se o mes e menor que 10
        mes = "0" + mes; // adiciona um 0 antes do mes
    }
    document.body.innerHTML = `<p>A data atual é: ${dia}/${mes}/${ano}</p>`;
}
exibiData();