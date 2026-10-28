// Funciones de formato y cálculo de dinero

// Convierte 8400 en "$ 8.400"
export const formatearPrecio = (valor) => `$ ${valor.toLocaleString("es-CO")}`;

// Convierte un texto a MAYÚSCULAS
export const formatearNombre = (texto) => texto.toUpperCase();

// Calcula el IVA del 19% redondeado a pesos
export const calcularIVA = (valor) => Math.round(valor * 0.19);

// Suma el IVA al valor reutilizando calcularIVA
export const totalConIVA = (valor) => valor + calcularIVA(valor);