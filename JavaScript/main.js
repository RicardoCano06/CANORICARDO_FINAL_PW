document.addEventListener('DOMContentLoaded', function() {
    let nombre = prompt("Bienvenido a DRS Express. ¿Cuál es tu nombre?");
    if (!nombre) {
        nombre = "visitante";
    }
    alert(`Bienvenido, ${nombre}`);
    document.getElementById('welcomeMessage').textContent = `Bienvenido, ${nombre}`;
});