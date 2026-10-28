import { formatearPrecio, calcularIVA, totalConIVA } from "./util/formato.js";

console.log(`formatearPrecio(8400): ${formatearPrecio(8400)}`);
console.log(`calcularIVA(8400): ${calcularIVA(8400)}`);
console.log(`totalConIVA(8400): ${totalConIVA(8400)}`);
console.log(`Factura: ${formatearPrecio(totalConIVA(8400))}`);