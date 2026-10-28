import pc from "picocolors";
import { formatearPrecio } from "./util/formato.js";
import { productos } from "./data/productos.js";
import { 
  listarAgotados, 
  valorInventario, 
  buscarPorNombre, 
  vender 
} from "./services/inventario.js";


const comando = process.argv[2];
const valor1 = process.argv[3];
const valor2 = process.argv[4];

console.log(pc.green("===== TIENDA DON PEDRO ====="));

if (comando === "todos") {
  console.table(productos);
} else if (comando === "agotados") {
  const agotados = listarAgotados();
  for (const p of agotados) {
    console.log(`AGOTADO: ${p.nombre}`);
  }
} else if (comando === "buscar" && valor1 !== undefined) {
  const encontrados = buscarPorNombre(valor1);
  if (encontrados.length === 0) {
    console.log(`No hay productos que contengan "${valor1}"`);
  } else {
    for (const p of encontrados) {
      console.log(`Encontrado: ${p.nombre}: ${formatearPrecio(p.precio)} (quedan ${p.cantidad})`);
    }
  }
} else if (comando === "valor") {
  console.log(`Valor del inventario: ${formatearPrecio(valorInventario())}`);
} else if (comando === "vender" && valor2 !== undefined) {
  const mensaje = vender(Number(valor1), Number(valor2));
  if (mensaje.startsWith("ERROR")) {
    console.log(pc.red(mensaje));
  } else {
    console.log(mensaje);
  }
} else {
  console.log("Comandos disponibles:");
  console.log("  node app.js todos");
  console.log("  node app.js agotados");
  console.log("  node app.js buscar <texto>");
  console.log("  node app.js valor");
  console.log("  node app.js vender <id> <unidades>");
}