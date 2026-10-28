export const formatearPrecio = (valor) => `$ ${valor.toLocaleString("es-CO")}`;
export const formatearNombre = (texto) => texto.toUpperCase();
export const calcularIVA = (valor) => Math.round(valor * 0.19);
export const totalConIVA = (valor) => valor + calcularIVA(valor);
