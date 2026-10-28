import fs from "node:fs";
import { productos } from "../data/productos.js";
import { formatearPrecio } from "../util/formato.js";

export const buscarPorId = (id) => productos.find((p) => p.id === id);

export const listarAgotados = () => productos.filter((p) => p.cantidad === 0);

export const valorInventario = () => {
  let total = 0;
  for (const p of productos) {
    total = total + p.precio * p.cantidad;
  }
  return total;
};

export const buscarPorNombre = (texto) => 
  productos.filter((p) => p.nombre.toLowerCase().includes(texto.toLowerCase()));

export const vender = (id, unidades) => {
  const producto = buscarPorId(id);

  if (producto === undefined) {
    return "ERROR: Producto no encontrado";
  }

  if (producto.cantidad < unidades) {
    return `ERROR: No hay suficiente ${producto.nombre} (quedan ${producto.cantidad})`;
  }

  const total = producto.precio * unidades;
  producto.cantidad -= unidades;

  const fecha = new Date().toLocaleString("es-CO");
  fs.appendFileSync("ventas.txt", `${fecha} | ${producto.nombre} | ${unidades} | $ ${total}\n`);

  return `Venta: ${unidades} x ${producto.nombre} = ${formatearPrecio(total)}. Quedan ${producto.cantidad}`;
};