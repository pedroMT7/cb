# MEIConnect

**MEIConnect** é uma plataforma online onde Microempreendedores Individuais (MEIs) podem divulgar seus serviços e se conectar com potenciais clientes. O sistema permite que os MEIs se cadastrem, façam login e gerenciem seus perfis e serviços. O projeto é composto por uma interface web com funcionalidades para cadastro, login e visualização de informações no painel de controle.

## Estrutura do Projeto

Este projeto é composto pelos seguintes arquivos:

### 1. **`cadastrar.html`**
   - Página de cadastro de novos usuários (MEIs), onde eles podem criar um perfil inserindo informações como nome, e-mail, senha, etc.

### 2. **`entrar.html`**
   - Página de login para que os MEIs possam acessar sua conta e visualizar seu painel de controle.

### 3. **`painel.html`**
   - Página principal do painel de controle, acessível após o login, onde o usuário pode visualizar e editar suas informações de perfil.

### 4. **`painel.js`**
   - Arquivo JavaScript responsável pela lógica do painel de controle. Ele pode incluir funcionalidades como editar dados do perfil, visualizar os serviços cadastrados, etc.

### 5. **`app.js`**
   - Arquivo JavaScript que lida com a lógica de front-end do site. Inclui validação de formulários e interações com o servidor.

### 6. **`package.json`**
   - Arquivo de configuração do Node.js que lista as dependências do projeto, como Express, para rodar o servidor.

### 7. **`package-lock.json`**
   - Arquivo gerado automaticamente pelo NPM, que registra a versão exata das dependências instaladas para garantir a consistência do projeto.

### 8. **`servidor.js`**
   - Arquivo principal do servidor, responsável por configurar e rodar o servidor web utilizando Node.js e Express. Ele lida com as requisições, autenticação de usuários, e serve as páginas HTML.

### 9. **`estilos.css`**
   - Arquivo CSS que define a aparência do site, como cores, fontes, e layout das páginas HTML.

## Como Executar o Projeto

### Requisitos

- Node.js (recomendado versão 14 ou superior).
- NPM (gerenciador de pacotes do Node.js).
