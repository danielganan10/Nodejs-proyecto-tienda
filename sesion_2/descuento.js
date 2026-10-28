
const precioArg = process.argv[2];
const descuentoArg = process.argv[3];

if (!precioArg || !descuentoArg) {
    console.log("Error: Faltan datos.");
    console.log("Uso correcto: node descuento.js [precio] [porcentaje]");
    console.log("Ejemplo: node descuento.js 6500 10");
    process.exit(1);
}

const precio = Number(precioArg);
const porcentaje = Number(descuentoArg);

if (isNaN(precio) || isNaN(porcentaje)) {
    console.log("Error: El precio y el porcentaje deben ser números válidos.");
    process.exit(1);
}

const total = precio - (precio * porcentaje / 100);
console.log(`Precio con ${porcentaje}% de descuento: $${total}`);