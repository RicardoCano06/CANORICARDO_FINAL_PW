document.addEventListener('DOMContentLoaded', function() {
    alert("Bienvenido a DRS Express.");
    let nombre = prompt("¿Cuál es tu nombre?");
    if (!nombre) {
        nombre = "visitante";
    }
    alert(`Bienvenido, ${nombre}`);
    document.getElementById('welcomeMessage').textContent = `Bienvenido, ${nombre}`;
});