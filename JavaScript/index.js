document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('d_K3sWTx_5HbLV2a3');

    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '1234') {
            message.style.color = 'green';
            message.textContent = 'Ingreso correcto';

            emailjs.send('service_zjsadj6', 'template_0zqovl8', {
                username: username,
                message: 'Ha ingresado a la página web.'
            }).then(function(response) {
                console.log('Correo enviado con éxito', response.status, response.text);
                window.location.href = 'pagina2.html';
            }).catch(function(error) {
                console.error('Error al enviar el mensaje:', error);
                message.textContent = 'Hubo un error al enviar el correo.';
            });
        } else {
            message.style.color = 'red';
            message.textContent = 'Usuario o contraseña incorrectos';
        }
    });
});