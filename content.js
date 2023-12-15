chrome.storage.local.get(['valorSalvo'], function (result) {
    
    var valorSalvo = result.valorSalvo;
    
    if (valorSalvo) {
      document.getElementById('Login').value = valorSalvo;
    }
});
  
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.action === 'autofill') {
        document.getElementById('Login').value = request.value;
    }
});
