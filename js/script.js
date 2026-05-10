// Menu Hamburger Mobile
document.addEventListener('DOMContentLoaded', function() {
    // Criar o botão de menu hamburger dinamicamente
    const sidebar = document.querySelector('.sidebar');
    const sidebarLogo = document.querySelector('.sidebar__logo');
    
    // Verificar se já existe o botão (para evitar duplicação)
    if (!document.querySelector('.sidebar__menu-toggle')) {
        // Criar o botão hamburger
        const menuToggle = document.createElement('button');
        menuToggle.className = 'sidebar__menu-toggle';
        menuToggle.setAttribute('aria-label', 'Toggle menu');
        menuToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        // Inserir o botão após o logo
        sidebar.appendChild(menuToggle);
        
        // Adicionar evento de clique
        menuToggle.addEventListener('click', function() {
            const menu = document.querySelector('.sidebar__menu');
            menu.classList.toggle('active');
        });
    }
    
    // Fechar o menu ao clicar em um link
    const menuItems = document.querySelectorAll('.sidebar__item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const menu = document.querySelector('.sidebar__menu');
            menu.classList.remove('active');
        });
    });
});
