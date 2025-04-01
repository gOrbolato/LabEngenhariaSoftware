/*
2. Implemente um formulario HTML para input das características de um 
carro:
marca, modelo, ano, cor, kilometragem, valor_fipe
Implemente um script que armazene as características preenchidas no 
formulário em um objeto e que contenha, além das propriedades acima, dois 
métodos:
anosUtilizacao() – deve retornar quantos anos de utilização o veículo 
possui;
valorMercado() – deve retornar o valor de mercado considerando a 
seguinte regra:
carros que rodam até 30.000 km/ano – 110% do valor_fipe
carros que rodam entre 30.000 e 50.000 km/ano – 100% do valor_fipe
carros que rodam mais que 50.000 km/ano – 90% do valor_fipe
Preenchidos os campos os métodos criados devem ser utilizados para exibir 
quantos anos o veículo tem de utilização juntamente com seu valor de 
mercado.
*/
//calcula o valor de mercado com base na km anual
function calcularValorMercado(kilometragem, valor_fipe) {
    const anoAtual = new Date().getFullYear();
    const anosUtilizacao = anoAtual - document.getElementById("ano").value;
    const kilometragemAnual = kilometragem / anosUtilizacao;

    if (kilometragemAnual <= 30000) {
        return valor_fipe * 1.1; // 110% do valor fipe
    } else if (kilometragemAnual > 30000 && kilometragemAnual <= 50000) {
        return valor_fipe; // 100% do valor fipe
    } else {
        return valor_fipe * 0.9; // 90% do valor fipe
    }
}
//envio do formulário
document.getElementById("carForm").addEventListener("submit", function(event) {
    event.preventDefault(); //impede o recarregamento da pag
    //valores do formulário
    const marca = document.getElementById("marca").value.trim();
    const modelo = document.getElementById("modelo").value.trim();
    const ano = parseInt(document.getElementById("ano").value.trim());
    const cor = document.getElementById("cor").value.trim();
    const kilometragem = parseFloat(document.getElementById("kilometragem").value.trim());            const valor_fipe = parseFloat(document.getElementById("valor_fipe").value.trim());
    //objeto carro
    const carro = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        kilometragem: kilometragem,
        valor_fipe: valor_fipe,

        //anos de utilizacao
        anosUtilizacao: function() {
            const anoAtual = new Date().getFullYear();
            return anoAtual - this.ano;
        },
        //valor de mercado
        valorMercado: function() {
            const anosUtilizacao = this.anosUtilizacao();
            const kilometragemAnual = this.kilometragem / anosUtilizacao;

            if (kilometragemAnual <= 30000) {
                return this.valor_fipe * 1.1; // 110% do valor fipe
            } else if (kilometragemAnual > 30000 && kilometragemAnual <= 50000) {
                return this.valor_fipe; // 100% do valor fipe
            } else {
                return this.valor_fipe * 0.9; // 90% do valor fipe
            }
        }
    };

    //exibe resultados DOM
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p><strong>Marca:</strong> ${carro.marca}</p>
        <p><strong>Modelo:</strong> ${carro.modelo}</p>
        <p><strong>Anos de Utilização:</strong> ${carro.anosUtilizacao()}</p>               
        <p><strong>Valor de Mercado:</strong> R$ ${carro.valorMercado().toFixed(2)}</p>
    `;
});