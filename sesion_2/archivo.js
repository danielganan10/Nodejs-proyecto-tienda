import fs from "node:fs";
fs.writeFileSync("saludo.txt", "Hola desde Node.js");

const saludo = fs.readFileSync("saludo.txt", "utf8");

console.log(saludo);


const contenido = "Arroz 500 g\nLeche 1 L\nPan tajado";
fs.writeFileSync('lista-compras.txt', contenido, 'utf8');
const resultado = fs.readFileSync('lista-compras.txt', 'utf8');
console.log(resultado);