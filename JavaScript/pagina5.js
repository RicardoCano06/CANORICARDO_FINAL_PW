function calcularTotalProducto() {
    let precio = prompt("Ingrese el precio del producto:");
    let cantidad = prompt("Ingrese la cantidad:");
    if (precio !== null && cantidad !== null) {
        precio = parseFloat(precio);
        cantidad = parseFloat(cantidad);
        if (!isNaN(precio) && !isNaN(cantidad)) {
            let total = precio * cantidad;
            alert(`El total del producto es: ${total}`);
        } else {
            alert("Por favor, ingrese valores numéricos válidos.");
        }
    }
}

function calcularPorcentaje() {
    let precio = prompt("Ingrese el precio:");
    if (precio !== null) {
        precio = parseFloat(precio);
        if (!isNaN(precio)) {
            let porcentaje = precio * 0.30;
            alert(`El 30% del precio es: ${porcentaje}`);
        } else {
            alert("Por favor, ingrese un valor numérico válido.");
        }
    }
}

function calcularDescuento() {
    let precio = prompt("Ingrese el precio del producto:");
    let cantidad = prompt("Ingrese la cantidad:");
    if (precio !== null && cantidad !== null) {
        precio = parseFloat(precio);
        cantidad = parseFloat(cantidad);
        if (!isNaN(precio) && !isNaN(cantidad)) {
            let descuento = precio * 0.25;
            let total = (precio - descuento) * cantidad;
            alert(`El total con el 25% de descuento es: ${total}`);
        } else {
            alert("Por favor, ingrese valores numéricos válidos.");
        }
    }
}