document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.createElement("button");
    
    toggleButton.classList.add("menu-toggle");
    toggleButton.innerHTML = "☰";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
});

// Verifica se o botão de toggle foi clicado
const toggleButton = document.querySelector('.toggle-button');
const sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Alterna a classe open para mostrar/ocultar o menu
});