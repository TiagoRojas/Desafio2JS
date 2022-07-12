const precioSolicitada1 = parseInt(prompt('Dime un precio que quieras calcular'))
const precioSolicitada2 = parseInt(prompt('Dime otro precio'))
const precioSolicitada3 = parseInt(prompt('Dime un ultimo precio'))
const sumaPrecio = precioSolicitada1 + precioSolicitada2 + precioSolicitada3
const promedio = sumaPrecio / 3
const oferta = 20
const descuento = x => x * oferta / 100
const nuevoPrecio = sumaPrecio - descuento(sumaPrecio)

console.log("El promedio del precio ingresado es de: " + promedio);
console.log("Y con descuento te queda en: " + nuevoPrecio);