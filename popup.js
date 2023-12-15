// Recupere o valor salvo ao carregar o popup
chrome.storage.local.get(['valorSalvo'], function (result) {
    var valorSalvo = result.valorSalvo;
    // Preencha o campo de entrada da extensão com o valor salvo
    document.getElementById('valorInput').value = valorSalvo || "";
  });
  
  // Adicione um evento para preenchimento manual
  document.getElementById('fillButton').addEventListener('click', function () {
    var valor = document.getElementById('valorInput').value;
    // Armazene o valor usando a API de armazenamento local
    chrome.storage.local.set({ 'valorSalvo': valor }, function () {
      console.log('Valor salvo:', valor);
    });
  
    // Envie automaticamente o pedido de preenchimento ao script de conteúdo
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'autofill', value: valor });
    });
  });
  