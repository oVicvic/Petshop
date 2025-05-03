document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    
    // Menu mobile
    if(menuToggle && sidebar) {
        // Cria overlay
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
        
        // Eventos
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            overlay.style.display = sidebar.classList.contains('active') ? 'block' : 'none';
            document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
        });
        
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Fechar menu ao clicar em links (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                document.querySelector('.sidebar-overlay').style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
});