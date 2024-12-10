const services = [  
    { id: 1, categoria: "Consultoria", descricao: "Consultoria Empresarial", preco: 300 },  
    { id: 2, categoria: "Design", descricao: "Criação de Logotipo", preco: 150 },  
    { id: 3, categoria: "Marketing", descricao: "Marketing Digital", preco: 500 },  
];  

const servicesList = document.getElementById('services-list');  

function displayServices() {  
    servicesList.innerHTML = '';  

    services.forEach(service => {  
        const serviceItem = document.createElement('div');  
        serviceItem.innerHTML = `<strong>${service.categoria}</strong><br>${service.descricao}<br>Preço: R$ ${service.preco}`;  
        servicesList.appendChild(serviceItem);  
    });  
}  

document.getElementById('logout-button').addEventListener('click', function() {  
    // Simulação de logout  
    alert("Logout realizado com sucesso!");  
    window.location.href = 'index.html'; // Redireciona para a página de login  
});  

// Exibir os serviços ao carregar a página do dashboard  
window.onload = displayServices;