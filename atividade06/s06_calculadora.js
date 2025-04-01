const container = document.getElementById('calculator-container');

// elementos principais
const calculator = document.createElement('div');
calculator.style.width = '300px';
calculator.style.margin = '50px auto';
calculator.style.padding = '20px';
calculator.style.border = '2px solid #ccc';
calculator.style.borderRadius = '10px';
calculator.style.backgroundColor = '#f9f9f9';
calculator.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
calculator.style.fontFamily = 'Arial, sans-serif';
calculator.style.display = 'grid'; // grid organizar os elementos
calculator.style.gridTemplateColumns = 'repeat(4, 1fr)'; // colunas
calculator.style.gap = '10px'; // espaçamento dos elementos

// display
const display = document.createElement('input');
display.type = 'text';
display.style.gridColumn = 'span 4'; // Ocupa as 4 colunas
display.style.width = '100%';
display.style.height = '40px';
display.style.fontSize = '24px';
display.style.textAlign = 'right';
display.style.marginBottom = '10px';
display.style.padding = '5px';
display.style.border = '1px solid #ccc';
display.style.borderRadius = '5px';
display.readOnly = true; // usuário não digita direto no display
calculator.appendChild(display);

// array dos botões
const buttons = [
  'AC', '+/-', '%', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '='
];

// controla o funcionamento 
let currentInput = '';
let operator = '';
let previousInput = '';

// operações matemáticas
function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  if (b === 0) {
    return 'Erro'; // divisão por zero
  }
  return parseFloat(a) / parseFloat(b);
}

// calculo do resultado com base no operador
function calculate() {
  let result;
  switch (operator) {
    case '+':
      result = add(previousInput, currentInput);
      break;
    case '-':
      result = subtract(previousInput, currentInput);
      break;
    case '*':
      result = multiply(previousInput, currentInput);
      break;
    case '/':
      result = divide(previousInput, currentInput);
      break;
    default:
      result = currentInput; // retorna o valor atual
  }
  return result.toString();
}

// lida com cliques nos botões
function handleButtonClick(value) {
  if (value === '=') {
    if (previousInput && operator && currentInput) {
      currentInput = calculate(); // calcula o resultado
      previousInput = '';
      operator = '';
    }
  } else if ('+-*/'.includes(value)) {
    if (currentInput !== '') {
      previousInput = currentInput;
      operator = value;
      currentInput = '';
    }
  } else if (value === 'AC') {
    // limpa todos os valores
    currentInput = '';
    operator = '';
    previousInput = '';
  } else if (value === '+/-') {
    // inverte o sinal do número atual
    currentInput = (parseFloat(currentInput) * -1).toString();
  } else if (value === '%') {
    // calcula a porcentagem do número atual
    currentInput = (parseFloat(currentInput) / 100).toString();
  } else {
    currentInput += value;
  }
  display.value = previousInput + (operator ? ` ${operator} ` : '') + currentInput; // atualização do display
}

// botoes ficam na ordem da array
buttons.forEach(buttonText => {
  const button = document.createElement('button');
  button.textContent = buttonText;
  button.style.width = '100%';
  button.style.height = '50px';
  button.style.fontSize = '18px';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.backgroundColor = '#e0e0e0';
  button.style.color = '#333';
  button.style.transition = 'background-color 0.3s';

  // estilo para cada botão
  if (buttonText === '-') {
    button.style.backgroundColor = '#ffcccc'; // fundo vermelho claro
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#ff0000'; // fundo no hover
    });
  } else if (buttonText === '+') {
    button.style.backgroundColor = '#ccffcc'; // fundo verde claro
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#00ff00'; // fundo no hover
    });
  } else if (buttonText === '/') {
    button.style.backgroundColor = '#ffcc99'; // fundo laranja claro
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#ff9900'; // fundo no hover
    });
  } else if (buttonText === '*') {
    button.style.backgroundColor = '#ffff99'; // fundo amarelo claro
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#ffff00'; // fundo no hover
    });
  } else if (buttonText === '=') {
    button.style.gridColumn = 'span 2'; // ocupa duas colunas
    button.style.height = '50px'; 
    button.style.fontSize = '24px'; // aumenta o tamanho da fonte
    button.style.backgroundColor = '#99ccff'; // fundo azul claro
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#0000ff'; // fundo no hover
    });
  } else if (['AC', '+/-', '%'].includes(buttonText)) {
    button.style.backgroundColor = '#666666'; // fundo cinza mais escuro
    button.style.color = '#ffffff'; // texto branco
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#4d4d4d'; // fundo ainda mais escuro no hover
    });
  } else {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#d0d0d0'; // efeito padrão para outros botões
    });
  }

  // retorno ao estado inicial no mouse leave
  button.addEventListener('mouseleave', () => {
    if (buttonText === '-') {
      button.style.backgroundColor = '#ffcccc';
    } else if (buttonText === '+') {
      button.style.backgroundColor = '#ccffcc';
    } else if (buttonText === '/') {
      button.style.backgroundColor = '#ffcc99';
    } else if (buttonText === '*') {
      button.style.backgroundColor = '#ffff99';
    } else if (buttonText === '=') {
      button.style.backgroundColor = '#99ccff';
    } else if (['AC', '+/-', '%'].includes(buttonText)) {
      button.style.backgroundColor = '#666666'; // retorna ao cinza escuro
    } else {
      button.style.backgroundColor = '#e0e0e0';
    }
  });

  // adiciona funcionalidade ao clique
  button.addEventListener('click', () => handleButtonClick(buttonText));

  calculator.appendChild(button);
});

// adiciona a calculadora ao container
container.appendChild(calculator);