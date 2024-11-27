document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('d_K3sWTx_5HbLV2a3');

    const studentForm = document.getElementById('studentForm');
    const formMessage = document.getElementById('formMessage');
    const clearFormButton = document.getElementById('clearForm');
    const gradeInput = document.getElementById('grade');

    gradeInput.addEventListener('input', function(event) {
        let value = event.target.value;
        value = value.replace(/\D/g, ''); // Eliminar caracteres no numéricos       
        event.target.value = value;
    });

    studentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const student = document.getElementById('student').value;
        const grade = document.getElementById('grade').value.replace(/\./g, '');
        const message = document.getElementById('message').value;
        const sender = document.getElementById('sender').value;

        emailjs.send('service_zjsadj6', 'template_ktnsfbi', {
            student: student,
            grade: grade,
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
        studentForm.reset();
        formMessage.textContent = '';
    });
});