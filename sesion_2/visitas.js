import fs from "node:fs";
const fecha = new Date().toLocaleString("es-CO");
fs.appendFileSync("visitas.txt", `Visita: ${fecha}\n`);
if (fs.existsSync("visitas.txt")) {
 const contenido = fs.readFileSync("visitas.txt", "utf8");
 const lineas = contenido.trim().split("\n");
 console.log(`Este programa se ha ejecutado ${lineas.length} veces`);
}