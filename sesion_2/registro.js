const fs = require('node:fs');

const nombre = process.argv[2];

if (!nombre) {
    console.log("Por favor, ingresa un nombre. Ejemplo: node registro.js Diana");
    process.exit(1);
}

const hora = new Date().toLocaleTimeString("es-CO");
const lineaRegistro = `${nombre} llegó a las ${hora}\n`;

fs.appendFileSync('asistencia.txt', lineaRegistro, 'utf8');

const contenido = fs.readFileSync('asistencia.txt', 'utf8');
const lineas = contenido.trim().split('\n');
const totalAsistentes = lineas.length;
console.log(`Registrado: ${nombre}. Asistentes hasta ahora: ${totalAsistentes}`);