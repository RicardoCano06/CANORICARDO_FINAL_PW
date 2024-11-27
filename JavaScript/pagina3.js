document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('d_K3sWTx_5HbLV2a3');

    const employeeForm = document.getElementById('employeeForm');
    const formMessage = document.getElementById('formMessage');
    const clearFormButton = document.getElementById('clearForm');
    const salaryInput = document.getElementById('salary');

    // Formatear el salario mientras se escribe
    salaryInput.addEventListener('input', function(event) {
        let value = event.target.value;
        value = value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
        value = new Intl.NumberFormat('es-ES').format(value); // Formatear el número
        event.target.value = value;
    });

    employeeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const employee = document.getElementById('employee').value;
        const salary = document.getElementById('salary').value.replace(/\./g, ''); // Eliminar puntos de formato
        const message = document.getElementById('message').value;
        const sender = document.getElementById('sender').value;

        emailjs.send('service_zjsadj6', 'template_ktnsfbi', {
            employee: employee,
            salary: salary,
            message: message,
            sender: sender
        }).then(function(response) {
            formMessage.style.color = 'green';
            formMessage.textContent = 'Mensaje enviado exitosamente.';
        }).catch(function(error) {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Hubo un error al enviar el mensaje.';
        });
    });

    clearFormButton.addEventListener('click', function() {
        employeeForm.reset();
        formMessage.textContent = '';
    });
});