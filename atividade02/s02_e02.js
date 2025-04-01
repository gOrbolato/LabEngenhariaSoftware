/*
2. Pesquise a utilização do método setTimeout() e implemente
um relógio que atualize o horário a cada segundo
*/

function atualizaHorario(){ // funcao para atualizar o horario
    let data = new Date(); // cria uma nova data
    let hora = data.getHours(); // pega a hora
    let minuto = data.getMinutes(); // pega o minuto
    let segundo = data.getSeconds(); // pega o segundo

    if (hora < 10){ // verifica se a hora e menor que 10
        hora = "0" + hora; // adiciona um 0 antes da hora
    }
    if (minuto < 10){ // verifica se o minuto e menor que 10
        minuto = "0" + minuto; // adiciona um 0 antes do minuto
    }
    if (segundo < 10){ // verifica se o segundo e menor que 10
        segundo = "0" + segundo; // adiciona um 0 antes do segundo
    }
    document.body.innerHTML = `<p>A hora atual é: ${hora}:${minuto}:${segundo}</p>`; // apresenta o horario
}
setInterval(atualizaHorario, 1000); // executa a funcao a cada segundo
