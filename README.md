# Quick Fill LG Extension

Esta é uma extensão simples para o Google Chrome que permite preencher automaticamente um campo de entrada em um site específico.

Uma demonstração em vídeo passo a passo pode ser encontrada aqui: https://youtu.be/ZLgjbHRX8DI

## Como Usar

1. Faça o download ou clone este repositório.

2. Abra o Chrome e acesse `chrome://extensions/`.

3. Ative o modo de desenvolvedor.

4. Clique em "Carregar sem compactação" e selecione a pasta do projeto.

5. Abra a extensão clicando no ícone na barra de extensões.

6. Insira o valor desejado no campo de entrada e veja o campo no site ser preenchido automaticamente.

## Funcionalidades

- **Armazenamento Local:** O valor inserido no campo de entrada é armazenado localmente usando a API de armazenamento local do Chrome.

- **Preenchimento Automático:** Se um valor estiver salvo localmente, ele será preenchido automaticamente no campo do site ao abrir a extensão.

- **Preenchimento Manual:** Os usuários podem inserir um valor manualmente e acionar o preenchimento automático clicando no botão "Inserir".

## Estrutura do Projeto

- **manifest.json:** Este arquivo contém informações sobre a extensão, incluindo permissões, configurações e referências para outros arquivos.

- **popup.html:** Define a interface do usuário do popup da extensão, que permite aos usuários inserir valores manualmente e acionar o preenchimento automático.

- **popup.js:** Gerencia a lógica do popup, incluindo a recuperação e armazenamento local de valores, bem como o acionamento do preenchimento automático.

- **content.js:** Script de conteúdo injetado nas páginas da web-alvo. Responsável por preencher automaticamente o campo de entrada com o valor fornecido pelo usuário.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para propor melhorias ou corrigir problemas abrindo um problema ou enviando uma solicitação de pull.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
