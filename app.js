// Objeto com o conteúdo de cada rota
const routes = {
    '/': `
        <h1 class="font-title">hey, I'm Joel 👋</h1>
        <p>I'm a Computer Engineering graduate from Universidade de Trás-os-Montes e Alto Douro.</p>
        <p>I have a strong foundation in programming and problem-solving and am passionate about developing innovative solutions.</p>
        <p>Looking forward to new opportunities to apply my skills and expand my knowledge.</p>
    `,
    '/work': `
        <h2>Work</h2>
        <p>Currently looking for an opportunity to learn and improve.</p>
    `,
    '/projects': `
    <h2>Projects</h2>
    <p>Below is a summary of projects I've worked on.</p>

         <div class="project">
     <img src="./assets/csgo.jpg" alt="Counter-Strike Server" class="project-image">
        <h3>Counter-Strike Server Setup</h3>
        <span class="tag">Plugins</span>
        <span class="tag">Networking</span>
        <span class="tag">Server Management</span>
        <p>Configured and optimized, for fun, a Counter-Strike server from scratch, including mods, admin controls, etc.</p>
        <p>Closed for now.</p>
    </div>

    <div class="project">
    <h3>Bachelor's Project</h3>
    <div class="tags">
        <span class="tag tag-python">
            <img src="./assets/python.png" alt="Python logo" class="tag-icon"> PYTHON
        </span>
    </div>
    <p>In collaboration with a team of researchers, I developed a project applying Vision Transformers for early detection of optic disc excavation.
    The study evaluated models like Swin Transformer, DeiT, and Linformer using the BRSET dataset. The work was presented at the DSAI 2024 conference in Abu Dhabi.</p>
</div>

`,
    '/blog': `
        <h2>Blog</h2>
        <p>Coming soon...</p>
    `,
};

// Função para carregar o conteúdo da rota
function loadContent(path) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = routes[path] || '<h1>404 - Page Not Found</h1>';
}

// Função para navegar sem recarregar a página
function navigateTo(path) {
    window.history.pushState({}, path, window.location.origin + path);
    loadContent(path);
}

// Adiciona eventos de clique aos links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link
        const path = link.getAttribute('href');
        navigateTo(path);
    });
});

// Carrega o conteúdo inicial ao abrir a página
window.onload = () => {
    let initialPath = window.location.pathname;
    
    // Garante que caminhos como "/index.html" redirecionem para "/"
    if (initialPath === "/index.html") {
        initialPath = "/";
        window.history.replaceState({}, "", "/");
    }
    
    loadContent(initialPath);
};


// Atualiza o conteúdo ao usar o botão "Voltar" ou "Avançar" do navegador
window.onpopstate = () => {
    const path = window.location.pathname;
    loadContent(path);
};