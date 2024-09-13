document.addEventListener("DOMContentLoaded", function() {

    emailjs.init("xxCmRO0tdgIOUuOIC");

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

              
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log(`Nome digitado: ${name}`);
        console.log(`Email digitado: ${email}`);
        console.log(`Menssagem: ${message}`);

        emailjs.send("service_euqbmgr", "template_bh7n1qv", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function(response) {
            alert(`Obrigado por entrar em contato, ${name}! Irei responder em breve`);
            form.reset();     
        }, function(error) {
            alert("Ocorreu um erro. Tente novamente mais tarde.");
            console.error("Erro ao enviar e-mail: ", error);
        });
    });
});
