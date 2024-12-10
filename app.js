const services = [  
    { id: 1, categoria: "Consultoria", descricao: "Consultoria Empresarial", preco: 300 },  
    { id: 2, categoria: "Design", descricao: "Criação de Logotipo", preco: 150 },  
    { id: 3, categoria: "Marketing", descricao: "Marketing Digital", preco: 500 },  
];  

document.getElementById('login-form').addEventListener('submit', function(event) {  
    event.preventDefault();  
    const email = document.getElementById('login-email').value;  
    const password = document.getElementById('login-password').value;  

    // Simulação de autenticação (substituir por lógica real)  
    if (email === "test@test.com" && password === "123456") {  
        alert("Login realizado com sucesso!");  
        window.location.href = 'dashboard.html'; // Redireciona para a página do Dashboard  
    } else {  
        // Não exibe mensagem de erro  
        alert("Tente novamente."); // Mensagem opcional, se desejar  
    }  
});  

document.getElementById('register-form').addEventListener('submit', function(event) {  
    event.preventDefault();  
    const name = document.getElementById('register-name').value;  
    const email = document.getElementById('register-email').value;  
    const password = document.getElementById('register-password').value;  

    // Simulação de registro (substituir por lógica real)  
    alert(`Usuário ${name} registrado com sucesso!`);  
    document.getElementById('register-form').reset();  
});