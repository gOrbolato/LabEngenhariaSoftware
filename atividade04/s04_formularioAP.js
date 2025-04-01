// data no formato DD/MM/YYYY
function maskDate(value) {
    value = value.replace(/[^0-9/]/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    return value;
}

// classe base: Pessoa
function Pessoa(nome, email, matricula, dataNascimento) {
    this.nome = nome;
    this.email = email;
    this.matricula = matricula;
    this.dataNascimento = dataNascimento;
}

Pessoa.prototype.validar = function() {
    if (!this.nome) return this._exibirErro("Nome é obrigatório!");
    if (!this.email) return this._exibirErro("Email é obrigatório!");
    if (!this._validarEmail()) return this._exibirErro("Email inválido!");
    if (!this.matricula) return this._exibirErro("Matrícula Fixa é obrigatória!");
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

// classe Aluno (herança classe: Pessoa)
function Aluno(nome, email, matricula, dataNascimento, curso) {
    Pessoa.call(this, nome, email, matricula, dataNascimento);
    this.curso = curso;
}

Aluno.prototype = Object.create(Pessoa.prototype);
Aluno.prototype.constructor = Aluno;

Aluno.prototype.validar = function() {
    if (!Pessoa.prototype.validar.call(this)) return false;
    if (!this.curso) return this._exibirErro("Curso é obrigatório para Alunos!");
    return true;
};

// classe prof (herança classe: Pessoa)
function Professor(nome, email, matricula, dataNascimento, areaAtuacao, lattes) {
    Pessoa.call(this, nome, email, matricula, dataNascimento);
    this.areaAtuacao = areaAtuacao;
    this.lattes = lattes;
}

Professor.prototype = Object.create(Pessoa.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.validar = function() {
    if (!Pessoa.prototype.validar.call(this)) return false;
    if (!this.areaAtuacao) return this._exibirErro("Área de Atuação é obrigatória para Professores!");
    if (!this.lattes || !this._validarURL()) return this._exibirErro("Link do Lattes inválido!");
    return true;
};

Professor.prototype._validarURL = function() {
    return /^https?:\/\/[^\s]+$/.test(this.lattes);
};

// alternancia nos campos condicionais
function toggleFields() {
    const role = document.querySelector('input[name="role"]:checked').value;
    const professorFields = document.getElementById('professorFields');
    const alunoFields = document.getElementById('alunoFields');

    if (role === 'professor') {
        professorFields.classList.remove('hidden');
        alunoFields.classList.add('hidden');
    } else if (role === 'aluno') {
        alunoFields.classList.remove('hidden');
        professorFields.classList.add('hidden');
    }
}

// enviar o formulário
function submitForm() {
    // verifica o papel selecionado
    const selectedRole = document.querySelector('input[name="role"]:checked');
    if (!selectedRole) return alert("Selecione um papel (Professor/Aluno)");

    // coleta dados comuns
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const matricula = document.getElementById('matriculaFixa').value;
    const dataNascimento = document.getElementById('dataNascimento').value;

    let usuario;
    if (selectedRole.value === 'aluno') {
        // coleta dados específicos do aluno
        const curso = document.getElementById('curso').value;
        usuario = new Aluno(
            nome, email, matricula, dataNascimento, curso
        );
    } else if (selectedRole.value === 'professor') {
        // coleta dados específicos do prof
        const areaAtuacao = document.getElementById('areaAtuacao').value;
        const lattes = document.getElementById('lattes').value;
        usuario = new Professor(
            nome, email, matricula, dataNascimento, areaAtuacao, lattes
        );
    }
}