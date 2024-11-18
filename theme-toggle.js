document.addEventListener("DOMContentLoaded", function () {
    // Função para alternar o tema
    document.getElementById('toggle-theme').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Carregar o tema salvo no localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
