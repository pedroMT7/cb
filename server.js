const express = require('express');
const path = require('path');
const app = express();
const PORT = 7070; // Porta alterada para 7070

// Serve arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página de cadastro (cadastrar.html)
app.get('/cadastrar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastrar.html'));
});

// Rota para a página de login (entrar.html)
app.get('/entrar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'entrar.html'));
});

// Rota para o dashboard (dashboard.html)
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Rota padrão (home) para carregar um arquivo inicial ou de boas-vindas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastrar.html')); // Página inicial configurada como cadastrar.html
});

// Inicia o servidor na porta 7070
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
