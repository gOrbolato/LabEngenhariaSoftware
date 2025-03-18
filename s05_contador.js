// Função para criar o contador de pessoas
function createPeopleCounter() {
    const app = document.getElementById('app');
  
    // Criar título
    const title = document.createElement('h1');
    title.textContent = 'Contador de Pessoas';
    title.style.fontSize = '24px';
    title.style.color = '#333';
    title.style.textAlign = 'center';
  
    // Contador Total
    const totalContainer = document.createElement('div');
    totalContainer.style.marginBottom = '20px';
    totalContainer.style.textAlign = 'center';
  
    const totalLabel = document.createElement('span');
    totalLabel.textContent = 'Total: ';
    totalLabel.style.fontSize = '20px';
    totalLabel.style.fontWeight = 'bold';
  
    const totalValue = document.createElement('span');
    totalValue.textContent = '0';
    totalValue.style.fontSize = '20px';
    totalValue.style.fontWeight = 'bold';
    totalValue.style.color = '#555';
  
    totalContainer.appendChild(totalLabel);
    totalContainer.appendChild(totalValue);
  
    // Contador de Homens
    const menContainer = document.createElement('div');
    menContainer.style.display = 'flex';
    menContainer.style.alignItems = 'center';
    menContainer.style.justifyContent = 'center';
    menContainer.style.marginBottom = '10px';
  
    const menSymbol = document.createElement('span');
    menSymbol.textContent = '♂'; // Símbolo de homem
    menSymbol.style.fontSize = '40px';
    menSymbol.style.color = '#007bff'; // Cor azul para homens
    menSymbol.style.marginRight = '10px';
    menSymbol.title = 'Homens'; // Tooltip para esclarecer
  
    const menLabel = document.createElement('span');
    menLabel.textContent = 'Homens: ';
    menLabel.style.fontSize = '18px';
    menLabel.style.fontWeight = 'bold';
  
    const menValue = document.createElement('span');
    menValue.textContent = '0';
    menValue.style.fontSize = '18px';
    menValue.style.fontWeight = 'bold';
    menValue.style.color = '#007bff';
  
    const menIncrementButton = document.createElement('button');
    menIncrementButton.textContent = '+';
    menIncrementButton.style.marginLeft = '10px';
    menIncrementButton.style.padding = '5px 10px';
    menIncrementButton.style.backgroundColor = '#007bff';
    menIncrementButton.style.color = '#fff';
    menIncrementButton.style.border = 'none';
    menIncrementButton.style.borderRadius = '5px';
    menIncrementButton.style.cursor = 'pointer';
  
    const menDecrementButton = document.createElement('button');
    menDecrementButton.textContent = '-';
    menDecrementButton.style.marginLeft = '5px';
    menDecrementButton.style.padding = '5px 10px';
    menDecrementButton.style.backgroundColor = '#f44336';
    menDecrementButton.style.color = '#fff';
    menDecrementButton.style.border = 'none';
    menDecrementButton.style.borderRadius = '5px';
    menDecrementButton.style.cursor = 'pointer';
  
    menContainer.appendChild(menSymbol);
    menContainer.appendChild(menLabel);
    menContainer.appendChild(menValue);
    menContainer.appendChild(menIncrementButton);
    menContainer.appendChild(menDecrementButton);
  
    // Contador de Mulheres
    const womenContainer = document.createElement('div');
    womenContainer.style.display = 'flex';
    womenContainer.style.alignItems = 'center';
    womenContainer.style.justifyContent = 'center';
    womenContainer.style.marginBottom = '20px';
  
    const womenSymbol = document.createElement('span');
    womenSymbol.textContent = '♀'; // Símbolo de mulher
    womenSymbol.style.fontSize = '40px';
    womenSymbol.style.color = '#e83e8c'; // Cor rosa para mulheres
    womenSymbol.style.marginRight = '10px';
    womenSymbol.title = 'Mulheres'; // Tooltip para esclarecer
  
    const womenLabel = document.createElement('span');
    womenLabel.textContent = 'Mulheres: ';
    womenLabel.style.fontSize = '18px';
    womenLabel.style.fontWeight = 'bold';
  
    const womenValue = document.createElement('span');
    womenValue.textContent = '0';
    womenValue.style.fontSize = '18px';
    womenValue.style.fontWeight = 'bold';
    womenValue.style.color = '#e83e8c';
  
    const womenIncrementButton = document.createElement('button');
    womenIncrementButton.textContent = '+';
    womenIncrementButton.style.marginLeft = '10px';
    womenIncrementButton.style.padding = '5px 10px';
    womenIncrementButton.style.backgroundColor = '#e83e8c';
    womenIncrementButton.style.color = '#fff';
    womenIncrementButton.style.border = 'none';
    womenIncrementButton.style.borderRadius = '5px';
    womenIncrementButton.style.cursor = 'pointer';
  
    const womenDecrementButton = document.createElement('button');
    womenDecrementButton.textContent = '-';
    womenDecrementButton.style.marginLeft = '5px';
    womenDecrementButton.style.padding = '5px 10px';
    womenDecrementButton.style.backgroundColor = '#f44336';
    womenDecrementButton.style.color = '#fff';
    womenDecrementButton.style.border = 'none';
    womenDecrementButton.style.borderRadius = '5px';
    womenDecrementButton.style.cursor = 'pointer';
  
    womenContainer.appendChild(womenSymbol);
    womenContainer.appendChild(womenLabel);
    womenContainer.appendChild(womenValue);
    womenContainer.appendChild(womenIncrementButton);
    womenContainer.appendChild(womenDecrementButton);
  
    // Funções para atualizar o contador total
    function updateTotal() {
      const menCount = parseInt(menValue.textContent);
      const womenCount = parseInt(womenValue.textContent);
      totalValue.textContent = menCount + womenCount;
    }
  
    // Eventos para Homens
    menIncrementButton.onclick = () => {
      let currentValue = parseInt(menValue.textContent);
      menValue.textContent = currentValue + 1;
      updateTotal();
    };
  
    menDecrementButton.onclick = () => {
      let currentValue = parseInt(menValue.textContent);
      if (currentValue > 0) {
        menValue.textContent = currentValue - 1;
        updateTotal();
      }
    };
  
    // Eventos para Mulheres
    womenIncrementButton.onclick = () => {
      let currentValue = parseInt(womenValue.textContent);
      womenValue.textContent = currentValue + 1;
      updateTotal();
    };
  
    womenDecrementButton.onclick = () => {
      let currentValue = parseInt(womenValue.textContent);
      if (currentValue > 0) {
        womenValue.textContent = currentValue - 1;
        updateTotal();
      }
    };
  
    // Montar a estrutura no DOM
    app.appendChild(title);
    app.appendChild(totalContainer);
    app.appendChild(menContainer);
    app.appendChild(womenContainer);
  }
  
  // Inicializar o contador quando a página carregar
window.onload = createPeopleCounter;