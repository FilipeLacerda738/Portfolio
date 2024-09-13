document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log(`Nome digitado: ${name}`);
        console.log(`Email digitado: ${email}`);
        console.log(`Menssagem: ${message}`);

        if (name && email && message) {
            alert(`Obrigado por entrar em contato, ${name}! Irei responder em breve`);
            form.reset();  
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});
