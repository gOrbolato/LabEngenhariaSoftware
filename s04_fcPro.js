// Máscara para data no formato DD/MM/YYYY
function maskDate(value) {
    value = value.replace(/[^0-9/]/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    return value;
}

// Classe Base: Pessoa
function Pessoa(nome, email, telefoneFixo, telefoneCelular, dataNascimento) {
    this.nome = nome;
    this.email = email;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
    this.dataNascimento = dataNascimento;
}

Pessoa.prototype.validar = function() {
    if (!this.nome) return this._exibirErro("Nome é obrigatório!");
    if (!this.email) return this._exibirErro("Email é obrigatório!");
    if (!this._validarEmail()) return this._exibirErro("Email inválido!");
    if (!this.telefoneCelular) return this._exibirErro("Telefone Celular é obrigatório!");
    if (!this._validarData()) return this._exibirErro("Data de Nascimento inválida (DD/MM/YYYY)!");
    return true;
};

Pessoa.prototype._validarEmail = function() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
};

Pessoa.prototype._validarData = function() {
    const partes = this.dataNascimento.split("/");
    if (partes.length !== 3) return false;
    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]);
    const ano = parseInt(partes[2]);
    return !isNaN(dia) && !isNaN(mes) && !isNaN(ano) && 
           dia >= 1 && dia <= 31 &&
           mes >= 1 && mes <= 12 &&
           ano > 1900;
};

Pessoa.prototype._exibirErro = function(mensagem) {
    alert(mensagem);
    return false;
};

// Classe Professor (Herança de Pessoa)
function Professor(nome, email, telefoneFixo, telefoneCelular, dataNascimento, areaAtuacao, lattes, matricula) {
    Pessoa.call(this, nome, email, telefoneFixo, telefoneCelular, dataNascimento);
    this.areaAtuacao = areaAtuacao;
    this.lattes = lattes;
    this.matricula = matricula; // Matrícula agora pertence ao Professor
}

Professor.prototype = Object.create(Pessoa.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.validar = function() {
    if (!Pessoa.prototype.validar.call(this)) return false;
    if (!this.areaAtuacao) return this._exibirErro("Área de Atuação é obrigatória para Professores!");
    if (!this.lattes || !this._validarURL()) return this._exibirErro("Link do Lattes inválido!");
    if (!this.matricula) return this._exibirErro("Matrícula é obrigatória para Professores!");
    return true;
};

Professor.prototype._validarURL = function() {
    return /^https?:\/\/[^\s]+$/.test(this.lattes);
};

// Função para alternar campos condicionais
function toggleFields() {
    const role = document.querySelector('input[name="role"]:checked').value;
    const professorFields = document.getElementById('professorFields');
    
    if (role === 'professor') {
        professorFields.classList.remove('hidden');
    } else {
        professorFields.classList.add('hidden');
    }
}

// Função para enviar o formulário
function submitForm() {
    // Verificação de papel selecionado
    const selectedRole = document.querySelector('input[name="role"]:checked');
    if (!selectedRole) return alert("Selecione um papel (Professor)");

    // Coletar dados comuns
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefoneFixo = document.getElementById('telefoneFixo').value;
    const telefoneCelular = document.getElementById('telefoneCelular').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    // Coletar dados específicos do Professor
    const areaAtuacao = document.getElementById('areaAtuacao').value;
    const lattes = document.getElementById('lattes').value;
    const matricula = document.getElementById('matricula').value;

    const usuario = new Professor(
        nome, email, telefoneFixo, telefoneCelular, dataNascimento, 
        areaAtuacao, lattes, matricula
    );

    // Validar e exibir mensagem de sucesso
    if (usuario.validar()) {
        alert("Formulário enviado com sucesso!");
        console.log(usuario);
    }
}