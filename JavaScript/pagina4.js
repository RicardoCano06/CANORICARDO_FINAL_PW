function calcularSalario() {
    let salario = prompt("Ingrese el salario:");
    let descuento = prompt("Ingrese el porcentaje de descuento:");
    if (salario !== null && descuento !== null) {
        salario = parseFloat(salario);
        descuento = parseFloat(descuento);
        if (!isNaN(salario) && !isNaN(descuento)) {
            let total = salario - (salario * (descuento / 100));
            alert(`El total del salario después del descuento es: ${total}`);
        } else {
            alert("Por favor, ingrese valores numéricos válidos.");
        }
    }
}

function calcularPuntos() {
    let puntos1 = prompt("Ingrese el primer puntaje:");
    let puntos2 = prompt("Ingrese el segundo puntaje:");
    let puntos3 = prompt("Ingrese el tercer puntaje:");
    if (puntos1 !== null && puntos2 !== null && puntos3 !== null) {
        puntos1 = parseFloat(puntos1);
        puntos2 = parseFloat(puntos2);
        puntos3 = parseFloat(puntos3);
        if (!isNaN(puntos1) && !isNaN(puntos2) && !isNaN(puntos3)) {
            let total = puntos1 + puntos2 + puntos3;
            alert(`El total de los puntajes es: ${total}`);
        } else {
            alert("Por favor, ingrese valores numéricos válidos.");
        }
    }
}

function calcularPorcentaje() {
    let puntaje = prompt("Ingrese el puntaje:");
    if (puntaje !== null) {
        puntaje = parseFloat(puntaje);
        if (!isNaN(puntaje)) {
            let porcentaje = puntaje * 0.15;
            alert(`El 15% del puntaje es: ${porcentaje}`);
        } else {
            alert("Por favor, ingrese un valor numérico válido.");
        }
    }
}