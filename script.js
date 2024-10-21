// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos relevantes do DOM
    const image = document.querySelector('.clickable-image');
    const infoToggle = document.getElementById('infoToggle');
    const info = document.getElementById('info');

    // Função para alternar a exibição das informações
    function toggleInfo() {
        if (info.style.display === 'none' || info.style.display === '') {
            // Se as informações estão ocultas, exibe-as
            info.style.display = 'block';
            image.classList.add('expanded');
            infoToggle.style.display = 'none';
        } else {
            // Se as informações estão visíveis, oculta-as
            info.style.display = 'none';
            image.classList.remove('expanded');
            infoToggle.style.display = 'block';
        }
    }

    // Adiciona event listeners para os elementos clicáveis
    image.addEventListener('click', toggleInfo);
    infoToggle.addEventListener('click', toggleInfo);
});

// Adiciona um event listener para o formulário de contato
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Simula o envio e exibe uma mensagem de resposta
    document.getElementById('responseMessage').innerText = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    // Limpa os campos do formulário após o envio
    document.getElementById('contactForm').reset();
});





// Adiciona uma função para lidar com a rolagem suave para links internos
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links internos (que começam com #)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    // Adiciona um event listener para cada link interno
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();
            
            // Obtém o ID do elemento alvo removendo o # do href
            const targetId = this.getAttribute('href').substring(1);
            // Encontra o elemento alvo no DOM
            const targetElement = document.getElementById(targetId);
            
            // Se o elemento alvo existe, realiza a rolagem suave
            if (targetElement) {
                window.scrollTo({
                    // Calcula a posição de rolagem, subtraindo 100px para compensar cabeçalhos fixos
                    top: targetElement.offsetTop - 100, // Ajuste este valor conforme necessário
                    behavior: 'smooth' // Aplica a animação de rolagem suave
                });
            }
        });
    });
});
