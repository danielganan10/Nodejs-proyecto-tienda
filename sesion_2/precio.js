
const precio = Number(process.argv[2]);
const cantidad = Number(process.argv[3]);

const total = precio * cantidad;

console.log(`Total: $${total}`);
console.log("Sin Number:", process.argv[2] + process.argv[3]);
